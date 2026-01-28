from pdfminer.high_level import extract_text
import sys

def get_text(pdf_path):
    try:
        text = extract_text(pdf_path)
        print(text)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)

if __name__ == "__main__":
    get_text("Nadeem Khan updated cv.pdf")
