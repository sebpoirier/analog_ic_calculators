var info = {
    "inout": {
        "R": {"unit": "Ohm"},
        "L": {"unit": "H"},
        "tau": {"unit": "s"},
        "fc": {"unit": "Hz"}
    }
};

function fc_calc(R, L) {
    var tau = R / L;
    var fc = 1 / (6.2832 * tau);
    return ([fc, tau]);
}

function R_calc(L, fc) {
    var tau = 1 / (6.2832 * fc);
    var R = tau * L;
    return ([R, tau]);
}

function L_calc(R, fc) {
    var tau = 1 / (6.2832 * fc);
    var L = R / tau;
    return ([L, tau]);
}

