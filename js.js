setTimeout(function(){
var coord=[];

var canvas=document.createElement("canvas");
    canvas.id="c";
    document.body.appendChild(canvas);
    canvas.width=600;
    canvas.height=600;
//canvas.style.marginLeft="630px";
//canvas.style.marginTop="150px";
canvas.style.left=window.innerWidth/2-300+"px";
    canvas.style.top=window.innerHeight/2-300+"px";
c//anvas.style.marginTop="150px";
canvas.style.position='absolute';
canvas.style.zIndex=9;
//canvas.style.pointerEvents='none';
var ctx = canvas.getContext("2d");
var pointsX = [1,100,200,300,10,1];
var pointsY = [1,5,50,128,18,199];
ctx.strokeStyle = 'lightgreen';


    var score=document.getElementById('score');

var pran1x,pran1y,pranCx,pranCy,pranEx,pranEy;
var ran1x,ran1y,ranCx,ranCy,ranEx,ranEy;
console.log(pran1x);
var w=canvas.width;
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max-2))+1;}
  var scor=0;


function Begin(){
    DrawLine();
     ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(pran1x, pran1y, 7, 0, 2 * Math.PI, false);
  ctx.lineWidth = 3;
     ctx.strokeStyle = 'magenta';
    ctx.closePath();
     ctx.stroke();
  ctx.lineWidth = 1;


ctx.strokeStyle = 'lightgreen';
ctx.beginPath();
        ctx.lineWidth = 3;
    ctx.moveTo(pran1x, pran1y);
    ctx.quadraticCurveTo(pranCx,pranCy,pranEx,pranEy);
    ctx.stroke();
    ctx.closePath();
 ctx.strokeStyle = '#FF6800';
 ctx.beginPath();
        ctx.lineWidth = 1;
    ctx.moveTo(ran1x, ran1y);
    ctx.quadraticCurveTo(ranCx,ranCy,ranEx,ranEy);
    ctx.stroke();
    ctx.closePath();



}

Begin();


    function DrawLine() {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
      //  console.log("im here?");


var angl;
var aC,bC,cC;
    score.innerHTML = scor;
         scor++;
           ctx.strokeStyle = 'lightgreen';
    pran1x = ran1x || getRandomInt(w);
    pran1y = ran1y || getRandomInt(w);


        if (ranEx !=undefined && ranEy!=undefined){
        pranEx = ranEx
    pranEy = ranEy} else{
        pranEx = getRandomInt(w);
        pranEy = getRandomInt(w);
        goodDistance(pran1x,pranEx,pran1y,pranEy);
        pranEx = Dgood[0];
        pranEy = Dgood[1];
    }
if (ranEx !=undefined && ranEy!=undefined){
pranCx = ranCx;
pranCy = ranCy;
}
        else{
    pranCx = getRandomInt(w);
    pranCy = getRandomInt(w);
    goodAngle(pran1x,pran1y,pranCx,pranCy,pranEx,pranEy);
    pranCx = Agood[0];
    pranCy = Agood[1];


        }


    ctx.beginPath();
        ctx.lineWidth = 3;
    ctx.moveTo(pran1x, pran1y);
    ctx.quadraticCurveTo(pranCx,pranCy,pranEx,pranEy);
    ctx.stroke();
    ctx.closePath();

        ctx.strokeStyle = '#FF6800';
    ran1x = pranEx;
    ran1y = pranEy;


    ranEx = getRandomInt(w);
    ranEy = getRandomInt(w);
        goodDistance(ran1x,ranEx,ran1y,ranEy);
        ranEx = Dgood[0];
        ranEy = Dgood[1];


    ranCx = getRandomInt(w);
    ranCy = getRandomInt(w);
    goodAngle(ran1x,ran1y,ranCx,ranCy,ranEx,ranEy);
        ranCx = Agood[0];
    ranCy = Agood[1];
        /*
    angl=find_angle({x: ran1x, y: ran1y},{x: ranCx, y: ranCy},{x: ranEx, y: ranEy});
    while(angl<0.785398){
        console.log('here');
    ranCx = getRandomInt(w);
    ranCy = getRandomInt(w);
    angl=find_angle({x: ran1x, y: ran1y},{x: ranCx, y: ranCy},{x: ranEx, y: ranEy});
    }*/

       // Agood


    ctx.beginPath();
        ctx.lineWidth = 1;
    ctx.moveTo(ran1x, ran1y);
    ctx.quadraticCurveTo(ranCx,ranCy,ranEx,ranEy);
    ctx.stroke();
    ctx.closePath();


        coord.length=0;
  for (var i=0;i<501;i++){
        coord.push(getQuadraticXY(i/500,pran1x,pran1y,pranCx,pranCy,pranEx,pranEy));}

       // console.log(coord);
    }


    var Dgood=[];
function goodDistance(x1,x2,y1,y2){
    var aC = x1 - x2;
    var bC = y1 - y2;
    var cC = Math.sqrt( aC*aC + bC*bC );

    while(cC<70){
        console.log(cC);
    //console.log(cC);
    x2 = getRandomInt(w);
    y2 = getRandomInt(w);
    aC = x1 - x2;
    bC = y1 - y2;
    cC = Math.sqrt( aC*aC + bC*bC );
    }
    Dgood=[x2,y2];
}

    var Agood=[];
    function goodAngle(x1,y1,x2,y2,x3,y3){
 var angl=find_angle({x: x1, y: y1},{x: x2, y: y2},{x: x3, y: y3});
    while(angl<0.471239){
        console.log('here');
    x2 = getRandomInt(w);
    y2 = getRandomInt(w);
    angl=find_angle({x: x1, y: y1},{x: x2, y: y2},{x: x3, y: y3});
    }
    Agood=[x2,y2];
    }

function find_angle(A,B,C) {
    var AB = Math.sqrt(Math.pow(B.x-A.x,2)+ Math.pow(B.y-A.y,2));
    var BC = Math.sqrt(Math.pow(B.x-C.x,2)+ Math.pow(B.y-C.y,2));
    var AC = Math.sqrt(Math.pow(C.x-A.x,2)+ Math.pow(C.y-A.y,2));
    return Math.acos((BC*BC+AB*AB-AC*AC)/(2*BC*AB));
}



function getQuadraticXY(t, sx, sy, cp1x, cp1y, ex, ey) {
  return {
    x: (1-t) * (1-t) * sx + 2 * (1-t) * t * cp1x + t * t * ex,
    y: (1-t) * (1-t) * sy + 2 * (1-t) * t * cp1y + t * t * ey
  };
}


var rect = canvas.getBoundingClientRect();

var timer=document.getElementById('timer');
//timer.style.marginLeft="630px";
    timer.style.marginTop="-47px";
 //timer.style.left="35%";
timer.style.position='absolute';
timer.style.pointerEvents="none";
timer.style.zIndex=8;
    score.style.textAlign="left";
timer.innerHTML="follow the green line";
timer.style.color='green';
timer.style.fontSize='40px';
    //timer.style.display= "flex";

var container=document.getElementById('container');
//container.style.marginLeft="630px";
// container.style.left="35%";
    container.style.left=window.innerWidth/2-300+"px";
    container.style.top=window.innerHeight/2-347+"px";
container.style.width=rect.width+"px";
//container.style.marginTop="100px";
container.style.position='absolute';
container.style.pointerEvents="none";
container.style.zIndex=8;
//container.style.display= "flex";



//score.style.marginLeft="1140px";
//score.style.marginTop="100px";
//score.style.position='absolute';
score.style.pointerEvents="none";
score.style.zIndex=8;
score.style.textAlign="right";
score.innerHTML="score";
score.style.color='green';
score.style.fontSize='40px';

    var timerGO=null,TimeL=30,Errr=0;
  function Timer() {
timerGO = setInterval(function() {
TimeL = Math.round((TimeL-0.1)*100)/100;
timer.innerHTML=TimeL;
if (TimeL <= 0)
{clearInterval(timerGO);timer.innerHTML="time: 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Press a key to start";}


 //PressKey.innerHTML="Press a key to start";FreR();}
    //console.log(Errr,"Errr");
if (Errr == 1)
{clearInterval(timerGO);timer.innerHTML+=" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Press a key to start";TimeL=0;}
//console.log(FreRec);
//PressKey.innerHTML="Press a key to start";}
}, 100);
     }

//var Ex,Ey;
var cx,cy;
    var a,b,c;
     var a1,b1,c1;
    var ac,bc,cc;
    var star=0;

canvas.addEventListener("mousemove", CalculateMove);
    function CalculateMove(event) {
        //console.log(TimeL);
        if (TimeL>0){
           // console.log(star);
   if (star==0) { a1 = pran1x - cx;
    b1 = pran1y - cy;
    c1 = Math.sqrt( a1*a1 + b1*b1 );if (c1<17){ Timer();star=1;score.innerHTML ="0";}}
      else
    {
        Errr=1;
        for (var i=0;i<501;i++){
    ac = coord[i].x - cx;
    bc = coord[i].y - cy;
    cc = Math.sqrt( ac*ac + bc*bc );
            if (cc<17)
            {
                //console.log(cc);
               Errr=0;
                break;
               //clearInterval(timerGO);
              // timer.innerHTML+=": mistake";
               // TimeL=0;
                //break;}
        }
        }
if (Errr==1 /*&& i==500*/){clearInterval(timerGO);
               timer.innerHTML += " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Press a key to start";
                TimeL=0;
                   //Ex=cx;Ey=cy;
                       DrawError(cx,cy);
             //console.log(cc);
            }
       // console.log(c);
    if (c<17){DrawLine();}}
             cx=event.x-rect.left;
    cy=event.y-rect.top;
    a = pranEx - cx;
    b = pranEy - cy;
    c = Math.sqrt( a*a + b*b );
    }
    }

    var vx,vy;

function DrawError(Ex,Ey){
    console.log("123");
ctx.beginPath();
    ctx.arc(Ex, Ey, 15, 0, 2 * Math.PI, false);
  ctx.lineWidth = 3;
     ctx.strokeStyle = '#FE00FE';
    ctx.closePath();
     ctx.stroke();
}
   document.addEventListener("keydown", refresh);
    function refresh() {
        clearInterval(timerGO);
        pran1x=pran1y=pranCx=pranCy=pranEx=pranEy=ran1x=ran1y=ranCx=ranCy=ranEx=ranEy=undefined;
   TimeL=30;coord.length=0;score.innerHTML="0";timer.innerHTML="30";
        ctx.clearRect(0, 0, canvas.width, canvas.height);star=0;scor=0;Errr=0;
Begin();
    }

canvas.addEventListener("mousedown", PointD);
    function PointD(event) {
    vx=event.x-rect.left;
    vy=event.y-rect.top;
    DrawC();
    }

    function DrawC() {
    ctx.beginPath();
    ctx.strokeStyle = 'magenta';
    ctx.rect(vx-1, vy-1, 2, 2);
    ctx.stroke();
    ctx.closePath();}


    var patr = document.createElement("a");
//patr.innerHTML = "Patreon";
document.body.appendChild(patr);
patr.innerHTML = '<a id="patr" title="Patreon support" target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/ultrachess" style="display: block; position: absolute; top: 95%; left: 20px;">Patreon support</a>'


       // ctx.moveTo(10, 10);
/*ctx.bezierCurveTo(10, 10, 37, 80, 200,200);
    ctx.bezierCurveTo(200,200, 37, 80, 100,11);
    ctx.bezierCurveTo(100,11, 130, 130, 105,200);
    ctx.bezierCurveTo(105,200, 70, 300, 105,600);
    ctx.stroke();*/
/*
    // move to the first point
   ctx.moveTo(pointsX[0], pointsY[0]);
   for (var i = 1; i < pointsX.length - 1; i ++)
   {
      var xc = (pointsX[i] + pointsX[i + 1]) / 2;
      var yc = (pointsY[i] + pointsY[i + 1]) / 2;
      ctx.quadraticCurveTo(pointsX[i], pointsY[i], xc, yc);
      ctx.stroke();
   }
 // curve through the last two points

 ctx.quadraticCurveTo(pointsX[i], pointsY[i], pointsX[i+1],pointsY[i+1]);
*/


/*

var canvas=document.getElementById("c");
canvas.style.marginLeft="150px";

var ctx = document.getElementById("c").getContext("2d");


function drawCurve(ctx, ptsa, tension, isClosed, numOfSegments, showPoints) {

  ctx.beginPath();

  drawLines(ctx, getCurvePoints(ptsa, tension, isClosed, numOfSegments));

  if (showPoints) {
    ctx.beginPath();
    for(var i=0;i<ptsa.length-1;i+=1){
      ctx.rect(ptsa[i] - 1, ptsa[i+1] - 1, 4, 4);}
  }

  ctx.stroke();
}


var myPoints = [400,10, 25,200, 520,527, 27,30, 900,905, 987,1]; //minimum two points
var tension = 1;

drawCurve(ctx, myPoints,1,false,100,false); //default tension=0.5
drawCurve(ctx, myPoints, tension);


function getCurvePoints(pts, tension, isClosed, numOfSegments) {

  // use input value if provided, or use a default value
  tension = (typeof tension != 'undefined') ? tension : 1;
  isClosed = isClosed ? isClosed : false;
  numOfSegments = numOfSegments ? numOfSegments : 100;

  var _pts = [], res = [],	// clone array
      x, y,			// our x,y coords
      t1x, t2x, t1y, t2y,	// tension vectors
      c1, c2, c3, c4,		// cardinal points
      st, t, i;		// steps based on num. of segments

  // clone array so we don't change the original
  //
  _pts = pts.slice(0);

  // The algorithm require a previous and next point to the actual point array.
  // Check if we will draw closed or open curve.
  // If closed, copy end points to beginning and first points to end
  // If open, duplicate first points to befinning, end points to end
  if (isClosed) {
    _pts.unshift(pts[pts.length - 1]);
    _pts.unshift(pts[pts.length - 2]);
    _pts.unshift(pts[pts.length - 1]);
    _pts.unshift(pts[pts.length - 2]);
    _pts.push(pts[0]);
    _pts.push(pts[1]);
  }
  else {
    _pts.unshift(pts[1]);	//copy 1. point and insert at beginning
    _pts.unshift(pts[0]);
    _pts.push(pts[pts.length - 2]);	//copy last point and append
    _pts.push(pts[pts.length - 1]);
  }

  // ok, lets start..

  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i=2; i < (_pts.length - 4); i+=2) {
    for (t=0; t <= numOfSegments; t++) {

      // calc tension vectors
      t1x = (_pts[i+2] - _pts[i-2]) * tension;
      t2x = (_pts[i+4] - _pts[i]) * tension;

      t1y = (_pts[i+3] - _pts[i-1]) * tension;
      t2y = (_pts[i+5] - _pts[i+1]) * tension;

      // calc step
      st = t / numOfSegments;

      // calc cardinals
      c1 =   2 * Math.pow(st, 3) 	- 3 * Math.pow(st, 2) + 1;
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
      c3 = 	   Math.pow(st, 3)	- 2 * Math.pow(st, 2) + st;
      c4 = 	   Math.pow(st, 3)	- 	  Math.pow(st, 2);

      // calc x and y cords with common control vectors
      x = c1 * _pts[i]	+ c2 * _pts[i+2] + c3 * t1x + c4 * t2x;
      y = c1 * _pts[i+1]	+ c2 * _pts[i+3] + c3 * t1y + c4 * t2y;

      //store points in array
      res.push(x);
      res.push(y);

    }
  }

  return res;
}
ctx.strokeStyle = 'green';
function drawLines(ctx, pts) {
  console.log(pts);
  ctx.moveTo(pts[0], pts[1]);
  for(var i=2;i<pts.length-1;i+=2) ctx.lineTo(pts[i], pts[i+1]);
}
*/
},50);