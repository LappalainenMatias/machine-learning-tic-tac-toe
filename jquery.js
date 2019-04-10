var list=[0,0,0,0,0,0,0,0,0]
var winnerFound = false;
var X_won = true;
var x_wins =0;
var o_wins = 0;
var draws =0;

//Neural network
var oneWeigths = [
[0.1,0.21,0.71,0.11,0.21,0.41,0.71,0.91,0.11],
[0.71,0.51,0.61,0.31,0.21,0.61,0.11,0.71,0.61],
[0.8,0.21,0.71,0.11,0.21,0.41,0.71,0.91,0.11],
[0.71,0.51,0.61,0.31,0.11,0.61,0.11,0.71,0.61],
[0.66,0.11,0.71,0.11,0.21,0.41,0.71,0.91,0.11],
[0.78,0.51,0.61,0.41,0.21,0.61,0.11,0.71,0.61],
[0.64,0.21,0.71,0.11,0.21,0.41,0.11,0.91,0.11],
[0.75,0.51,0.61,0.37,0.21,0.61,0.11,0.71,0.61],
[0.32,0.21,0.41,0.11,0.21,0.41,0.71,0.91,0.11]];
var bias=[0.56,0.43,0.64,0.12,0.54,0.21,0.12,0.1,0.8];
var _oneWeigths = [
[0.22,0.21,0.71,0.11,0.21,0.41,0.71,0.941,0.11],
[0.71,0.91,0.61,0.31,0.21,0.61,0.411,0.71,0.61],
[0.8,0.21,0.81,0.11,0.21,0.41,0.71,0.491,0.11],
[0.71,0.51,0.61,0.71,0.11,0.461,0.11,0.71,0.61],
[0.63,0.11,0.71,0.141,0.61,0.41,0.71,0.91,0.11],
[0.78,0.451,0.61,0.41,0.241,0.51,0.11,0.71,0.61],
[0.44,0.21,0.71,0.11,0.21,0.41,0.41,0.91,0.11],
[0.75,0.514,0.61,0.37,0.21,0.61,0.11,0.71,0.21],
[0.32,0.21,0.441,0.11,0.21,0.41,0.71,0.91,0.11]];

function setX(id,number){
  if(winnerFound==false&&list[number-1]==0){
  number = number-1;
  if (id == "box-1" && list[number]==0){
    list[number]=2;
    setMark("box-1","X");
  }
  if (id == "box-2" && list[number]==0){
    list[number]=2;
    setMark("box-2","X");
  }
  if (id == "box-3" && list[number]==0){
    list[number]=2;
    setMark("box-3","X");
  }
  if (id == "box-4" && list[number]==0){
    list[number]=2;
    setMark("box-4","X");
  }
  if (id == "box-5" && list[number]==0){
    list[number]=2;
    setMark("box-5","X");
  }
  if (id == "box-6" && list[number]==0){
    list[number]=2;
    setMark("box-6","X");
  }
  if (id == "box-7" && list[number]==0){
    list[number]=2;
    setMark("box-7","X");
  }
  if (id == "box-8" && list[number]==0){
    list[number]=2;
    setMark("box-8","X");
  }
  if (id == "box-9" && list[number]==0){
    list[number]=2;
    setMark("box-9","X");
  }
  calculateMove();
}
}

function setMark(id,mark){
  if(winnerFound==false){
      var element = document.getElementById(id);
  element.innerHTML=mark;
  findWinner(mark);
}
}

function findWinner(mark){
  var text1 = document.getElementById("box-1").innerHTML;
  var text2 = document.getElementById("box-2").innerHTML;
  var text3 = document.getElementById("box-3").innerHTML;
  var text4 = document.getElementById("box-4").innerHTML;
  var text5 = document.getElementById("box-5").innerHTML;
  var text6 = document.getElementById("box-6").innerHTML;
  var text7 = document.getElementById("box-7").innerHTML;
  var text8 = document.getElementById("box-8").innerHTML;
  var text9 = document.getElementById("box-9").innerHTML;
  if(text1==mark&&text2==mark&&text3==mark){
    document.getElementById("box-1").style.background="#ffaaff";
    document.getElementById("box-2").style.background="#ffaaff";
    document.getElementById("box-3").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text4==mark&&text5==mark&&text6==mark){
    document.getElementById("box-4").style.background="#ffaaff";
    document.getElementById("box-5").style.background="#ffaaff";
    document.getElementById("box-6").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text7==mark&&text8==mark&&text9==mark){
    document.getElementById("box-7").style.background="#ffaaff";
    document.getElementById("box-8").style.background="#ffaaff";
    document.getElementById("box-9").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text1==mark&&text4==mark&&text7==mark){
    document.getElementById("box-1").style.background="#ffaaff";
    document.getElementById("box-4").style.background="#ffaaff";
    document.getElementById("box-7").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text2==mark&&text5==mark&&text8==mark){
    document.getElementById("box-2").style.background="#ffaaff";
    document.getElementById("box-5").style.background="#ffaaff";
    document.getElementById("box-8").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text3==mark&&text6==mark&&text9==mark){
    document.getElementById("box-3").style.background="#ffaaff";
    document.getElementById("box-6").style.background="#ffaaff";
    document.getElementById("box-9").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text1==mark&&text5==mark&&text9==mark){
    document.getElementById("box-1").style.background="#ffaaff";
    document.getElementById("box-5").style.background="#ffaaff";
    document.getElementById("box-9").style.background="#ffaaff";
    winnerFound=true;
  }
  if(text3==mark&&text5==mark&&text7==mark){
    document.getElementById("box-3").style.background="#ffaaff";
    document.getElementById("box-5").style.background="#ffaaff";
    document.getElementById("box-7").style.background="#ffaaff";
    winnerFound=true;
  }
  if(winnerFound&&mark=="X"){
    x_wins=x_wins+1;
}
  else if(winnerFound&&mark=="O"){
    o_wins=o_wins+1;
}
  else if(list[0]!=0&&list[1]!=0&&list[2]!=0&&list[3]!=0&&
    list[4]!=0&&list[5]!=0&&list[6]!=0&&list[7]!=0&&list[8]!=0)
  {
    draws=draws+1;
  }
}

function reset(){
  winnerFound = false;
  list=[0,0,0,0,0,0,0,0,0];
  for (i = 1; i < 10; i++) {
      var element = document.getElementById("box-"+i);
      element.innerHTML="";
      element.style.background="#ffffff";
  }
}

function calculate(number){
  var values1=[0,0,0,0,0,0,0,0,0];
  var values2=[0,0,0,0,0,0,0,0,0];
  if(list[number]!=0){return -1000;}
    for (var i = 0; i < 9; i++) {
      for (var b = 0; b < 9; b++) {
        values1[i] = values1[i]+oneWeigths[b][i]*list[b];
      }
      values1[i] = 1/(1+Math.exp(-1*(values1[i]-bias[i])));
  }
      for (var b = 0; b < 9; b++) {
        values2[b] = 1/(1+Math.exp(-1*(_oneWeigths[b][number]*values1[b])));
      }
  return values2.reduce(add)/9;
}

function calculateMove(){
  var b1 = calculate(0);
  var b2 = calculate(1);
  var b3 = calculate(2);
  var b4 = calculate(3);
  var b5 = calculate(4);
  var b6 = calculate(5);
  var b7 = calculate(6);
  var b8 = calculate(7);
  var b9 = calculate(8);
  if(b1>=b2&&b1>=b3&&b1>=b4&&b1>=b5&&b1>=b6&&b1>=b7&&b1>=b8&&b1>=b9&&list[0]==0){
    setMark("box-1","O");
    list[0]=1;
  }
  else if(b2>=b1&&b2>=b3&&b2>=b4&&b2>=b5&&b2>=b6&&b2>=b7&&b2>=b8&&b2>=b9&&list[1]==0){
    setMark("box-2","O");
    list[1]=1;
  }
  else if(b3>=b2&&b3>=b1&&b3>=b4&&b3>=b5&&b3>=b6&&b3>=b7&&b3>=b8&&b3>=b9&&list[2]==0){
    setMark("box-3","O");
    list[2]=1;
  }
  else if(b4>=b2&&b4>=b3&&b4>=b1&&b4>=b5&&b4>=b6&&b4>=b7&&b4>=b8&&b4>=b9&&list[3]==0){
    setMark("box-4","O");
    list[3]=1;
  }
  else if(b5>=b2&&b5>=b3&&b5>=b4&&b5>=b1&&b5>=b6&&b5>=b7&&b5>=b8&&b5>=b9&&list[4]==0){
    setMark("box-5","O");
    list[4]=1;
  }
  else if(b6>=b2&&b6>=b3&&b6>=b4&&b6>=b5&&b6>=b1&&b6>=b7&&b6>=b8&&b6>=b9&&list[5]==0){
    setMark("box-6","O");
    list[5]=1;
  }
  else if(b7>=b2&&b7>=b3&&b7>=b4&&b7>=b5&&b7>=b6&&b7>=b1&&b7>=b8&&b7>=b9&&list[6]==0){
    setMark("box-7","O");
    list[6]=1;
  }
  else if(b8>=b2&&b8>=b3&&b8>=b4&&b8>=b5&&b8>=b6&&b8>=b7&&b8>=b1&&b8>=b9&&list[7]==0){
    setMark("box-8","O");
    list[7]=1;
  }
  else if(b9>=b2&&b9>=b3&&b9>=b4&&b9>=b5&&b9>=b6&&b9>=b7&&b9>=b8&&b9>=b1&&list[8]==0){
    setMark("box-9","O");
    list[8]=1;
  }
}


function add(accumulator, a) {
    return accumulator + a;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function new_generation(){
  var changes_amount=getRandomInt(0,20);
  for(var i=0;i<changes_amount;i++){
  var random_int_one = getRandomInt(0,8);
  var random_int_two = getRandomInt(0,8);
  var random_int_three = getRandomInt(0,8)/10+0.1;
  oneWeigths[random_int_one][random_int_two]=random_int_three;
}
for(var i=0;i<changes_amount;i++){
  var random_int_one = getRandomInt(0,8);
  var random_int_two = getRandomInt(0,8);
  var random_int_three = getRandomInt(0,8)/10+0.1;
  oneWeigths[random_int_one][random_int_two]=random_int_three;
}
  for(var i=0;i<changes_amount;i++){
  var random_int_one = getRandomInt(0,8);
  var random_int_two = getRandomInt(0,8);
  var random_int_three = getRandomInt(0,8)/10+0.1;
  _oneWeigths[random_int_one][random_int_two]=random_int_three;
}
for(var i=0;i<changes_amount;i++){
  var random_int_one = getRandomInt(0,8);
  var random_int_two = getRandomInt(0,8);
  var random_int_three = getRandomInt(0,8)/10+0.1;
  _oneWeigths[random_int_one][random_int_two]=random_int_three;
}
for(var i=0;i<1;i++){
  var random_int_one = getRandomInt(0,8);
  var random_int_three = getRandomInt(-10,10)/100;
  bias[random_int_two]=bias[random_int_two]+random_int_three;
}
}

function random(){
        var highscore=0;
  for(var c = 0;c<5000;c++){
      draws=0;
      x_wins=0;
      o_wins=0;
      old_draws=0;
  var test_oneWeigths=JSON.parse(JSON.stringify(oneWeigths));
  var test__oneWeigths=JSON.parse(JSON.stringify(_oneWeigths));
  var test_bias = JSON.parse(JSON.stringify(bias));
  var amount_of_games = 100;
  for(var b = 0;b<amount_of_games;b++){
  reset();
  var nbr=0;
  for(var i = 0;i <5;i++){
    while(true){
      nbr =getRandomInt(0,8);
      if(list[nbr]==0){
        break;
      }
    }
    list[nbr]=2;
    setMark("box-"+(nbr+1),"X");
    calculateMove();
  }
}
  new_generation();
  draws=0;
  x_wins=0;
  o_wins=0;
  for(var b = 0;b<amount_of_games;b++){
  reset();
  var nbr=0;
  for(var i = 0;i <5;i++){
    while(true){
      nbr =getRandomInt(0,8);
      if(list[nbr]==0){
        break;
      }
    }
    list[nbr]=2;
    setMark("box-"+(nbr+1),"X");
    calculateMove();
  }
}
  if(highscore>o_wins+draws*0.5){
    oneWeigths=JSON.parse(JSON.stringify(test_oneWeigths));
    _oneWeigths=JSON.parse(JSON.stringify(test__oneWeigths));
    bias=JSON.parse(JSON.stringify(test_bias));
  }
  else{
    highscore=o_wins+draws*0.5;
        console.log(o_wins,draws,x_wins)
        console.log(c);
      }

}
  console.log(oneWeigths,_oneWeigths,bias);
}