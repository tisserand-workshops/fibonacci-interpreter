function curationeraser() {
    var original_text = document.getElementById("originaltext").value;

    var split_text = original_text.split(" ");
    var result_text = "";

    var fib_1 = 1;
    var fib_current = 2;

    var i = 0;

    while (i < split_text.length) {
        if (i == fib_current) {
            var temp = fib_current + fib_1;
            fib_1 = fib_current;
            fib_current = temp;

        } else {
            if (result_text == "") {
                result_text = split_text[i];
            } else {
                result_text = result_text + " " + split_text[i];
            }
        }
        i += 1;
    }

    document.getElementById("curatedtext").value = result_text;
}

function reworkthis() {

    document.getElementById("originaltext").value = document.getElementById("curatedtext").value;
    document.getElementById("curatedtext").value = "";

}

function scoring() {
  var input = document.getElementById("curatedtext").value;
  var score_e = (input.split("e").length - 1) * 100;
  var score_y = (input.split("y").length - 1) * 250;
  var score_s = (input.split("s").length - 1) * 150;

  document.getElementById("score").innerHTML = score_e + score_y + score_s;
}

var scoreID = window.setInterval(scoring, 1);

