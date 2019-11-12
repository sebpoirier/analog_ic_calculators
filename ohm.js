var info = {
    "inout": {
        "V": {"unit": "V"},
        "R": {"unit": "Ohm"},
        "I": {"unit": "A"},
        "P": {"unit": "W"}
    }
};

function V_calc(R, I) {
    var V = R * I;
    var P = V * I;
    return ([V, P]);
}

function R_calc(V, I) {
    var R = V / I;
    var P = V * I;
    return ([R, P]);
}

function I_calc(V, R) {
    var I = V / R;
    var P = V * I;
    return ([I, P]);
}
