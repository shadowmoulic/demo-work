"""
US Yellow Pages Dataset Downloader
Source: https://www.kaggle.com/datasets/crawlfeeds/us-yellow-pages-dataset
"""

import os
import shutil
import kagglehub

# Output directory (same folder as this script: data/)
DATA_DIR = os.path.dirname(os.path.abspath(__file__))

print("Downloading US Yellow Pages dataset from Kaggle...")
try:
    # Download the dataset using kagglehub
    downloaded_path = kagglehub.dataset_download("crawlfeeds/us-yellow-pages-dataset")
    print(f"Downloaded files located in cache: {downloaded_path}")

    # Copy files to our local data/ directory
    copied_files = []
    for item in os.listdir(downloaded_path):
        src_path = os.path.join(downloaded_path, item)
        dst_path = os.path.join(DATA_DIR, item)
        
        # Don't overwrite the script itself or the gitkeep file
        if item in ["download_dataset.py", ".gitkeep"]:
            continue
            
        if os.path.isdir(src_path):
            if os.path.exists(dst_path):
                shutil.rmtree(dst_path)
            shutil.copytree(src_path, dst_path)
        else:
            shutil.copy2(src_path, dst_path)
        copied_files.append(item)

    print("\nSuccessfully fetched and copied dataset files:")
    for file in copied_files:
        size_mb = os.path.getsize(os.path.join(DATA_DIR, file)) / (1024 * 1024)
        print(f" - {file} ({size_mb:.2f} MB)")
        
except Exception as e:
    print(f"Error fetching dataset: {e}")
