var info = {
    "inout": {
        "gm_dp": {"unit": "S"},
        "gm_2": {"unit": "S"},
        "C_c": {"unit": "F"},
        "C_l": {"unit": "F"},
        "gain": {"unit": ""},
        "BW": {"unit": "Hz"},
        "f_p2": {"unit": "Hz"},
        "PM": {"unit": "deg"}
    }
};

function gain_calc(gm_dp, gm_2, C_c, C_l) {
    var BW = gm_dp / (2 * Math.PI * C_c);
    var f_p2 = gm_2 / (2 * Math.PI * C_l);
    var PM = Math.atan(f_p2 / BW) / Math.PI * 180;
    return ([BW, f_p2, PM]);
}
