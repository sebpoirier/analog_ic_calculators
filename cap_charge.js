var info = {
    "inout": {
        "V": {"unit": "V"},
        "C": {"unit": "F"},
        "t": {"unit": "s"},
        "I": {"unit": "A"},
        "SR": {"unit": "V/s"}
    },
    "title": "Capacitor charge time"
};

function V_calc(I, t, C) {
    var V = I * t / C;
    var SR = V / t;
    return ([V, SR]);
}

function C_calc(I, t, V) {
    var C = I * t / V;
    var SR = V / t;
    return ([C, SR]);
}

function I_calc(C, V, t) {
    var I = C * V / t;
    var SR = V / t;
    return ([I, SR]);
}

function t_calc(C, V, I) {
    var t = C * V / I;
    var SR = V / t;
    return ([t, SR]);
}
