var stop=false;
var i=-7;var j=6;	
function shake(a){stop=false;
	var bb=window.setInterval(function(){
	if(i==8)
		i=-20;
	if(i<=7&&i>=-7){
		a.style.transform="rotate("+i+"deg)";
		i++;
		j=6;
	}
	else{
		a.style.transform="rotate("+j+"deg)";
		j--;
		i++;
	}
	if(stop==true)
		window.clearInterval(bb);
	},25)
}
function stop_shake(){
	stop=true;
}