/*

1	「文字色変化」ボタンを押した際に、文字色が任意の色に更新されている ok
2	「文字内容変化」ボタンを押した際に、任意の文字内容に更新されている　ok
3	「フェードアウト」ボタンを押した際に、フェードアウトで文字が消える ok
4	「フェードイン」ボタンを押した際に、フェードインで文字が現れる ok

*/

$ (function(){
    $("#change-color").on("click", function(){
        $("#target").css("color", "#c71585");
    });

    $("#change-text").on("click", function(){
        $("#target").text("Hello");
    });

    $("#fade-out").on("click", function(){
        $("#target").fadeOut();
    });

    $("#fade-in").on("click", function(){
        $("#target").fadeIn();
    });

});