var info = {
    "inout": {
        "I_D": {"unit": "A"},
        "I_S": {"unit": "A"},
        "I_Su": {"unit": "A"},
        "gm": {"unit": "S"},
        "T": {"unit": "deg. C"},
        "n": {"unit": ""},
        "IF": {"unit": ""},
        "W": {"unit": "m"},
        "L": {"unit": "m"}
    },
    "ekv_if_calc": {
        "display_list": "I_D gm n T IF I_S W L I_Su"
    }
};

function ekv_if_calc(I_D, gm, W, L, n = 1.3, T = 27) {
    var T_K = (273.15 + T);
    var V_t = 8.62e-5 * T_K;
    var IF = (I_D / (gm * n * V_t) - 0.5)**2 - 0.25;
    var I_S = I_D / IF;
    var I_Su = I_S * L / W;
    return ([IF, I_S, I_Su]);
}
