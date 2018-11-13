
$(document).ready(function()
{
  var ans = new Array(0,0,0) ;
  ans[0] = 0;
  ans[1] = 0;
  ans[2] = 0;
$("#answercontainer").hide();

  var qIterator = -1;
  var laugh = new Audio('audio/SkKid.wav');





  $("#reject").click(function(){
    $("#intro").hide();
    $("#sidebar").hide();
    laugh.play();
  });
  $("#accept").click(function(){
    $("#intro").hide();
    $("#answercontainer").show();
    $("#qcontent").load("./questions.html .q1");
  });

  $("#answr1").click(function(){
    ans[1]++;
    qIterator++;
    switch (qIterator) {
      case 0:
      $("#qcontent").load("./questions.html .q2");
      console.log(qIterator);
      break;
      case 1:
      $("#qcontent").load("./questions.html .q3");
      console.log(qIterator);
      break;
      case 2:
      $("#qcontent").load("./questions.html .q4");
      console.log(qIterator);
      break;
      case 3:
      $("#qcontent").load("./questions.html .q5");
      console.log("zoop");
      break;
      case 4:
      $("#qcontent").load("./Results.html #rResult");
      console.log("zoop");
      $("#answercontainer").hide();
          abomination();
      break;
    }
  });
  $("#answr2").click(function(){
    ans[2]++;
    qIterator++;
    switch (qIterator) {
      case 0:
      $("#qcontent").load("./questions.html .q2");
      console.log(qIterator);
      break;
      case 1:
      $("#qcontent").load("./questions.html .q3");
      console.log(qIterator);
      break;
      case 2:
      $("#qcontent").load("./questions.html .q4");
      console.log(qIterator);
      break;
      case 3:
      $("#qcontent").load("./questions.html .q5");
      console.log("zoop");
      break;
      case 4:
      $("#qcontent").load("./Results.html #result1");
      console.log("zoop");
      $("#answercontainer").hide();
      abomination();
      break;
    }

  });
  $("#answr3").click(function(){
    ans[2]++;
    qIterator++;
    switch (qIterator) {
      case 0:
      $("#qcontent").load("./questions.html .q2");
      console.log(qIterator);
      break;
      case 1:
      $("#qcontent").load("./questions.html .q3");
      console.log(qIterator);
      break;
      case 2:
      $("#qcontent").load("./questions.html .q4");
      console.log(qIterator);
      break;
      case 3:
      $("#qcontent").load("./questions.html .q5");
      console.log("zoop");
      break;
      case 4:
      $("#qcontent").load("./Results.html #result1");
      console.log("zoop");
          abomination();
      $("#answercontainer").hide();
      break;
    }

  });

});
function wow()
{
    $("#qcontent").load("./Results.html #rresult");

}
function thanksihateit()
{
    $("#qcontent").load("./Results.html #wresult");
}

function abomination()
{

AbomArray = new Array(8);
var AbomArray = ["images/Petz4thing.png", "images/petz4thing2.png", "images/petz4thing3.png", "images/petz4thing4.png", "images/petz4thing5.png", "images/petz4thing6.png", "images/Petz4thing7.png", "images/Petz4thing8.png"]

var num = Math.floor(Math.random() * Math.floor(8));
console.log(num);
    console.log($('.abomination').attr("src"));
    $('.abomination').src = "./images/Petz4thing.png";
    console.log(document.getElementById("abomination"));
    console.log(AbomArray[num]);
    console.log($(".abomination"));
 console.log($(".abomination").src);
}
