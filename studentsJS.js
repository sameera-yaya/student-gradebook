function getList() {
    var input = document.getElementById("InputName");
    var AllUpperCase = input.value.toUpperCase();
    var list = document.getElementById("ListofNames");
    var names = list.getElementsByTagName("li");
    for (var i = 0; i < names.length; i++) {
        var a = names[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(AllUpperCase) > -1) {
            names[i].style.display = "";
        } else {
            names[i].style.display = "none";
        }
    }
}

function getAmy() {
            document.getElementById("studentName").innerHTML = "Amy Gonzalez";
            document.getElementById("c1").innerHTML = "Mathematical Models";
            document.getElementById("g1").innerHTML = "A";
            document.getElementById("c2").innerHTML = "Anthropology";
            document.getElementById("g2").innerHTML = "A";
            document.getElementById("c3").innerHTML = "Biology";
            document.getElementById("g3").innerHTML = "A";
            document.getElementById("c4").innerHTML = "Computation Theory";
            document.getElementById("g4").innerHTML = "A";
          }
          function getBrett() {
            document.getElementById("studentName").innerHTML = "Ben Gonzalez";
            document.getElementById("c1").innerHTML = "Computer Science 121";
            document.getElementById("g1").innerHTML = "F";
            document.getElementById("c2").innerHTML = "Physics";
            document.getElementById("g2").innerHTML = "C";
            document.getElementById("c3").innerHTML = "Home Economics";
            document.getElementById("g3").innerHTML = "B";
            document.getElementById("c4").innerHTML = "African American Studies";
            document.getElementById("g4").innerHTML = "B";
          }
          function getBilly() {
            document.getElementById("studentName").innerHTML = "Billy Jean";
            document.getElementById("c1").innerHTML = "Biology";
            document.getElementById("g1").innerHTML = "B";
            document.getElementById("c2").innerHTML = "Biology Lab";
            document.getElementById("g2").innerHTML = "B";
            document.getElementById("c3").innerHTML = "Anthropology";
            document.getElementById("g3").innerHTML = "B";
            document.getElementById("c4").innerHTML = "Home Economics";
            document.getElementById("g4").innerHTML = "B";
          }
          function getBob() {
            document.getElementById("studentName").innerHTML = "Bob Smith";
            document.getElementById("c1").innerHTML = "Geology";
            document.getElementById("g1").innerHTML = "A";
            document.getElementById("c2").innerHTML = "Geology Lab";
            document.getElementById("g2").innerHTML = "A";
            document.getElementById("c3").innerHTML = "Psychology";
            document.getElementById("g3").innerHTML = "C";
            document.getElementById("c4").innerHTML = "Software Engineering";
            document.getElementById("g4").innerHTML = "D";
          }
          function getGio() {
            document.getElementById("studentName").innerHTML = "Gio Gonzalez";
            document.getElementById("c1").innerHTML = "Chemistry";
            document.getElementById("g1").innerHTML = "B";
            document.getElementById("c2").innerHTML = "Chemistry Lab";
            document.getElementById("g2").innerHTML = "A";
            document.getElementById("c3").innerHTML = "Numerical Analysis";
            document.getElementById("g3").innerHTML = "F";
            document.getElementById("c4").innerHTML = "English";
            document.getElementById("g4").innerHTML = "C";
          }
          function getChristian() {
            document.getElementById("studentName").innerHTML = "Christian Barrera";
            document.getElementById("c1").innerHTML = "Statistics";
            document.getElementById("g1").innerHTML = "F";
            document.getElementById("c2").innerHTML = "MATLAB";
            document.getElementById("g2").innerHTML = "C";
            document.getElementById("c3").innerHTML = "French Conversation";
            document.getElementById("g3").innerHTML = "B";
            document.getElementById("c4").innerHTML = "Software Architecture";
            document.getElementById("g4").innerHTML = "C";
          }
          function getCathy() {
            document.getElementById("studentName").innerHTML = "Cathy Lu";
            document.getElementById("c1").innerHTML = "Databases";
            document.getElementById("g1").innerHTML = "B";
            document.getElementById("c2").innerHTML = "Data Structures";
            document.getElementById("g2").innerHTML = "D";
            document.getElementById("c3").innerHTML = "Public Speaking";
            document.getElementById("g3").innerHTML = "A";
            document.getElementById("c4").innerHTML = "Death and Dying";
            document.getElementById("g4").innerHTML = "A";
          }
