$(function(){
  //test here - the real script will fetch the backend script
  //these are test objects

  function Tree (title,folders){
    this.title = title;
    this.folders = folders;
  }

  objlist = [
  new Tree('home',['mission statement','synopsis']),
  new Tree('about'),
  new Tree('gallery')
  ];

  for (var a in objlist){
    $('#leftColumn').append(
      '<div class="list"><div class="item">' + objlist[a].title + '</div></div>'
    );
    for (var b in objlist[a].folders){
      //print out each folder to console
      console.log(objlist[a].folders[b]);
      $('#leftColumn').append(
        '<div class="list"><div class="item" style="background: grey;">' + objlist[a].folders[b] + '</div></div>'
      );
    }
  }

});
