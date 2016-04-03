console.log('working');

document.getElementById('clear').addEventListener('click', function(){
  document.getElementById('container').innerHTML = "";
});

var feedsBtn = document.getElementById('feedsBtn');

  feedsBtn.addEventListener('click', function (event){
  event.preventDefault();
  console.log('clicked');

  var userInput = document.getElementById('target').value;

  var feedsBtn = new XMLHttpRequest();
  feedsBtn.addEventListener('load', loadData);
  feedsBtn.open('GET', "https://www.reddit.com/r/" + userInput + ".json");

  feedsBtn.send();

  });


  function loadData() {

    var myObject = JSON.parse(this.responseText);

    // myData = myObject.data.children[1].data.subreddit;
    // document.getElementById('forumHeader').innerHTML = myData;

    var container = document.getElementById('container');
    var tempContainer = document.createDocumentFragment();

    for(var i = 1; i < 20; i++){
      var article = document.createElement('article');

      var contentHeader = document.createElement('header');
      var myTitle = myObject.data.children[i].data.title;


      var link = document.createElement('a');
      var myUrl = myObject.data.children[i].data.url;
      link.setAttribute('href', myUrl);
      link.innerHTML = myTitle;

      // article.appendChild(link);
      var image = document.createElement('img');


      if(myObject.data.children[i].data.preview !== undefined) {
        if (myObject.data.children[i].data.preview.images[0].source.length !== 0){
          var myImage = myObject.data.children[i].data.preview.images[0].source.url;
          image.setAttribute('src', myImage);
          article.appendChild(image);
        }
      } else{
        var subImage = "public/css/redditisfun.jpeg";
        image.setAttribute('src', subImage);
        article.appendChild(image);
      }

        article.appendChild(link);
      // var image = document.createElement('img');
      // var myImage = myObject.data.children[i].data.url+'.jpg';
      // image.setAttribute('src', myImage);

      // article.appendChild(image);

      // if(imgError(myImage)){
      // article.appendChild(image);
      // } else{
      // console.log('NOT FOUND');
      // }


      var author = document.createElement('div');
      author.className = 'author';
      var myAuthor = myObject.data.children[i].data.author;
      author.innerHTML = myAuthor;

      article.appendChild(author);


      tempContainer.appendChild(article);
    }
     container.appendChild(tempContainer);




  }

//   function imgError(image) {
//    if(image ===  )
//     return true;
// }