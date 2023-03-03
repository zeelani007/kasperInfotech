"use strict";

var attendance = angular.module("attendanceModel", []);
attendance.controller("attendanceTaker", function ($scope) {
  var students = [{
    name: "afroz",
    reg: "1234567890",
    roll: "1",
    attendance: "p"
  }];
  $scope.students = students;
  $scope.id = "0";
  var attendance = "p";
  var total = students.length;
  var p = total;
  var a = 0;

  $scope.getId = function (reg, index) {
    id = reg;
    attendance = students[index].attendance;
    var ele = angular.element(document.getElementById(reg));

    if (attendance == "a") {
      ele.addClass("absentMarked");
      console.log(absent);
    } else {
      ele.removeClass("absentMarked");
    }
  };

  $scope.getClass = function (reg) {
    if (attendance = "a") return id == reg ? "absent" : "false";else return id == reg ? "present" : "false";
  };
});
//# sourceMappingURL=script.dev.js.map
