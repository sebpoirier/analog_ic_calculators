var info = {
    "inout": {
        "V": {"unit": "V"},
        "R": {"unit": "Ohm"},
        "I": {"unit": "A"}
    }
};

function V_calc(R, I) {
    var V = R * I;
    return ([V]);
}

function R_calc(V, I) {
    var R = V / I;
    return ([R]);
}

function I_calc(V, R) {
    var I = V / R;
    return ([I]);
}
