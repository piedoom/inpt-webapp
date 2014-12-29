<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <!-- css -->
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" type="text/css" href="/css/reset.css">
    <link rel="stylesheet" type="text/css" href="/css/main.css">
    <!-- fonts -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,700' rel='stylesheet' type='text/css'>
    <!-- jQuery -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="/js/velocity.min.js"></script>
    <script src="/js/velocity.ui.min.js"></script>
    <script src="/js/waypoints.min.js"></script>
    <script src="/js/ui.js"></script>
    <script src="/js/generation.js"></script>

  </head>
  <body>
    <!-- header -->
    <header>
      <!--inpt logo -->
      <img src="/img/logo.png"/>
    </header>

    <!-- centered div containing editable stuff -->
    <div id="mainContainer">
      <!-- left column containing selections -->
      <div id="leftColumn">
        <!-- list contains a full part of the tree -->
      </div>

      <!--div containing editable stuff -->
      <div id="rightColumn">
        <div class="editList">
          <h1 class="editListHeader">home</h1>
          <textarea class="editable">
This is some text showing about how inpt's divs will expand to a certain size before showing a scrollbar, so it won't take up too much space.
For instance, if you were doing a menu, and you needed a newline each time, you could do:
This
is
an
example
of
a
menu
here
are
some
more
items
before
it
collapses
          </textarea>
      </div>

    <div class="editList">
      <h1 class="editListHeader">content</h1>
      <textarea class="editable">
However, smaller items do not require a scrollbar, but can extend the div to a point
      </textarea>
    </div>

    </div>

  </body>
</html>
