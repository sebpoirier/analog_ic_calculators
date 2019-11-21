var info = {
    "inout": {
        "R": {"unit": "Ohm"},
        "C": {"unit": "F"},
        "tau": {"unit": "s"},
        "fc": {"unit": "Hz"}
    }
};

function fc_calc(R, C) {
    var tau = R * C;
    var fc = 1 / (6.2832 * tau);
    return ([fc, tau]);
}

function R_calc(C, fc) {
    var tau = 1 / (6.2832 * fc);
    var R = tau / C;
    return ([R, tau]);
}

function C_calc(R, fc) {
    var tau = 1 / (6.2832 * fc);
    var C = tau / R;
    return ([C, tau]);
}

function R_from_tau_calc(C, tau) {
    var fc = 1 / (6.2832 * tau);
    var R = tau / C;
    return ([R, fc]);
}

function C_from_tau_calc(R, fc) {
    var fc = 1 / (6.2832 * tau);
    var C = tau / R;
    return ([C, fc]);
}
