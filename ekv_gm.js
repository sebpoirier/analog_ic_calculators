var info = {
    "inout": {
        "gm": {"unit": "S"},
        "I_D": {"unit": "A"},
        "IF": {"unit": ""},
        "T": {"unit": "deg. C"},
        "n": {"unit": ""}
    }
};

function ekv_gm_calc(I_D, IF, n = 1.3, T = 27) {
    var T_K = (273.15 + T);
    var V_t = 8.62e-5 * T_K;
    var gm = I_D / (n * V_t) / (0.5 + Math.sqrt(IF + 0.25));
    return ([gm]);
}
