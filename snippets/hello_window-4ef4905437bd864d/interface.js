export function check_function() {
    //console.log("f");
    return window.my_string;
}

export function check_coloring() {
    //console.log("k");
    return window.coloring_exponent;
}

export function check_iterations() {
    //console.log("c");
    return window.iterations;
}

export function reset_function() {
    window.my_string = null;
    window.coloring_exponent = null;
    window.iterations = null;
}
//r= a(1 - e cos(E))