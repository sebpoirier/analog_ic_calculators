var info = {
    "inout": {
        "V": {"unit": "V"},
        "C": {"unit": "F"},
        "t": {"unit": "s"},
        "I": {"unit": "A"}
    }
};

function V_calc(I, t, C) {
    var V = I * t / C;
    return ([V]);
}

function C_calc(I, t, V) {
    var C = I * t / V;
    return ([C]);
}

function I_calc(C, V, t) {
    var I = C * V / t;
    return ([I]);
}

function t_calc(C, V, I) {
    var t = C * V / I;
    return ([t]);
}
