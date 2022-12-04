var selected = false
var div_id_selected = ""

function reset(){
	var letters = ["a", "b", "c", "d","e", "f", "g", "h"];
	for (var i = 0; i < letters.length; i++) { 
		//console.log(xs[i]); 
		for(var j=0;j<9;j++){
			//console.log(letters[i]+j);
			//div = document.getElementById(""+xs[i]+j)
		}
	}
	reset_div('a8','white','black','T');
	reset_div('b8','black','black','H');
	reset_div('c8','white','black','B');
	reset_div('d8','black','black','Q');
	reset_div('e8','white','black','K');
	reset_div('f8','black','black','B');
	reset_div('g8','white','black','H');
	reset_div('h8','black','black','T');
	reset_div('a7','black','black','P');
	reset_div('b7','white','black','P');
	reset_div('c7','black','black','P');
	reset_div('d7','white','black','P');
	reset_div('e7','black','black','P');
	reset_div('f7','white','black','P');
	reset_div('g7','black','black','P');
	reset_div('h7','white','black','P');
	

	reset_div('a1','black','white','T');
	reset_div('b1','white','white','H');
	reset_div('c1','black','white','B');
	reset_div('d1','white','white','Q');
	reset_div('e1','black','white','K');
	reset_div('f1','white','white','B');
	reset_div('g1','black','white','H');
	reset_div('h1','white','white','T');
	reset_div('a2','white','white','P');
	reset_div('b2','black','white','P');
	reset_div('c2','white','white','P');
	reset_div('d2','black','white','P');
	reset_div('e2','white','white','P');
	reset_div('f2','black','white','P');
	reset_div('g2','white','white','P');
	reset_div('h2','black','white','P');


	reset_div('a6','white','black','');
	reset_div('b6','black','black','');
	reset_div('c6','white','black','');
	reset_div('d6','black','black','');
	reset_div('e6','white','black','');
	reset_div('f6','black','black','');
	reset_div('g6','white','black','');
	reset_div('h6','black','black','');

	reset_div('a4','white','black','');
	reset_div('b4','black','black','');
	reset_div('c4','white','black','');
	reset_div('d4','black','black','');
	reset_div('e4','white','black','');
	reset_div('f4','black','black','');
	reset_div('g4','white','black','');
	reset_div('h4','black','black','');

	reset_div('a5','black','black','');
	reset_div('b5','white','black','');
	reset_div('c5','black','black','');
	reset_div('d5','white','black','');
	reset_div('e5','black','black','');
	reset_div('f5','white','black','');
	reset_div('g5','black','black','');
	reset_div('h5','white','black','');

	reset_div('a3','black','black','');
	reset_div('b3','white','black','');
	reset_div('c3','black','black','');
	reset_div('d3','white','black','');
	reset_div('e3','black','black','');
	reset_div('f3','white','black','');
	reset_div('g3','black','black','');
	reset_div('h3','white','black','');


}

function reset_div(id,color,color_piece,piece){
	div = document.getElementById(id)
	div.setAttribute('piece',piece)
	div.className=color;

	if (color_piece=="black"){
		if (piece =='T') html = "&#9820;"
		if (piece =='H') html = "&#9822;"
		if (piece =='B') html = "&#9821;"
		if (piece =='Q') html = "&#9819;"
		if (piece =='K') html = "&#9818;"
		if (piece =='P') html = "&#9823;"
		if (piece =='') html = ""
	}
	else{
		if (piece =='T') html = "&#9814;"
		if (piece =='H') html = "&#9816;"
		if (piece =='B') html = "&#9815;"
		if (piece =='Q') html = "&#9813;"
		if (piece =='K') html = "&#9812;"
		if (piece =='P') html = "&#9817;"	
		if (piece =='') html = ""
	}
	div.innerHTML = html
}

function select_position(id){
	var letter = id.substring(0,1)
	var num = id.substring(1,2)
	var div = document.getElementById(id);
	//alert(letter+" "+num+" "+div.id+" "+div.getAttribute("piece")+" "+div.className);
	var piece = div.getAttribute("piece");

	if (selected==true){
		selected = false;
		//REMOVE COLOR
		var div_to_unselect = document.getElementById(div_id_selected);
		if (div_to_unselect.className == "black_selected") {
			div_to_unselect.className = "black";
		}else{
			div_to_unselect.className = "white";
		}		
		//MOVE THE PIECE
		if(id==div_id_selected){
			//move over the same position? do nothing
		}else{
			var piece_to_move = div_to_unselect.innerHTML;
			div.innerHTML = piece_to_move;
			div_to_unselect.innerHTML = "";
			div.setAttribute("piece",div_to_unselect.getAttribute("piece"));
			div_to_unselect.setAttribute("piece","");
		}

	}else{
		if (piece!="") {
			selected = true;
			div_id_selected = id;
			if (div.className == "black") {
				div.className = "black_selected";
			}else{
				div.className = "white_selected";
			}

		}
		else{
			//nothing to move
		}
	}
	
}