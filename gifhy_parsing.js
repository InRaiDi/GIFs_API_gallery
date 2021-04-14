	// getting data
	var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=jX4avpPN5rTB9wXq9lVszyjXo6LD97nq&limit=10");
	xhr.done(function(response) { 
		console.log("success got data", response);


for (var i=0; i<Object.keys(response.data).length; i++){
            var gifBlock = $("<div>"); 
            gifBlock.addClass("gifBlock");
       
            var gifImg = $("<img>");
            gifImg.attr("src", response.data[i].images.fixed_height.url);
            gifImg.addClass("gif_img");
            gifBlock.append(gifImg);

            $("#main_container").append(gifBlock);
        }


	});


