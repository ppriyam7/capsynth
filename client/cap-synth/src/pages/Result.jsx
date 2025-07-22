import React, { useState } from "react";
import UploadBox from "../components/UploadBox.jsx";
import MediaPreview from "../components/MediaPreview.jsx";
import InputForm from "../components/InputForm.jsx";
import AnalyzeButton from "../components/";
const CapSynthDemo = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleFileSelect = (selectedFile) => {
    setFile(selectedFile);
    setResults(null);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setIsAnalyzing(true);
    setError(null);
    const formdata = new FormData();
    try {
      const uploadres = await fetch("http:://localhost:5000/upload", {
        method: "POST",
        body: formdata,
      });
      const uploadData = await uploadres.json();
      const videoId = uploadData.videoId;
      const pollresults = async () => {
        const res = await fetch(`http://localhost:5000/video/${videoId}`);
        const data = await res.json();
        if (data.status !== "done") setTimeout(pollresults, 2000);
        else {
          setResults({
            captions: data.captions,
            description: data.description,
            entities: data.entities?.map((e, i) => ({
              name: `entity-${i}`,
              type: "semantic",
              confidence: 1.0,
            })),
          });
          setIsAnalyzing(false);
        }
      };
      pollresults();
    } catch (error) {
      console.log("Oops, there was an error!", error.message);
      setError("An error occurred");
      setIsAnalyzing(false);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setResults(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Cap<span className="text-blue-600">Synth</span>
          </h1>
          <p className="text-xl text-slate-600">
            AI-powered media analysis and caption generation
          </p>
        </div>

        <div className="space-y-8">
          <UploadBox
            type="file"
            accept="video/*"
            onFileSelect={handleFileSelect}
            isUploading={isUploading}
          />

          {file && (
            <>
              <MediaPreview file={file} onRemove={handleRemoveFile} />

              <InputForm onSubmit={handleAnalyze} isLoading={isAnalyzing} />

              <AnalyzeButton
                onClick={() => handleAnalyze({})}
                isLoading={isAnalyzing}
                file={file}
              />
            </>
          )}

          <ErrorDisplay
            error={error}
            onRetry={() => handleAnalyze({})}
            onDismiss={() => setError(null)}
          />

          {(results || isAnalyzing) && (
            <ResultsContainer
              onExport={(data) => console.log("Exported:", data)}
            >
              <CaptionOutput
                caption={results?.caption}
                isLoading={isAnalyzing}
              />

              <SemanticDescription
                description={results?.description}
                isLoading={isAnalyzing}
              />

              <EntityTags
                entities={results?.entities}
                isLoading={isAnalyzing}
              />
            </ResultsContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default CapSynthDemo;
