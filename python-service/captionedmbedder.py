import sys
from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer("all-MiniLM-L6-v2")

def embed_caption(caption):
    embedding = model.encode([caption])[0]
    return embedding.tolist()

if __name__ == "__main__":
    caption = sys.argv[1]
    vector = embed_caption(caption)
    print(",".join(map(str, vector)))
