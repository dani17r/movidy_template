/*
funcionalidad personalizada
*/
$(function() {
    $('#autoWidth').lightSlider({
        item:2,
        pager:false,
        enableDrag: false,
        keyPress:true,
        // verticalHeight:300,
        slideMargin:-14,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden')
        },
        responsive : [
            {
                breakpoint:700,
                settings: {
                    item:1,
                    // verticalHeight:500,
                    // slideMove:1,
                    // slideMargin:6,
                  }
            },
        ]
    })

})
