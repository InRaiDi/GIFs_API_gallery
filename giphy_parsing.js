var num_gifs=20;
var giphy_parsing = (function() {
    "use strict"
var loadGifs = (function (num_gifs) {
    
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

});

loadGifs(num_gifs);

// reloading the gifs without refreshing the page
 $("#refresh_button").click(function(){ 
            $( "#main_container" ).empty();
            loadGifs(num_gifs);
            console.log("reloaded");
        });

// loading more gifs without refreshing the page (due to API restrictions it'll upload up to 50 gifs)
 $("#load_more").click(function(){ 
            $( "#main_container" ).empty();
            num_gifs+=10;
            loadGifs(num_gifs);
            console.log("reloaded");
        });


});
$("document").ready(function () {
    giphy_parsing();
});

module.exports.giphy_parsing = giphy_parsing;
module.exports.loadGifs = loadGifs;


