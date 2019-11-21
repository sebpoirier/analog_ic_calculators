var info = {
    "inout": {
        "T": {"unit": "s"},
        "f": {"unit": "Hz"},
        "omega": {"unit": "rad/s"}
    }
};

function T_calc(T) {
    var f = 1 / T;
    var omega = 6.2832 * f;
    return ([f, omega]);
}

function f_calc(f) {
    var T = 1 / f;
    var omega = 6.2832 * f;
    return ([T, omega]);
}

function omega_calc(omega) {
    var f = 6.2832 * omega;
    var T = 1 / f;
    return ([T, f]);
}
