from PIL import Image

from app.pipeline import compress_jpeg


def test_compress_jpeg_max_size():
    image = Image.new("RGB", (1280, 720), (120, 130, 140))
    data = compress_jpeg(image, max_bytes=2 * 1024 * 1024)
    assert len(data) <= 2 * 1024 * 1024
