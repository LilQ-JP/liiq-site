from app.pipeline import passes_quality_gate


def test_quality_gate_thresholds():
    assert passes_quality_gate(0.2) is True
    assert passes_quality_gate(0.1) is False
    assert passes_quality_gate(0.95) is False
