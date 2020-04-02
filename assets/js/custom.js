/*
funcionalidad personalizada
*/
$(function() {
    $('#autoWidth').lightSlider({
        item:2,
        pager:false,
        enableDrag: false,
        keyPress:true,
        slideMargin:-6,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden')
        },
        responsive : [
            {
                breakpoint:700,
                settings: {
                    item:1,
                  }
            },
        ]
    })

})
