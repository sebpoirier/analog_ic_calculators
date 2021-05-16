var info = {
    "inout": {
        "d": {"unit": "mm"},
        "x": {"unit": "mm"},
        "y": {"unit": "mm"},
        "n": {"unit": ""}
    }
};

function n_calc(x, y, d = 200) {
    var wafer_area = Math.PI * d**2 / 4;
    var die_area = x * y;
    var n = wafer_area / die_area;
    return ([n]);
}
