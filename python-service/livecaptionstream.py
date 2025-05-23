# python-service/live_caption_stream.py
import sys
import time
from transformers import BlipProcessor, BlipForConditionalGeneration, MarianMTModel, MarianTokenizer
from scenedetect import detect, ContentDetector
import cv2
import torch
from PIL import Image

video_path = sys.argv[1]
target_lang = sys.argv[2] if len(sys.argv) > 2 else "en"

# Setup captioning model
caption_processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-tiny")
caption_model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-tiny")

# Setup translation model
if target_lang != "en":
    model_name = f'Helsinki-NLP/opus-mt-en-{target_lang}'
    translation_model = MarianMTModel.from_pretrained(model_name)
    tokenizer = MarianTokenizer.from_pretrained(model_name)

def translate(text):
    if target_lang == "en":
        return text
    tokens = tokenizer.prepare_seq2seq_batch([text], return_tensors="pt")
    output = translation_model.generate(**tokens)
    return tokenizer.decode(output[0], skip_special_tokens=True)

def extract_keyframes(video_path, max_frames=5):
    scenes = detect(video_path, ContentDetector())
    frames = []
    cap = cv2.VideoCapture(video_path)
    for i, scene in enumerate(scenes[:max_frames]):
        cap.set(cv2.CAP_PROP_POS_FRAMES, scene[0].get_frames())
        ret, frame = cap.read()
        frame = cv2.resize(frame, (128, 128))
        frames.append(Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)))
    return frames

frames = extract_keyframes(video_path)
for i, frame in enumerate(frames):
    inputs = caption_processor(frame, return_tensors="pt")
    output = caption_model.generate(**inputs)
    caption = caption_processor.decode(output[0], skip_special_tokens=True)
    translated = translate(caption)
    print(translated)
    time.sleep(2)  # simulate delay
