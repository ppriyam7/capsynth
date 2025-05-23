import sys
from transformers import pipeline
text=sys.argv[1]
summarizer=pipeline("summarization",model="facebook/bart-large-cnn")
summary=summarizer(text,max_length=60,min_length=20,do_sample=False)
print(summary[0]['summary_text'])

