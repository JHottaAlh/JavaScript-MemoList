/**
 * jQuery UI に関するメモ(参考程度に)
 */
//jQuery UI
//jQueryを更に拡張したもの
//jQueryUIのMDN		テーマもここからダウンロードする
//https://jqueryui.com/

//googleで読み込む
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.23/jquery-ui.min.js"></script>
//ただし、themeを使うwidgets(ウィジェット)を利用できないのでそれらを利用する場合は公式サイトからダウンロード

//------------------------------------------------------draggable------------------------------------------------------

<div id = "box">box
	<div class = "handle">drag here!</div>
	<div class = "cancel">not here!</div>
</div>

<style>
#box {
	width: 100px;
	height: 100px;
	background: green;
}
</style>

<script>
$(function() {
	$("#box").draggable({
		axis: "x",		//x方向にしかドラッグ不可
		opacity: 0.5,	//ドラッグ中の透明度
		//handle: ".handle",	//ドラッグできる部分をclass = handleに指定
		cancel: ".cancel"	//指定した要素の部分のみドラッグ不可に
		
		//drag中に座標を取得
		drag: function(event, ui) {
			console.log(ui.position.left);
		}
	});
});
</script>


//------------------------------------------------------droppable------------------------------------------------------
//別の要素にドロップした時に何らかの処理をする
<div class = "target">target</div>

<style>
.box {
	width: 50px;
	height: 50px;
	background: #ccc;
	margin-bottom: 20px;
}
.target {
	width: 100px;
	height: 100px;
	background: pink;
}
.hover {
	background: red;
}

</style>

<script>
$(function() {
	$(".box").draggable({
		helper: "clone"
	});
	$(".target").droppable({
		accept: ".box",
		hoverClass: "hover",
		tolerance: "fit",	//要素に完全に入りきった時に判定
		drop: function() {
			ui.draggable.clone().appendTo(this);
			console.log("dropped!");
		}
	});
});
</script>

//------------------------------------------------------resizable------------------------------------------------------
//要素のサイズを変更

$(function() {
	$(".box").draggable.resizable({
		handles: "all",
		aspevtRatio: true,		//縦横比を保持
		stop: function (event, ui) {
			console.log(ui.size.height, ui.size.width);	//リサイズ後の縦横の大きさをコンソールに出力
		}
	});
});


//------------------------------------------------------selectable------------------------------------------------------

$(function() {
	var selected = new Array();
	$("#selectable").selectable({
		selected: function(event, ui){		//選択されたものを配列に追加
			if (selected.indexOf(ui.selected.id)== -1){		//重複するものは配列に追加しない
				selected.push(ui.selected.id);
			}
			console.log(selected);
		},
		unselected: function(event, ui) {	//選択解除で配列から削除
			var id = ui.unselected.id;
			selected.splice(selected.indexOF(id), 1);
			console.log(selected);
		}
	});
});

//------------------------------------------------------sortable------------------------------------------------------
//文字の並びの入れ替えを実現
//cursorをmoveにすると分かりやすい
//opacityで透明度指定

update: function(event, ui){
	console.log($(this).sortable("serialize"));
}


//------------------------------------------------------accordion------------------------------------------------------
//折りたたみ式のセクション
見出し(<h3>など)の直下に折りたたむ対象のdiv要素を隣接させるのがルール
<div id = "accordion">

<h3><a href = "">title</a></h3>
<div>こんにちは</div>

<h3><a href = "">title2</a></h3>
<div>こんばんは</div>

</div>

$(function() {
	$("#accordion").accordion();
});

//------------------------------------------------------autocomplete------------------------------------------------------
//一文字入れると候補が出てくる機能
$(function() {
	var langs = ["ja","en","cn","fr","日本","中国"];
	$("#langs").autocomplete({
		sorce: langs
	});
});

//------------------------------------------------------button------------------------------------------------------
<button>click me!!</button>
<input type = "checkbox" id = "check"><label for = "check">check!</label>
<div id = "set">
<input type = "radio" name = "radio" id = "radio1"><label for = "radio1">1</label>
<input type = "radio" name = "radio" id = "radio2"><label for = "radio2">2</label>
<input type = "radio" name = "radio" id = "radio3"><label for = "radio3">3</label>
</div>

$(function() {
	$("button").button();
	$("#check").button();
	$("input[type=radio]").button();
	$("#set").buttonset();			//radioのボタンをひとまとめにできる
});


//------------------------------------------------------datepicker------------------------------------------------------
//optionの数が多いのでほしい機能をMDNで探す
<input type = "text" id = "datepicker">

$(function() {
	$("#datepicker").datepicker({
		dateFormat: "yy-mm-dd"
		numberOfMonth: 3,
		minDate: -2,
		maxDate: "+1M"
	});
});


//------------------------------------------------------dialog------------------------------------------------------
<button>Open!</button>
<div id = "msg">
こんにちは！
</div>

$(function() {
	$("button").click(function() {
		$("#msg").dialog("open");
	});
	$("#msg").dialog({
		autoOpen: false,
		buttons: {
			"OK":function() {
				$(this).dialog("close");
			}
		},
		title: "title",
		model: true		//ダイアログにフォーカスし、他の操作ができなくなる
	});
});


//------------------------------------------------------progressbarとslider------------------------------------------------------
<div id = "bar" style = "width:200px"></div>
<div id = "slider" style = "width:200px; margin-top:20px"></div>

$(function() {
	$("#bar").progressbar({
		value: 33
	});
	$("#slider").slider({
		slider: function(event, ui){
			console.log(ui.value);
			$("#bar").progressbar("option", "value", ui.value);
		}
	});
});

//------------------------------------------------------tabs------------------------------------------------------
<div id = "tabs">
<ul>
<li><a href = "#menu1">Menu1</a></li>
<li><a href = "#menu2">Menu2</a></li>
<li><a href = "#menu3">Menu3</a></li>
</ul>

<div id = "menu1">menu 1</div>
<div id = "menu2">menu 2</div>
<div id = "menu3">menu 3</div>

</div>

$(function() {
	$("#tabs").tabs({
		selected: 1			//初期値で開いておきたい値を指定
	});
});


