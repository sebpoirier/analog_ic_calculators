var info = {
    "inout": {
        "gm": {"unit": "S"},
        "I": {"unit": "A"},
        "T": {"unit": "deg. C"},
        "n": {"unit": ""}
    }
};

function gm_calc(I, n = 1.3, T = 27) {
    var T_K = (273.15 + T);
    var V_t = 8.62e-5 * T_K;
    var gm = I / (n * V_t);
    return ([gm]);
}
