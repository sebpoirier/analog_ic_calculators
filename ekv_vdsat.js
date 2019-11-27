var info = {
    "inout": {
        "Vdsat": {"unit": "V"},
        "T": {"unit": "deg. C"},
        "IF": {"unit": ""}
    }
};

function ekv_vdsat_calc(IF, T=27) {
    var T_K = (273.15 + T);
    var V_t = 8.62e-5 * T_K;
    var Vdsat = V_t * (2 * Math.sqrt(IF) + 4);
    return ([Vdsat]);
}
