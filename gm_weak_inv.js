var info = {
    "inout": {
        "gm": {"unit": "S"},
        "T": {"unit": "deg. C"},
        "I": {"unit": "A"},
        "n": {"unit": ""}
    }
};

function gm_calc(I, n, T) {
    var T_K = (273.15 + T);
    var V_t = 8.62e-5 * T_K;
    var gm = I / (n * V_t);
    return ([gm]);
}
