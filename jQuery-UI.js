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
