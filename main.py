# Main entry point for Railway deployment
# This file imports the FastAPI app from the backend directory

import sys
from pathlib import Path

# Add backend directory to Python path
backend_path = Path(__file__).parent / "backend"
sys.path.insert(0, str(backend_path))

# Import the FastAPI app from server.py
from server import app

# Railway will now find the 'app' object here
