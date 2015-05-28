var up_key = 38;
var right_key = 39;
var down_key = 40;
var left_key = 37;
$(function(){
    var next_href = $("#next").attr("href");
    var prev_href = $("#prev").attr("href");

    $('html').keydown(function(e){
        if( e.keyCode == right_key) {
            if ( next_href !== undefined) {
                window.location = next_href;
            }
        } else if (e.keyCode == left_key) {
            if ( prev_href !== undefined) {
                window.location = prev_href;
            }
        } else {
            keyControls(e.keyCode);
        }
    });
});

