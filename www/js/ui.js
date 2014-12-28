$(function(){

  resize();
  $(window).resize(function(){
    resize();
  });

  function resize(){
    w = $(window);
    lc = $('#leftColumn');
    ma = $('#mainContainer');
    rc = $('#rightColumn');

    //set the width of the editable column
    rc.outerWidth( ma.width() - lc.width() );

    //set the width of the left column to create some margin
    //margin here is lcmargin
    lcmargin = 16;
    lc.width( $('.item').outerWidth() + lcmargin );
  }


});
