/*
・HTMLドキュメントが読み込み完了したときに「loadイベントが発生しました」とコンソールに出力する
　 イベントload


・画面をスクロールしたときに「scrollイベントが発生しました」とコンソールに出力する
   イベントscroll

参考コード　$(window).on(イベント, () => {});
*/


$(window).on("load", () => {
    console.log("loadイベントが発生しました");

    $(window).on("scroll", () => {
        console.log("scrollイベントが発生しました");
    });
});




