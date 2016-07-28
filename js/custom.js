//variable declaration

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
    'ya','や', null, null, 'yu', 'ゆ', null, null, 'yo','よ',
    'ra','ら', 'ri', 'り', 'ru', 'る','re','れ', 'ro','ろ',
    'wa','わ', null, null, null, null, null, null, 'wo','を',
    'n','ん',null, null, null, null, null, null, null, null];

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
    'ya','ヤ', null, null, 'yu', 'ユ', null, null, 'yo','ヨ',
    'ra','ラ', 'ri', 'リ', 'ru', 'ル','re','レ', 'ro','ロ',
    'wa','ワ', null, null, null, null, null, null, 'wo','ヲ',
    'n','ン', null, null, null, null, null, null, null, null];

var Kanji =   ['ichi(1)', '一', 'ni(2)','二', 'san(3)','三', 'yon(4)', '四',
    'go(5)', '五','roku(6)', '六', 'nana(7)','七', 'hachi(8)','八',
    'hyaku(100)', '百', 'sen(1000)', '千','man(10.000)', '万', 'nani(what)', '何'];

var Cyrillic=['a', 'а', 'b', 'б', 'v',  'в', 'g',  'г', 'd', 'д', 'e', 'е',
    'ë', 'ё',	 'ž', 'ж', 'z',  'з', 'i',  'и','j', 'й',  'k', 'к',
    'l', 'л', 'm', 'м', 'n',  'н', 'o',  'о', 'p', 'п', 'r', 'р',
    's', 'с', 't', 'т', 'u',  'у', 'f',  'ф', 'h', 'х', 'c', 'ц',
    'č', 'ч', 'š', 'ш', 'šč', 'щ', 'y', 'ы',  'è', 'э', 'û', 'ю',
    'â', 'я', null, null, null, null, null, null, null, null, null, null];


//page information
var info = {
    hiragana:{
        array: Hiragana,
        title:"Hiragana ( ひらがな )",
        description:"Press on the letters to change beween hiragana and romaji.",
        url:"hiragana",
        rows:5,
        buttonshape:"square"
    },
    katakana:{
        array: Katakana,
        title:"Katakana ( カタカナ )",
        description:"Press on the letters to change beween katakana and romaji.",
        url:"katakana",
        rows:5,
        buttonshape:"square"
    },
    kanji:{
        array: Kanji,
        title:"Kanji (漢字)",
        description:"Press on the letters to change beween kanji and romaji.",
        url:"kanji",
        rows:4,
        buttonshape:"rectangle"
    },
    cyrillic:{
        array: Cyrillic,
        title:"Russian Cyrillic (кириллица)",
        description:"Press on the letters to change beween cyrillic and their latin counterparts.",
        url:"cyrillic",
        rows:6,
        buttonshape:"square"
    }

};

var correct_answers, wrong_answers;

//Set main menu to visible while loading
window.onload = function() {
    var target = document.getElementById("mainMenu");
    target.style.display = "block";
};

//switch between pages
function goTo(x){
    console.log(x);
    var div = document.getElementsByClassName("hidden-menu");
    for(var i=0;i<div.length;i++){
        div[i].style.display = "none";}
    var target = document.getElementById(x);
    target.style.display = "block";
}

function toggleVisibility(x){
    var div = document.getElementById(x);
    if(div.style.display == "block"){
        div.style.display = "none";}
    else{
        div.style.display = "block";}
}

//Table Functions

//change text on click
function toggleText(button_id,a,b)  {
    var text = document.getElementById(button_id).firstChild;
    text.data = text.data == a ? b : a;
}

function GenerateTable(source){

    var counter=0, row=1;
    goTo('table');
    ResetTable();
    document.getElementById("table-title").innerHTML=source.title;
    document.getElementById("table-description").innerHTML=source.description;
    document.getElementById("table-back-button").onclick = (function(a) {
        return function() {
            goTo(a);
        };
    })(source.url);
    while(counter<source.array.length-1){
        CreateRow(row);
        for(var i=0;i<source.rows;i++){
            if(source.array[counter]||source.array[counter]===null){
                DecideButtonType(source.array[counter+1], source.array[counter],"table-row-"+row,source.rows, source.buttonshape);}
            counter+=2;
        }
        row++;

    }
}
function CreateRow(num){
    var div = document.createElement('div');
    div.className="row table-row force-inline";
    div.id="table-row-"	+num;
    var target = document.getElementById("table-inner-container");
    target.appendChild(div);
}

function DecideButtonType(face_a, face_b,target_ID,row_length, button_shape){
    if(!document.getElementById(face_b)&&(face_a!==null||face_b!==null)){
        CreateButton(face_a, face_b,target_ID,row_length, face_a, "btn btn-table", button_shape );
    }
    if(face_a===null||face_b===null){
        CreateButton(face_a, face_b,target_ID,row_length,"empty-space", "btn btn-table btn-hidden btn-disabled", button_shape);
    }
}

function CreateButton(face_a, face_b,target_ID,row_length,button_id, button_class, button_shape){
    var button, t, target, size, font_size=5;
    console.log(window.innerWidth);
    if(window.innerWidth<1300){
        if(button_shape == "square"){
            size=75/row_length;
        }
        else{
            size=80/row_length;
            font_size=3;
        }
    }
    else{
        if(button_shape == "square"){
            size=40/row_length;
            font_size=3;
        }
        else{
            size=50/row_length;
            font_size=2;
        }
    }


    button = document.createElement("BUTTON");
    t = document.createTextNode(face_a);
    button.type="button";
    button.className=button_class;
    button.id=button_id;
    if(button_shape === "square"){
        button.setAttribute("style", "width:"+size+"vw ;height:"+size+"vw; font-size: "+font_size+"vw;");}
    else{
        button.setAttribute("style", "width:"+size+"vw ;height:"+size/2+"vw; font-size: "+font_size+"vw;");}
    button.appendChild(t);
    button.onclick = (function(a,b,c) {
        return function() {
            toggleText(a,b,c);
        };
    })(button.id,face_a, face_b);
    target = document.getElementById(target_ID);
    target.appendChild(button);
}

function ResetTable(){
    var target = document.getElementById("table-inner-container");
    $(target).empty();
}



//Quiz Functions

function TakeQuiz(source){
    ResetScore();
    goTo('quiz');
    document.getElementById("quiz-title").innerHTML=source.title;
    document.getElementById("quiz-back-button").onclick = (function(a) {
        return function() {
            goTo(a);
        };
    })(source.url);
    document.getElementById("quiz-skip-button").onclick = (function(a) {
        return function() {
            MakeQuestion(a);
        };
    })(source.array);
    document.getElementById("quiz-skip-button").className += " btn-skip";
    MakeQuestion(source.array);
    var buttons = document.getElementsByClassName("btn-quiz");
    for(var i=0; i<4;i++){
        var button_id=buttons[i].id;
        buttons[i].onclick = (function(opt1, opt2) {
            return function() {
                checkAnswer(opt1, opt2);
                MakeQuestion(source.array);
                UpdateScore();
            };
        })(button_id,source.array);
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
    var question;
    do{
        question=Math.floor(Math.random() * x.length-2)-type;}while( x[question]===null||question<0);
    var correct_answer, temp;
    if(question %2===0){
        correct_answer=question+1;
    }
    else{
        correct_answer=question-1;
    }
    document.getElementById("question-quiz").firstChild.data=x[question];

    var buttons = document.getElementsByClassName("btn-quiz");

    var answer=[];

    for(var i=0; i<4;i++){
        do{
            temp=Math.floor(Math.random() * x.length-2)+type;
        }while(question%2===temp%2||x[temp]===null||temp<0||answer.includes(x[temp])||temp===correct_answer);//prevent any duplicates or any empty tiles
        answer[i]=x[temp];
    }
    var correct_num=Math.floor(Math.random() * 4);
    answer[correct_num]=x[correct_answer];

    for(i=0; i<4;i++){
        buttons[i].firstChild.data = answer[i];
    }

}


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
    if(correct){
        correct_answers++;
    }
    else{
        wrong_answers++;
    }
    return(correct);
}
