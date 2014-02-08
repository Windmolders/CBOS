$(document).ready( function() {

if (localStorage.getItem("sex") === null) {
  localStorage.sex = "Man";
}
if (localStorage.getItem("age") === null) {
 localStorage.age = "20-29";
}
if (localStorage.getItem("push") === null) {
localStorage.push = 0;
}
if (localStorage.getItem("sit") === null) {
localStorage.sit = 0;
}
if (localStorage.getItem("run") === null) {
localStorage.run = 0;
}

var hoogte = $(".main-section").height();

$(".clickf").css("max-height",hoogte-100);

home();




});


function home(){
    $('.off-canvas-wrap').removeClass('move-right');
	$("#z-start").hide();
	$("#z-push").hide();
	$("#z-sit").hide();
	$("#z-run").hide();
	$("#z-result").hide();
	$("#z-home").show();
}

function start(){	
	$("#sex").html(localStorage.sex);
	$("#age").html(localStorage.age);
	$('.off-canvas-wrap').removeClass('move-right');
	$("#z-push").hide();
	$("#z-sit").hide();
	$("#z-run").hide();
	$("#z-result").hide();
	$("#z-home").hide();
	
	
	
	
	$("#z-start").show();
}

function push(){
	$('.off-canvas-wrap').removeClass('move-right');
	$("#z-start").hide();	
	$("#z-sit").hide();
	$("#z-run").hide();
	$("#z-result").hide();
	$("#z-home").hide();
	$("#z-push").show();
}

function sit(){
	$('.off-canvas-wrap').removeClass('move-right');
	$("#z-start").hide();
	$("#z-push").hide();	
	$("#z-run").hide();
	$("#z-result").hide();
	$("#z-home").hide();
	$("#z-sit").show();
}

function run(){
	$('.off-canvas-wrap').removeClass('move-right');
	$("#z-start").hide();
	$("#z-push").hide();
	$("#z-sit").hide();	
	$("#z-result").hide();
	$("#z-home").hide();
	$("#z-run").show();
}

function result(){
	$('.off-canvas-wrap').removeClass('move-right');
	$("#z-start").hide();
	$("#z-push").hide();
	$("#z-sit").hide();
	$("#z-run").hide();
	$("#z-home").hide();
	$("#z-result").show();
	
	calculate();
}

function calculate(){
	
	
	if( $("#upjes").val() ) {
        localStorage.push = $("#upjes").val();
    }else{
    	localStorage.push = 0;
    }
    
    if( $("#sitjes").val() ) {
        localStorage.sit = $("#sitjes").val();
    }else{
    	localStorage.sit = 0;
    }
    
    if( $("#tijd").val() ) {
        localStorage.run = $("#tijd").val();
    }else{
    	localStorage.run = 0;
    }		
		

	var sex = localStorage.sex;
	var age = localStorage.age;
	var push = localStorage.push;
	var sit = localStorage.sit;
	var run = localStorage.run;
	
	var pushResult=0;
	var sitResult=0;
	var runResult=0;
	var total=0;
		
	var pusha=[[41,33,51,39,41,33,34,26,28,23],
[39,31,49,38,39,31,32,25,27,22],
[38,30,47,37,38,30,31,24,26,21],
[36,29,45,36,36,29,29,22,24,20],
[35,28,43,34,35,28,27,21,23,19],
[33,27,41,33,33,27,26,20,21,18],
[32,25,39,31,32,25,25,19,20,17],
[30,24,37,30,30,24,23,18,18,16],
[29,23,35,28,29,23,22,17,17,15],
[27,22,33,27,27,22,21,15,15,14],
[25,20,31,25,25,20,19,14,14,13],
[23,18,28,23,23,18,18,13,13,12],
[21,16,25,21,21,16,16,12,12,10],
[19,14,22,19,19,14,14,11,11,9],
[17,12,19,17,17,12,12,9,9,8],
[15,10,16,15,15,10,10,7,8,7],
[12,8,13,12,12,8,8,6,7,6],
[9,6,10,9,9,6,6,5,6,5],
[6,4,7,6,6,4,4,3,4,4],
[3,1,4,3,3,1,2,1,2,1]];
	
var sita=[[52,43,56,52,52,43,48,39,44,31],
[51,42,55,51,51,42,47,37,42,29],
[50,40,53,50,50,40,46,36,41,28],
[48,39,52,48,48,39,44,35,39,27],
[47,37,50,47,47,37,43,33,37,26],
[45,36,49,45,45,36,41,32,36,25],
[44,34,47,44,44,34,40,30,34,24],
[42,33,46,42,42,33,38,29,33,23],
[41,32,44,41,41,32,37,27,31,22],
[40,31,43,39,40,31,35,26,30,21],
[39,29,42,38,39,29,34,24,28,20],
[37,27,41,36,37,27,33,22,27,19],
[36,26,40,34,36,26,31,20,25,18],
[33,24,39,32,33,24,29,19,23,16],
[32,22,37,30,32,22,27,17,21,14],
[30,20,35,28,30,20,25,15,20,12],
[29,18,33,26,29,18,23,13,18,11],
[27,16,31,24,27,16,21,11,16,9],
[25,14,29,21,25,14,19,9,14,7],
[23,11,27,18,23,11,17,7,12,5]];

var runa=[[9.00,11.50,8.20,11.05,9.00,11.50,9.55,12.35,11.05,13.40],
[9.20,12.10,8.40,11.25,9.20,12.10,10.15,12.55,11.25,14.00],
[9.40,12.30,9.00,11.45,9.40,12.30,10.35,13.15,11.45,14.20],
[10.00,12.50,9.20,12.05,10.00,12.50,10.55,13.35,12.05,14.40],
[10.20,13.10,9.40,12.25,10.20,13.10,11.15,13.55,12.25,15.00],
[10.40,13.30,10.00,12.45,10.40,13.30,11.35,14.15,12.45,15.20],
[11.00,13.50,10.20,13.05,11.00,13.50,11.55,14.35,13.05,15.40],
[11.20,14.10,10.40,13.25,11.20,14.10,12.15,14.55,13.25,16.00],
[11.40,14.30,11.00,13.45,11.40,14.30,12.35,15.15,13.45,16.20],
[12.00,14.50,11.20,14.05,12.00,14.50,12.55,15.35,14.05,16.40],
[12.20,15.10,11.40,14.25,12.20,15.10,13.15,15.55,14.25,17.00],
[12.50,15.40,12.10,14.55,12.50,15.40,13.45,16.25,14.55,17.30],
[13.20,16.10,12.40,15.25,13.20,16.10,14.15,16.55,15.25,18.00],
[13.50,16.40,13.10,15.55,13.50,16.40,14.45,17.25,15.55,18.30],
[14.20,17.10,13.40,16.25,14.20,17.10,15.15,17.55,16.25,19.00],
[14.50,17.40,14.10,16.55,14.50,17.40,15.45,18.25,16.55,19.30],
[15.20,18.10,14.40,17.25,15.20,18.10,16.15,18.55,17.25,20.00],
[15.50,18.40,15.10,17.55,15.50,18.40,16.45,19.25,17.55,20.30],
[16.20,19.10,15.40,18.25,16.20,19.10,17.15,19.55,18.25,21.00],
[16.50,19.40,16.10,18.55,16.50,19.40,17.45,20.25,18.55,21.30]
];
	
	var punten = [20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0];
	
	var regel;
	
	if(sex == "Man"){
		
		
		
		switch(age){
			case "<20": regel = 0;
			break;
			case "20-29": regel = 2;
			break;
			case "30-39": regel = 4;
			break;
			case "40-49": regel = 6;
			break;
			case ">50": regel = 8;
			break;
			
		}
		
	}else{
		
		switch(age){
			case "<20": regel = 1;
			break;
			case "20-29": regel = 3;
			break;
			case "30-39": regel = 5;
			break;
			case "40-49": regel = 7;
			break;
			case ">50": regel = 9;
			break;
		}
			
		
	}//if man end
	
	
		//push
		for(var i = 0; i < pusha.length; i++){
			
			if(pusha[0][regel] <= push){
				pushResult = 20;
			}else{
			
				if(i>0){
					if(pusha[i][regel] <= push  && pusha[i-1][regel] > push){
						
						pushResult = 20 - i;
						
					}
				}
			
			}
		}
		
		//sit
		for(var i = 0; i < sita.length; i++){
			
			if(sita[0][regel] <= sit){
				sitResult = 20;
			}else{
			
				if(i>0){
					if(sita[i][regel] <= sit  && sita[i-1][regel] > sit){
						
						sitResult = 20 - i;
						
					}
				}
			
			}
		}
		
//tijd
		
		var res = run.split(":");
		var tijdnummer = parseFloat(res[0] + "." + res[1]);
		
		
		//tijd
		for(var i = 0; i < runa.length; i++){
			
			if(runa[0][regel] >= tijdnummer){
				runResult = 20;
			}else{
			
				if(i>0){
					if(runa[i][regel] >= tijdnummer  && runa[i-1][regel] < tijdnummer){
						
						runResult = 20 - i;
						
					}
				}
			
			}
		}
		
		//tijd eind
		
		
		
		$("#rpush").html(pushResult);
		$("#rsit").html(sitResult);
		$("#rrun").html(runResult);
		
		total = pushResult + sitResult + runResult; 
		total = total * 100 / 60;
		total = parseInt(total*100);
		total = total /100;
		
		
		$("#resultaat").html(total+'%');			
			
		
		
}//calc end

function sex(){		
	$("#z-start").hide();
	$("#sexpage").show();	
}

function setsex(a){
	var welk="Man";	
	if(a == 1){
		welk="Vrouw";	
	}	
	localStorage.sex = welk;
	alert(localStorage.sex);
	$("#sex").html(welk);
	$("#sexpage").hide();
	$("#z-start").show();	
}

function age(){		
	$("#z-start").hide();
	$("#agepage").show();	
}

function setage(a){
	var welk="20-29";	
	
	if(a == 0){
		welk="<20";	
	}
	
	if(a == 1){
		welk="20-29";	
	}	
	
	if(a == 2){
		welk="30-39";	
	}	
	
	if(a == 3){
		welk="40-49";	
	}	
	if(a == 4){
		welk=">50";	
	}
		
	localStorage.age = welk;
	$("#age").html(welk);
	$("#agepage").hide();
	$("#z-start").show();	
}




