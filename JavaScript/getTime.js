function calculate() {
    const now = new Date();
    var hours = now.getUTCHours()
    //hours = parseInt(hours)
    var response = ""
    if (parseInt(hours) - 6 >= 14 && parseInt(hours) - 6 <= 16) {
        response = "is probably pooping!!!"
    }
    else if (parseInt(hours) >= 13 && parseInt(hours) < 14) {
        response = "might poop here pretty soon..."
    }
    else {
        response = "isn't gonna poop for a little while :/"
    }

    document.getElementById("isHePooping").innerHTML = "Elon " + response;
}