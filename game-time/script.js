function shutthefuckup(num, e) {
    var answer = e.value;
    if (num == 1 && answer == "cpu") {
        remove(num);
    }
    if (num == 2 && answer == "bean bag") {
        remove(num);
    }
    if (num == 3 && answer == "our studio") {
        remove(num);
    }
    if (num == 4 && answer == "main studio") {
        remove(num);
    }
    if (num == 5 && answer == "sony box") {
        remove(num);
    }
    if (num == 6 && answer == "upper studio") {
        remove(num);
    }
    if (num == 7 && answer == "kitchen lite") {
        remove(num);
    }
    if (num == 8 && answer == "kitchen pro") {
        remove(num);
    }
    if (num == 9 && answer == "mera adda") {
        remove(num);
    }
    if (num == 10 && answer == "fridge") {
        remove(num);
    }
    if (num == 11 && answer == "terrace") {
        window.location.replace("./theend.html");
    }

}

function remove(num) {
    var str1 = "clue-" + num;
    var str2 = "clue-" + (num + 1);
    var element1 = document.getElementById(str1);
    var element2 = document.getElementById(str2);
    element1.style.display = "none";
    element2.style.display = "block";
}