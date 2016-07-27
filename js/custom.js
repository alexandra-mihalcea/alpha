function toggleText(button_id,a,b)  {
   var text = document.getElementById(button_id).firstChild;
   text.data = text.data == a ? b : a;
}

function toggleVisibility(x){
	var div = document.getElementById(x);
		if(div.style.display == "block"){
			div.style.display = "none";}
		else{
			div.style.display = "block";}	
}

function goTo(x){
	var div = document.getElementsByClassName("hidden-menu");
	for(var i=0;i<div.length;i++){
	div[i].style.display = "none";}
	var target = document.getElementById(x);
	target.style.display = "block";	
}


window.onload = function() {
  var target = document.getElementById("mainMenu");
  target.style.display = "block";
};


//Available alphabets 
var Hiragana=['a','あ', 'i', 'い', 'u', 'う','e','え', 'o','お', 
			  'ka','か', 'ki', 'き', 'ku', 'く','ke','け', 'ko','こ', 
			  'ga','が', 'gi', 'ぎ', 'gu', 'ぐ','ge','げ', 'go','ご',
			  'sa','さ', 'shi', 'し', 'su', 'す','se','せ', 'so','そ',
			  'za','ざ', 'ji', 'じ', 'zu', 'ず','ze','ぜ', 'zo','ぞ',
			  'ta','た', 'chi', 'ち', 'tsu', 'つ','te','て', 'to','と',
			  'da','だ', 'ji', 'ぢ', 'zu', 'づ','de','で', 'do','ど',
			  'na','な', 'ni', 'に', 'nu', 'ぬ','ne','ね', 'no','の',
			  'ha','は', 'hi', 'ひ', 'fu', 'ふ','he','へ', 'ho','ほ',
			  'ba','ば', 'bi', 'び', 'bu', 'ぶ','be','べ', 'bo','ぼ',
			  'pa','ぱ', 'pi', 'ぴ', 'pu', 'ぷ','pe','ぺ', 'po','ぽ',
			  'ma','ま', 'mi', 'み', 'mu', 'む','me','め', 'mo','も',
			  'ya','や', 'yu', 'ゆ', 'yo','よ',
			  'ra','ら', 'ri', 'り', 'ru', 'る','re','れ', 'ro','ろ',
			  'wa','わ', 'wo','を',
			  'n','ん'];
			  
var Katakana=['a','ア', 'i', 'イ', 'u', 'ウ','e','エ', 'o','オ', 
			  'ka','カ', 'ki', 'キ', 'ku', 'ク','ke','ケ', 'ko','コ', 
			  'ga','ガ', 'gi', 'ギ', 'gu', 'グ','ge','ゲ', 'go','ゴ',
			  'sa','サ', 'shi', 'シ', 'su', 'ス','se','セ', 'so','ソ',
			  'za','ザ', 'ji', 'ジ', 'zu', 'ズ','ze','ゼ', 'zo','ゾ',
			  'ta','タ', 'chi', 'チ', 'tsu', 'ツ','te','テ', 'to','ト',
			  'da','ダ', 'ji', 'ヂ', 'zu', 'ヅ','de','デ', 'do','ド',
			  'na','ナ', 'ni', 'ニ', 'nu', 'ヌ','ne','ネ', 'no','ノ',
			  'ha','ハ', 'hi', 'ヒ', 'fu', 'フ','he','ヘ', 'ho','ホ',
			  'ba','バ', 'bi', 'ビ', 'bu', 'ブ','be','ベ', 'bo','ボ',
			  'pa','パ', 'pi', 'ピ', 'pu', 'プ','pe','ペ', 'po','ポ',
			  'ma','マ', 'mi', 'ミ', 'mu', 'ム','me','メ', 'mo','モ',
			  'ya','ヤ', 'yu', 'ユ', 'yo','ヨ',
			  'ra','ラ', 'ri', 'リ', 'ru', 'ル','re','レ', 'ro','ロ',
			  'wa','ワ', 'wo','ヲ',
			  'n','ン'];

var Cyrillic=['a','ア', 'i', 'イ', 'u', 'ウ','e','エ', 'o','オ', 
			  'ka','カ', 'ki', 'キ', 'ku', 'ク','ke','ケ', 'ko','コ', 
			  'ga','ガ', 'gi', 'ギ', 'gu', 'グ','ge','ゲ', 'go','ゴ',
			  'sa','サ', 'shi', 'シ', 'su', 'ス','se','セ', 'so','ソ',
			  'za','ザ', 'ji', 'ジ', 'zu', 'ズ','ze','ゼ', 'zo','ゾ',
			  'ta','タ', 'chi', 'チ', 'tsu', 'ツ','te','テ', 'to','ト',
			  'da','ダ', 'ji', 'ヂ', 'zu', 'ヅ','de','デ', 'do','ド',
			  'na','ナ', 'ni', 'ニ', 'nu', 'ヌ','ne','ネ', 'no','ノ',
			  'ha','ハ', 'hi', 'ヒ', 'fu', 'フ','he','ヘ', 'ho','ホ',
			  'ba','バ', 'bi', 'ビ', 'bu', 'ブ','be','ベ', 'bo','ボ',
			  'pa','パ', 'pi', 'ピ', 'pu', 'プ','pe','ペ', 'po','ポ',
			  'ma','マ', 'mi', 'ミ', 'mu', 'ム','me','メ', 'mo','モ',
			  'ya','ヤ', 'yu', 'ユ', 'yo','ヨ',
			  'ra','ラ', 'ri', 'リ', 'ru', 'ル','re','レ', 'ro','ロ',
			  'wa','ワ', 'wo','ヲ',
			  'n','ン'];
			  
var correct_answers, wrong_answers;	

//Table Functions

function GenerateTable(array, title, description, source, row_length){
	var counter=0, row=1;
	goTo('table');
	document.getElementById("table-title").innerHTML=title;
	document.getElementById("table-description").innerHTML=description;
	document.getElementById("table-back-button").onclick = (function(a) {
    return function() {
       goTo(a);
    };
	})(source);
	while(counter<array.length-1){
		CreateRow(row);
		for(var i=0;i<row_length;i++){
		CreateButton(array[counter+1], array[counter],"table-row-"+row);
		counter+=2;
		}
		row++;
		
	}
}
function CreateRow(num){
	var div = document.createElement('div');
	div.className="row";
	div.id="table-row-"	+num;
	var target = document.getElementById("table-container");
    target.appendChild(div);	
}
function CreateButton(face_a, face_b,target_ID){
	if(!document.getElementById(face_b)&&(face_a!=null||face_b!=null)){
		var button = document.createElement("BUTTON");
		var t = document.createTextNode(face_a);
		button.type="button";
		button.className="btn btn-table";
		button.id=face_b;
		button.appendChild(t);
		button.onclick = (function(a,b,c) {
		return function() {
		   toggleText(a,b,c);
		};
		})(button.id,face_a, face_b);
		var target = document.getElementById(target_ID);
		target.appendChild(button);	
	}
	

}

//Quiz Functions

function TakeQuiz(x,y,z){
	ResetScore();
	goTo('quiz');
	document.getElementById("quiz-title").innerHTML=y;
	document.getElementById("quiz-back-button").onclick = (function(a) {
    return function() {
       goTo(a);
    };
	})(z);
	document.getElementById("quiz-skip-button").onclick = (function(a) {
    return function() {
       MakeQuestion(a);
    };
	})(x);
	MakeQuestion(x);
	var buttons = document.getElementsByClassName("btn-quiz");
	
	for(var i=0; i<4;i++){
	var button_id=buttons[i].id;
	buttons[i].onclick = (function(opt1, opt2) {
    return function() {
       checkAnswer(opt1, opt2);
	   MakeQuestion(x);
	   UpdateScore();
    };
	})(button_id,x);
	console.log(buttons[i]);
	}
}

function UpdateScore(){
		var total= correct_answers+wrong_answers;
		var result;
		result = (correct_answers*100)/total;
		document.getElementById("quiz-percentage").innerHTML=(correct_answers+" ("+result.toFixed(2))+"%) correct answers out of "+total+"!";
}

function ResetScore(){
		document.getElementById("quiz-percentage").innerHTML=(" ");
		window.correct_answers=0;
		 window.wrong_answers=0;	
}

function MakeQuestion(x){
	var type=Math.floor(Math.random() * 2);
	if (type===0){
	type=type-1;
	}
	var question=Math.floor(Math.random() * x.length)-type;
	var correct_answer, temp;
	if(question %2===0){
		correct_answer=question+1;
	}
	else{
		correct_answer=question-1;
	}
	console.log(x[correct_answer]);
	document.getElementById("question-quiz").firstChild.data=x[question];
	
	var buttons = document.getElementsByClassName("btn-quiz");
	
	var answer=[];
	
	for(var i=0; i<4;i++){
		do{
		temp=Math.floor(Math.random() * x.length-2)+type;}while(question%2===temp%2);
		answer[i]=x[temp];}
	var correct_num=Math.floor(Math.random() * 4);
	answer[correct_num]=x[correct_answer];
	for(i=0; i<4;i++){
		buttons[i].firstChild.data = answer[i];
	}
	
}
c

function checkAnswer(button_id,x){
		var correct;
		var question=x.indexOf(document.getElementById("question-quiz").firstChild.data);
		var answer=x.indexOf(document.getElementById(button_id).firstChild.data);
		if((question%2===0&&question-answer===-1)||(question%2!==0&&question-answer===1)){
			correct=true;
		}
		else{
			correct=false;	
		}
		console.log(correct);
		if(correct){
		 correct_answers++;	
		}
		else{
		 wrong_answers++;	
		}
		return(correct);
	}
