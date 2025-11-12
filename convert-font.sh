#!/bin/bash

# Script to convert WOFF font to WOFF2 format for better web performance
# WOFF2 provides the best compression and is supported by all modern browsers
# This script uses Python's fonttools library with brotli support for conversion

set -e  # Exit on error

FONT_DIR="app/fonts/Kumbh_Sans"
WOFF_FILE="$FONT_DIR/KumbhSans-VariableFont_YOPQ,wght.woff"
WOFF2_FILE="$FONT_DIR/KumbhSans-VariableFont_YOPQ,wght.woff2"

# Check if WOFF file exists
if [ ! -f "$WOFF_FILE" ]; then
    echo "Error: Font file not found at $WOFF_FILE"
    exit 1
fi

# Check if Python is available
if ! command -v python3 &> /dev/null; then
    echo "Error: Python 3 is required but not installed."
    echo "Please install Python 3 to use this script."
    exit 1
fi

# Check if fonttools is installed, if not, install it
if ! python3 -c "import fontTools" 2>/dev/null; then
    echo "fonttools not found. Installing fonttools..."
    pip3 install fonttools --user
fi

# Check if brotli is installed (required for WOFF2), if not, install it
if ! python3 -c "import brotli" 2>/dev/null; then
    echo "brotli not found. Installing brotli..."
    pip3 install brotli --user
fi

# Convert WOFF to WOFF2
echo "Converting $WOFF_FILE to WOFF2 format..."
python3 -c "
from fontTools.ttLib import TTFont
font = TTFont('$WOFF_FILE')
font.flavor = 'woff2'
font.save('$WOFF2_FILE')
print('Conversion successful!')
"

# Check if conversion was successful
if [ -f "$WOFF2_FILE" ]; then
    WOFF_SIZE=$(du -h "$WOFF_FILE" | cut -f1)
    WOFF2_SIZE=$(du -h "$WOFF2_FILE" | cut -f1)
    echo ""
    echo "✓ Conversion complete!"
    echo "  Original WOFF size: $WOFF_SIZE"
    echo "  New WOFF2 size: $WOFF2_SIZE"
    echo "  Output file: $WOFF2_FILE"
    echo ""
    echo "WOFF2 is supported by all modern browsers and provides the best compression!"
else
    echo "Error: Conversion failed. WOFF2 file was not created."
    exit 1
fi

