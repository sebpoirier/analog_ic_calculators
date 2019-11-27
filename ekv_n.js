var info = {
    "inout": {
        "gm": {"unit": "S"},
        "gmb": {"unit": "S"},
        "n": {"unit": ""}
    }
};

function ekv_n_calc(gm, gmb) {
    var n = 1 + gmb / gm;
    return ([n]);
}
