var info = {
    "inout": {
        "Lmin": {"unit": "m"},
        "I0_nmos": {"unit": "A"},
        "I0_pmos": {"unit": "A"}
    }
};

function ekv_i0_calc(Lmin) {
    var I0_nmos = 250e-9 * Lmin / 350e-9;
    var I0_pmos = 100e-9 * Lmin / 350e-9;
    return ([I0_pmos, I0_nmos]);
}
