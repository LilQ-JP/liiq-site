from PIL import Image, ImageDraw, ImageFilter

from app.pipeline import score_frame


def test_score_prefers_sharp(tmp_path):
    image = Image.new("RGB", (640, 360), "black")
    draw = ImageDraw.Draw(image)
    for x in range(0, 640, 20):
        color = "white" if (x // 20) % 2 == 0 else "black"
        draw.rectangle([x, 0, x + 10, 360], fill=color)

    sharp_path = tmp_path / "sharp.jpg"
    image.save(sharp_path)

    blur = image.filter(ImageFilter.GaussianBlur(8))
    blur_path = tmp_path / "blur.jpg"
    blur.save(blur_path)

    assert score_frame(sharp_path) > score_frame(blur_path)
