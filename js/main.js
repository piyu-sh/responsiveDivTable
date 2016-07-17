$(function () {
    $("div.row.childRow").hide();
    $(".table").click(function (event) {
        event.stopPropagation();
        var $target = $(event.target);
        $target.closest(".row").find(".childRow").slideToggle(0);
    });

    $('.table').on('scroll', function () {
        if ($(window).width > 640) {
            $(".table > *").width($(".table").width() + $(".table").scrollLeft());
        }
    });
});

// to scroll header alongwith body
$(document).ready(function () {
    setTableHeadWidth();
    $(window).resize(setTableHeadWidth);
    $(".table").scroll(function () {
        $(".table-head").offset({ left: -1 * this.scrollLeft });
    });
});


// to set accurate width of header 
function setTableHeadWidth() {
    var tableHeadChildren = $(".table-head>*");
    var tableHeadCopyChildren = $(".table-head-copy>*");
    $.each(tableHeadChildren, function (index, element) {
        $(element).css({ "min-width": $(tableHeadCopyChildren[index]).outerWidth() });
    });
}


