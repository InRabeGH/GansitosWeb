
var $grid = $('.rejilla').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.separacion',
    percentPosition: true,
    masonry: {
        // use element for option
        columnWidth: '.rejilla-tamano'
    }
});

$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
});
$('#filtr-container').on( 'click', 'li', function(e) {
    e.preventDefault();
    $('#filtr-container li').removeClass('active');
    $(this).closest('li').addClass('active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});