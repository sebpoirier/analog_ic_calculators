var info = {
    "inout": {
        "R": {"unit": "Ohm"},
        "C": {"unit": "F"},
        "tau": {"unit": "s"},
        "fc": {"unit": "Hz"},
        "omega": {"unit": "rad/s"}
    }
};

function fc_calc(R, C) {
    var tau = R * C;
    var omega = 1 / tau;
    var fc = omega / 6.2832;
    return ([fc, tau, omega]);
}

function R_calc(C, fc) {
    var omega = 6.2832 * fc;
    var tau = 1 / omega 
    var R = tau / C;
    return ([R, tau, omega]);
}

function C_calc(R, fc) {
    var omega = 6.2832 * fc;
    var tau = 1 / omega 
    var C = tau / R;
    return ([C, tau, omega]);
}
