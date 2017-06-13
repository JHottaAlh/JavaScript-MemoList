/**
 * jQueryに関するメモ(殴り書き、参考までに)
 */

var e = document.getElementById(要素のID);
e.style.color = 'red';



//jQuery
$(function() {
	//セレクタ 処理対象となるDOM要素を指定する記法 $('要素名')
	//メソッド 処理		以降に続く処理
	//メソッドチェーン(メソッドの連結)
	$('p').css('color', 'red').hide(slow);
});


//id,classの指定
//HTML要素 p h1 ul etc...
//id #main
//class .item
$(function() {
	$(".item").css("color", "red");
});

//セレクタメソッド
// # .		id,class
// >			直下の子要素
//  (空白)	それ以下の要素
// ,			複数の要素
// + 		隣接する要素
//例)ID-mainの直下のclass-itemに適応するfunction
$(function(){
	$("#main > .item").css("color", "red");
});

//空白でその要素内の該当する要素全てに適用
$(function(){
	$("#main .item").css("color", "red");
});

//隣接する要素に対して適用(itemに隣接するitemに適用)
$(function(){
	$(".item + .item").css("color", "red");
});


//フィルタ
//リストの2の要素にのみ適用するフィルタ
//要素:フィルタの条件で記述する
// :eq()			該当と一致
// :gt(), :lt()		greater than / less than ～より大きい/小さい
// :even, :odd		偶数 / 奇数の要素
// :contains()		()内の条件を含む記述がされているかどうか
// :first, :last	要素の最初 / 最後

$(function() {
	$("#sub > li:eq(2)").css("color", "red");
});

//要素の中に22人、120円、など2が含まれる記述があれば適用される
$(function() {
	$("#sub > li:contains(2)").css("color", "red");
});

//メソッドを使ったDOM要素の指定
// parent(), children()		親要素 / 子要素 全て適用させる
// next(), prev()			指定した要素の次 / 前 の要素に適用
//siblings() - 兄弟要素		指定した要素の同列要素に適用

//親要素の指定
$(function() {
	$("#sub").parent().css("color", "red");
});

//指定した要素の次の要素に適用
//id-sub内のli(2)の次の要素に適用させる
$(function() {
	$("#sub > li:eq(2)").next().css("color", "red");
});

//属性セレクタ
// =
// !=
// *=	含まれる	a[href *= "google"]		googleが含まれる
// ^=	～で始まる	a[href ^= "a"]			aから始まる
// $=	～で終わる
$(function() {
	$("a"[href = "http//:google.com"]).css("background", "red");
});

//メソッド
// .css 設定、取得
//取得の方法
<style>
	.myStyle{
		border: 5px solid green;
		font-size: 48px;
	}
</style>
$(function() {
	console.log($("p").css("color"));
	
	//addClass removeClass	cssの適用、除外
	$("p").addClass("myStyle");
});

//タグの中身の操作
// text
// html
// val
// remove, empty
//文字列の変更(上書き)
$(function() {
	$("p").text("変更したい文字列");
});
//html属性の付与(文字列も上書き)
$(function() {
	$("p").html("<a href = "">click me!</a>");
});
//value属性の値の取得/付与
$(function() {
	console.log($("input").val());		//値の取得
	$("input").val("付与する値");		//値の付与
});
//要素を空にする(empty)/失くす(remove)
$(function() {
	$("p").empty();			//要素自体は残る(空要素として)
});
$(function() {
	$("p").remove();		//要素ごと消す
});