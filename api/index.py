import sys
import os
from pathlib import Path

# Add coaching_institute_agent to sys.path so its backend modules can be imported
current_dir = Path(__file__).resolve().parent
agent_dir = current_dir.parent / "coaching_institute_agent"
sys.path.insert(0, str(agent_dir))

# Set PYTHONPATH environment variable to help Python resolve imports in serverless env
os.environ["PYTHONPATH"] = str(agent_dir)

# Import the FastAPI app from the coaching agent's main backend file
from backend.main import app

# Wrap with Mangum so Vercel's serverless runtime (AWS Lambda-style) can invoke it
from mangum import Mangum
handler = Mangum(app, lifespan="off")
