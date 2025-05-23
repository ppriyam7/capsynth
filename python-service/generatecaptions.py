# import sys
# import cv2
# import numpy as np
# from scenedetect import detect, ContentDetector
# from transformers import BlipProcessor, BlipForConditionalGeneration
# import torch
# from PIL import Image

# def extract_keyframes(video_path, output_dir="keyframes"):
#     scene_list = detect(video_path, ContentDetector())
#     keyframes = []
#     for i, scene in enumerate(scene_list[:3]):
#         cap = cv2.VideoCapture(video_path)
#         cap.set(cv2.CAP_PROP_POS_FRAMES, scene[0].get_frames())
#         ret, frame = cap.read()
#         frame = cv2.resize(frame, (128, 128))
#         keyframes.append(frame)
#     return keyframes


# processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-tiny")
# model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-tiny")

# def generate_captions(video_path):
#     keyframes = extract_keyframes(video_path)
#     captions = []
#     for frame in keyframes:
#         inputs = processor(frame, return_tensors="pt")
#         outputs = model.generate(**inputs)
#         caption = processor.decode(outputs[0], skip_special_tokens=True)
#         captions.append(caption)
#     return " ".join(captions)

# if __name__ == "__main__":
#     video_path = sys.argv[1]
#     print(generate_captions(video_path))

    
import sys
import cv2
from scenedetect import detect, ContentDetector
from transformers import BlipProcessor, BlipForConditionalGeneration
import torch
from PIL import Image
import numpy as np

def extract_keyframes(video_path):
    scene_list = detect(video_path, ContentDetector())
    keyframes = []
    cap = cv2.VideoCapture(video_path)

    for i, scene in enumerate(scene_list[:3]):
        cap.set(cv2.CAP_PROP_POS_FRAMES, scene[0].get_frames())
        ret, frame = cap.read()
        if ret:
            frame = cv2.resize(frame, (128, 128))
            frame = Image.fromarray(cv2.cvtColor(frame, cv2.COLOR_BGR2RGB))
            keyframes.append(frame)
    cap.release()
    return keyframes

processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-tiny")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-tiny")

def generate_captions(video_path):
    keyframes = extract_keyframes(video_path)
    captions = []
    for frame in keyframes:
        inputs = processor(images=frame, return_tensors="pt")
        outputs = model.generate(**inputs)
        caption = processor.decode(outputs[0], skip_special_tokens=True)
        captions.append(caption)
    return " ".join(captions)

if __name__ == "__main__":
    video_path = sys.argv[1]
    print(generate_captions(video_path))
