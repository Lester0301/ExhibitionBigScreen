function drawFrame(ele,x,y,x1,y1,hl1,hl2,hr1,hr2,vb1,vb2) {
	// body...
	var w=$("."+ele).width()-2*x;
    var h=$("."+ele).height()-2*y;
    // var line_c=_c-c-c1;

    $("#"+ele).attr('width',$("."+ele).width())
    $("#"+ele).attr('height',$("."+ele).height())

    var canvas=document.querySelector("#"+ele);//找到画布才能操作
    var canv=canvas.getContext('2d');//定义画布为2d
	canv.clearRect(0, 0,w ,h);


    canv.strokeStyle = "rgba(28,204,232,1)";
    canv.beginPath();
    canv.lineWidth = 5;

    canv.moveTo(x+x1, y);
    canv.lineTo(x+w-x1,y);
    canv.lineTo(x+w,y1+y);
    canv.lineTo(x+w,y+y1+hr1*h);
    canv.lineTo(x+w-x1,y+y1+hr1*h+y1);
    canv.lineTo(x+w-x1,y+h-hr2*h-2*y1);
    canv.lineTo(x+w,y+h-hr2*h-y1);
    canv.lineTo(x+w,y+h-y1);
    canv.lineTo(x+w-x1,y+h);
    canv.lineTo(x+w-x1-vb2*w,y+h);
    canv.lineTo(x+w-x1-vb2*w-x1,y+h-y1);
    canv.lineTo(x+2*x1+vb1*w,y+h-y1);
    canv.lineTo(x+x1+vb1*w,y+h);
    canv.lineTo(x+x1,y+h);
    canv.lineTo(x,y+h-y1);
    canv.lineTo(x,y+h-y1-hl2*h);
    canv.lineTo(x+x1,y+h-2*y1-hl2*h);
    canv.lineTo(x+x1,y+2*y1+hl1*h);
    canv.lineTo(x,y+y1+hl1*h);
	canv.lineTo(x,y+y1);
    canv.closePath();
    canv.stroke();

    var Color=canv.createRadialGradient(x+w/2, y+h/2, 0, x+w/2, y+h/2, w/1.5);

	Color.addColorStop(0,"rgba(4,39,76,0.9)");

	Color.addColorStop(0.5,"rgba(4,39,76,0.88)");

	Color.addColorStop(1,"rgba(4,39,76,0.88)");

	canv.fillStyle=Color;

    canv.shadowBlur = 10;
    canv.shadowColor = "rgba(1,255,255,1)";
	canv.fill();

}

function drawTop(str,x=0,y=0,line_w=5){
  var bgC1="rgba(4,39,76,0.7)",
      bgC2="rgba(4,39,76,0.7)",
      frC1="rgba(28,204,232,1)",
      frC2="rgba(28,204,232,1)",
      shC1="rgba(28,204,232,1)",
      shC2="rgba(28,204,232,1)";

  var w=$("."+str).width();
  var h=$("."+str).height();
  $("#"+str).attr('width',$("."+str).width());
  $("#"+str).attr('height',$("."+str).height());

  var canvas=document.querySelector("#"+str);//找到画布才能操作
  var ele=canvas.getContext('2d');//定义画布为2d


  ele.clearRect(0, 0, w, h);
  ele.lineWidth = line_w;
  ele.strokeStyle = frC1;

  ele.beginPath();
  ele.moveTo(x, y);
  ele.lineTo(x+w*0.3,y);
  ele.lineTo(x+w*0.3+(h-2*y)/Math.sqrt(3),h-y);
  ele.lineTo(x+w*0.3-20,h-y);
  ele.lineTo(x+w*0.3-24,h-y-4*Math.sqrt(3));
  ele.lineTo(x,h-y-4*Math.sqrt(3));
  ele.closePath();
  ele.stroke();

  ele.fillStyle = bgC1;
  ele.shadowBlur = 10;
  ele.shadowColor = shC1;
  ele.fill();

  ele.strokeStyle = frC2;
  ele.beginPath();
  ele.moveTo(w-x, y);
  ele.lineTo(w*0.7-x,y);
  ele.lineTo(w*0.7-x-(h-2*y)/Math.sqrt(3),h-y);
  ele.lineTo(w*0.7-x+20,h-y);
  ele.lineTo(w*0.7-x+24,h-y-4*Math.sqrt(3));
  ele.lineTo(w-x,h-y-4*Math.sqrt(3));
  ele.closePath();
  ele.stroke();

  ele.fillStyle = bgC2;
  ele.shadowBlur = 10;
  ele.shadowColor = shC2;
  ele.fill();

  ele.beginPath();
  ele.moveTo(x+w*0.34,y);
  ele.lineTo(w*0.66-x,y);
  ele.lineTo(w*0.66-x-(h-2*y)/Math.sqrt(3),h-y);
  ele.lineTo(x+w*0.34+(h-2*y)/Math.sqrt(3),h-y);
  ele.closePath();
  ele.stroke();
  ele.fillStyle = bgC2;
  ele.shadowBlur = 10;
  ele.shadowColor = shC2;
  ele.fill();

  var maiFonS=h/2-3;
  var leftRightFonS=h/3;
  $(".mainTitle").css({'fontSize':maiFonS+'px'})
  $(".leftTitle").css({'fontSize':leftRightFonS+'px'})
  $(".rightTitle").css({'fontSize':leftRightFonS+'px'})


}
