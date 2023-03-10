import os
import pathlib
from pathlib import Path
from tqdm import tqdm

audio_path = Path("./wavs")

audio_path_list = audio_path.rglob("*.wav")

for _path in tqdm(list(audio_path_list)):
    os.system(f"ffmpeg-normalize {str(_path)} -nt rms -t=-20 -o {str(_path)} -ar 16000 -f")
