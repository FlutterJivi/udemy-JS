function dikhao(kuchBhi) {
    console.log(kuchBhi);
}

function Hello() {
    console.log("Hello bhai");
    return "jogn"
}

dikhao(Hello())


console.log();

function chalao(koiFunction) {
    console.log("Chalane se pahle");
    koiFunction()
    console.log("chalane ke baad");
    
}

function mera() {
    console.log("★ MERA function chal raha hai ★");
}

chalao(mera)