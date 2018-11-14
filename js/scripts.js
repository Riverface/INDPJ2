
$(document).ready(function()
{
  var AbomArray;
  var ans = new Array(0,0,0) ;
  ans[0] = 0;
  ans[1] = 0;
  ans[2] = 0;
$("#answercontainer").hide();

  var qIterator = -1;
  var laugh = new Audio('audio/SkKid.wav');

  $("#result1").hide();
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
      $("#qcontent").load("./Results.html #result1");
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
      $("#result1").show();
    $(".abomination").show();
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
      $("#result1").show();
    $(".abomination").show();

      console.log("zoop");

      $("#answercontainer").hide();
      break;
    }

  });

});

function wow()
{
  $("#qcontent").show();
    $("#result1").hide();
    $("#qcontent").load("./Results.html #rresult");


}
function thanksihateit()
{
    $("#qcontent").show();
        $("#result1").hide();
    $("#qcontent").load("./Results.html #wresult");

}

function abomination()
{




$("#qcontent").hide();
    AbomArray = new Array(8);
    AbomArray[0] = new Image();
    AbomArray[0].src = "images/Petz4thing.png";

    AbomArray[1] = new Image();
    AbomArray[1].src = "images/petz4thing2.png";

    AbomArray[2] = new Image();
    AbomArray[2].src = "images/petz4thing3.png";

    AbomArray[3] = new Image();
    AbomArray[3].src = "images/petz4thing4.png";

    AbomArray[4] = new Image();
    AbomArray[4].src = "images/petz4thing5.png";

    AbomArray[5] = new Image();
    AbomArray[5].src = "images/petz4thing6.png";

    AbomArray[6] = new Image();
    AbomArray[6].src = "images/Petz4thing7.png";
    AbomArray[7] = new Image();
    AbomArray[7].src = "images/Petz4thing8.png";

    var num = Math.floor(Math.random() * Math.floor(8));
    console.log(num);

    console.log($('Results.html .abomination').attr("src"));
    var abomimg;
    abomimg = AbomArray[num].src;
$('[name="canvas"]').attr("src", AbomArray[num].src);

}
