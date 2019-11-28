var info = {
    "inout": {
        "R": {"unit": "Ohm"},
        "L": {"unit": "H"},
        "C": {"unit": "C"},
        "fc": {"unit": "Hz"},
        "Q": {"unit": ""}
    }
};

function fc_calc(R, L, C) {
    var fc = 1 / (6.2832 * Math.sqrt(L * C));
    var Q = 1 / R * Math.sqrt(L / C);
    return ([fc, Q]);
}
