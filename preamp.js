var info = {
    "inout": {
        "gm": {"unit": "S"},
        "gain": {"unit": ""},
        "R": {"unit": "Ohm"},
        "BW": {"unit": "Hz"},
        "C": {"unit": "F"},
        "I": {"unit": "A"},
        "T": {"unit": "deg. C"},
        "n": {"unit": ""},
        "V_cm": {"unit": "V"}
    },
    "gain_calc": {
        "display_list": "I R  n T gm gain V_cm C BW"
    }
};

function gain_calc(I, R, C, n = 1.3, T = 27) {
    var T_K = (273.15 + T);
    var V_t = 8.62e-5 * T_K;
    var gm = I / (n * V_t);
    var gain = gm * R;
    var BW = gm / (6.2832 * C);
    var V_cm = R * I / 2;
    return ([gm, gain, V_cm, BW]);
}
