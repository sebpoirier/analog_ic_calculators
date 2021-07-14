var info = {
    "inout": {
        "R": {"unit": "Ohm"},
        "L": {"unit": "H"},
        "C": {"unit": "C"},
        "fc": {"unit": "Hz"},
        "Q": {"unit": ""},
        "Tau": {"unit": "s"},
        "damp_factor": {"unit": ""}
    }
};

function fc_calc(R, L, C) {
    var fc = 1 / (6.2832 * Math.sqrt(L * C));
    var Q = 1 / R * Math.sqrt(L / C);
    var Tau = 2 * L / R;
    var damp_factor = R/2 * Math.sqrt(C / L);
    return ([fc, Q, Tau, damp_factor]);
}
