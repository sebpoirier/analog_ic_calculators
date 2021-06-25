var info = {
    "inout": {
        "L": {"unit": "H"},
        "M": {"unit": "H"},
        "l": {"unit": "m"},
        "w": {"unit": "m"},
        "t": {"unit": "m"},
        "d": {"unit": "m"}
    }
};

function ind_calc(l, w, t, d) {
    var L = 2.1e-7 * l * (Math.log(2*l/(w+t)) + 0.5 + 0.2235 * (w+t)/l);
    var M = 2e-7 * l * (Math.log(2*l/(w+d)) - 1 + 0.2235 * (w+d)/l);
    return ([L, M]);
}
