function calculate() {
    const now = new Date();
    var hours = now.getUTCHours()
    //hours = parseInt(hours)
    var response = ""
    if (parseInt(hours) >= 2 && parseInt(hours) <= 4) {
        response = "is probably pooping!!!"
    }
    else if (parseInt(hours) >= 1 && parseInt(hours) < 2) {
        response = "might poop here pretty soon..."
    }
    else {
        response = "isn't gonna poop for a little while :/"
    }

    document.getElementById("isHePooping").innerHTML = "Elon " + response;
}