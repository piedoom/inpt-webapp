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

  //UX for clicking editable areas
  $('.editList').hover(function(){
    $(this).css('cursor','pointer');
  });

  $('.editList').click(function(){
    //in order to get the cursor at the end of the textarea, we need to reset the form.
    //this may pose a problem in the future
    //original = $(this).find('textarea').val();
    $(this).find('textarea').focus();
    //$(this).find('textarea').val('');
    //$(this).find('textarea').val(original);
  });

  //adding active classes to selected objects
  //"rem" is the class that all other active classes should be removed from
  function activate(el,rem){
    if (!el.hasClass('active')){
      if (typeof rem !== 'undefined'){
        rem.removeClass('active');
      }
      el.addClass('active');
    }
  }

  $('.editList').click(function(){
    activate($(this),$('.editList'));
  });




      function FitToContent(id, maxHeight)
    {
      var text = id && id.style ? id : document.getElementById(id);
      if ( !text )
        return;

    /* Accounts for rows being deleted, pixel value may need adjusting */
    if (text.clientHeight == text.scrollHeight) {
      text.style.height = "30px";
    }

    var adjustedHeight = text.clientHeight;
    if ( !maxHeight || maxHeight > adjustedHeight )
    {
      adjustedHeight = Math.max(text.scrollHeight, adjustedHeight);
      if ( maxHeight )
        adjustedHeight = Math.min(maxHeight, adjustedHeight);
        if ( adjustedHeight > text.clientHeight )
          text.style.height = adjustedHeight + "px";
        }
      }

    $('textarea').on('input',function()
    {
      FitToContent(this, 300);
    });

    $('textarea').each(function(){
      FitToContent(this, 300);
    });



});
