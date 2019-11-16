var info = {
    "inout": {
        "ref": {"unit": ""},
        "n_bit": {"unit": ""},
        "LSB": {"unit": ""}
    },
    "title": "ADC resolution"
};

function lsb_calc(ref, n_bit) {
    var LSB = ref / 2**n_bit;
    return ([LSB]);
}

function ref_calc(LSB, n_bit) {
    var ref = LSB * 2**n_bit;
    return ([ref]);
}

function n_bit_calc(ref, LSB) {
    var n_bit = Math.log2(ref / LSB);
    return ([n_bit]);
}
