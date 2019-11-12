var info = {
    "inout": {
        "V": {"unit": "V"},
        "L": {"unit": "H"},
        "t": {"unit": "s"},
        "I": {"unit": "A"}
    }
};

function V_calc(L, I, t) {
    var V = L * I / t;
    return ([V]);
}

function t_calc(L, I, V) {
    var t = L * I / V;
    return ([t]);
}

function L_calc(V, t, I) {
    var L = V * t / I;
    return ([L]);
}

function I_calc(V, t, L) {
    var I = V * t / L;
    return ([I]);
}

