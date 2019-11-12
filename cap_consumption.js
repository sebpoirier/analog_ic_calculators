var info = {
    "inout": {
        "C": {"unit": "F"},
        "V": {"unit": "V"},
        "f": {"unit": "Hz"},
        "I": {"unit": "A"},
        "P": {"unit": "W"}
    }
};

function I_calc(C, V, f) {
    var I = C * V * f;
    var P = V * I;
    return ([I, P]);
}
