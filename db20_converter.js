var info = {
    "inout": {
        "A": {"unit": ""},
        "A_dB": {"unit": "dB"}
    }
};

function A_dB_calc(A) {
    var A_dB = 20 * Math.log10(A);
    return ([A_dB]);
}

function A_calc(A_dB) {
    var A = 10**(A_dB / 20);
    return ([A]);
}
