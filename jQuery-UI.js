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
