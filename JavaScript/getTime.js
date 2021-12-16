function calculate() {
    const now = new Date();
    var hours = parseInt(now.getUTCHours()-6, 10);
    var response = ""
    if (hours > 13 && hours < 16) {
        response = "is probably pooping!!!"
    }
    else if (hours === 13) {
        response = "might poop here pretty soon..."
    }
    else {
        response = "isn't gonna poop for a little while :/"
    }

    document.getElementById("isHePooping").innerHTML = "Elon " + response;
}
calculate();