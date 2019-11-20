var info = {
    "inout": {
        "gm": {"unit": "S"},
        "I": {"unit": "A"},
        "V_ov": {"unit": "V"},
        "Beta": {"unit": "A/(V*V)"}
    }
};

function gm_calc(I, V_ov) {
    var gm = 2 * I / V_ov;
    var Beta = gm / V_ov;
    return ([gm, Beta]);
}
