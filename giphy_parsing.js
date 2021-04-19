var num_gifs=20;
var loadGifs = (function (num_gifs) {
    "use strict"

    $('#main_container').addClass('hidden'); //hiding gifs at first to show the loader
    $('.loader').removeClass('hidden'); // in case the page is being refreshed


    setTimeout(function() {
      $('.loader').addClass('hidden');
      $('#main_container').removeClass('hidden');

    // getting data
   var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=jX4avpPN5rTB9wXq9lVszyjXo6LD97nq&limit="+num_gifs);
        xhr.done(function(response) { 
        console.log("success got data", response);

                //display each gif
                for (var i=0; i<Object.keys(response.data).length; i++){
                            var gifBlock = $("<div>"); 
                            gifBlock.addClass("gifBlock");
                       
                            //gif image itself
                            var gifImg = $("<img>");
                            gifImg.attr("src", response.data[i].images.fixed_height.url);
                            gifImg.addClass("gif_img");
                            gifBlock.append(gifImg);

                            //gif title
                            var gifTitle = $("<div>").append( response.data[i].title); 
                            gifTitle.addClass("gifTitle");
                            gifBlock.append(gifTitle);


                            $("#main_container").append(gifBlock);
                             gifBlock.wrap( "<a href="+response.data[i].url+ "></a>" );
                        }

           
        });

    }, 1500);


// reloading the gifs without refreshing the page
    $("#refresh_button").click(function(){ 
        refresh();
    });

    // loading more gifs without refreshing the page (due to API restrictions it'll upload up to 50 gifs)
    $("#load_more").click(function(){ 
                load_more();
    });

});

var load_more=(function () {
    $( "#main_container" ).empty();
    num_gifs+=10;
    loadGifs(num_gifs);
    console.log("loaded more");

});
var refresh=(function () {
    $( "#main_container" ).empty();
    loadGifs(num_gifs);
    console.log("reloaded");

});


$("document").ready(function () {
    loadGifs(num_gifs);
});
module.exports.loadGifs = loadGifs;
module.exports.load_more = load_more;
module.exports.refresh = refresh;

