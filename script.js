//your code here
$(document).ready(function() {
    var parent = document.getElementById("parent");

    // Make all divs with class 'image' draggable
    $('.image').draggable({
        helper: 'clone',
        stop: function(event, ui) {
        }
    });

    // Make all divs with class 'image' droppable
    $('.image').droppable({
        drop: function(event, ui) {
            var draggable = ui.draggable;
            var droppable = $(this);
            var dragBg = draggable.css('background-image');
            var dropBg = droppable.css('background-image');
            draggable.css('background-image', dropBg);
            droppable.css('background-image', dragBg);
        }
    });
});
