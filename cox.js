var info = {
    "inout": {
        "C_ox": {"unit": "F/um2"},
        "t_ox": {"unit": "m"},
        "C": {"unit": "F"},
        "w": {"unit": "m"},
        "l": {"unit": "m"},
        "area": {"unit": "um2"}
    }
};

function C_ox_calc(t_ox) {
    var eps_ox = 34.5e-12;
    var C_ox = eps_ox / t_ox;
    C_ox *= 1e-12;
    return ([C_ox]);
}

function C_calc(t_ox, w, l) {
    var eps_ox = 34.5e-12;
    var C_ox = eps_ox / t_ox;
    var C = C_ox * w * l;
    var area = w * l;
    area /= 1e-12;
    return ([C, area]);
}
