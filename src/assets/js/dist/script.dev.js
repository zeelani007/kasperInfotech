"use strict";

var table = document.getElementById("table"),
    sumVal = 0;

for (var i = 1; i < table.rows.length; i++) {
  sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
}

document.getElementById("val").innerHTML = "Sum Value = " + sumVal;
console.log(sumVal);
//# sourceMappingURL=script.dev.js.map
