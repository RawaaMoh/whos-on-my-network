import os
from pathlib import Path

# Database
DATABASE_SQLITE_FILE_LOCATION = os.getenv('DATABASE_SQLITE_FILE_LOCATION', Path(__file__).absolute().parent / 'database.sqlite')

# Web interface
HOST = os.getenv('HOST', '0.0.0.0')
PORT = int(os.getenv('PORT', 8080))

# General Application
VERBOSE = False
DEFAULT_NETWORK_ID = '192.168.1.0/24'
DEFAULT_PLUGIN = None
