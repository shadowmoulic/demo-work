"""
Convert downloaded US Yellow Pages JSON files to CSV.
"""

import os
import json
import pandas as pd

DATA_DIR = os.path.dirname(os.path.abspath(__file__))

def convert_json_to_csv(json_filename):
    json_path = os.path.join(DATA_DIR, json_filename)
    csv_filename = json_filename.replace(".json", ".csv")
    csv_path = os.path.join(DATA_DIR, csv_filename)
    
    if not os.path.exists(json_path):
        print(f"File not found: {json_path}")
        return
        
    print(f"Reading {json_filename}...")
    with open(json_path, "r", encoding="utf-8") as f:
        records = json.load(f)
        
    # Convert any complex types like list (e.g., tags) to strings
    for record in records:
        if "tags" in record and isinstance(record["tags"], list):
            record["tags"] = ";".join(record["tags"])
            
    df = pd.DataFrame(records)
    df.to_csv(csv_path, index=False, encoding="utf-8")
    print(f"Successfully converted and saved to {csv_filename} ({len(df)} records)")

if __name__ == "__main__":
    for item in os.listdir(DATA_DIR):
        if item.endswith(".json"):
            convert_json_to_csv(item)
