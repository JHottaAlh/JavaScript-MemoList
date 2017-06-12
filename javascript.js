/**
 * javascript メモ
 */
//参考URL
/*	JavaScript-MDN(MozillaDeveloperNetwork)
 *	https://developer.mozilla.org/ja/docs/Web/JavaScript
 * 
 */


//関数
function 関数名() {
	処理;
	return 戻り値;	//戻り値は必要な時だけつければいい
}

//無名関数、匿名関数
var 変数名 = function(引数){
	処理;
	return 戻り値; //必要なときだけ戻り値をつける
};					//変数名として関数を宣言するので;をつけるのを忘れないようにする

//即時関数(宣言した直後に実行可能)　ローカル変数の保守性を高める
(function(引数){
	処理;
})(引数);				//全体を()で括って直後に(引数)



/*
	タイマー処理
		setInterval	一定時間ごとに処理を繰り返す
		前の処理が正常に終わったかを確かめず繰り替えす→クラッシュの恐れあり
		
		setTimeout	一定時間後に一回だけ処理をする
		前の処理が終わったのを確認してから処理を実行する→安全
*/
//一秒ごとにカウントを足していくfunction
var i = 0;
function show(){
	console.log(i++);
}
setInterval(function(){
	show();
}, 1000);

//setTimeoutで繰り返しを実現する方法
var i = 0;
function show() {
	console.log(i++);
	var tid = setTimeout(function(){
		show();		//show関数の中でshow関数を呼ぶ
	}, 1000);
	if(i < 3) {
		clearTimeout(tid);	//tidが3になった段階でsetTimeoutを終了させる
	}
}
show(); //最初の一回目を呼び出す


/*
 * オブジェクトとメソッド
 * 		名前(キー)と値
 */

var user = {
		email:"mapletea.iccha@gmail.com",	//プロパティ
		score: 80,
		greet: function(name){				//オブジェクトの中の関数をメソッドという
			console.log("hello," + name + "from" + this.email);		//thisを使ってプロパティを参照できる
		}
};
console.log(user["email"]);
console.log(user.email);	//記述方法はどちらでもいい

user.score = 100;
console.log(user);	//格納されているプロパティを出力
user.greet("Tom");

/*
 * 組み込みオブジェクト
 * - String
 * - Array
 * - Math
 * - Date
*/

//String	javascriptMDNで機能は見ることが出来る
var s = new String("taguchi");
var s = "taguchi";					//記述はどちらでも可。下は文字列リテラルという。
	
console.log(s.length);
console.log(s.replace("t","T"));

//Array
var a = new Array(100, 300, 600);
var a = [100, 300, 500];

console.log(a.length);
//unshift -> array <- push
//shift <- array -> pop
a.push(500);	//末尾に要素を追加する

//Math	数学的な機能が網羅されているのでMDNで機能は見よう
console.log(Math.PI);	//円周率

//Date	基本はMDN
var d = new Date();
var d = new Date(2014, 04, 11, 17, 49, 20);	//2014年4月11日17:49:20
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getTime()); //1970/1/1からの経過ミリ秒

//DOM	Document Object Model
console.log(window.outHeight);	//ブラウザウィンドウの高さをpx単位で出力
window.location.href = 'サイトのURL';	