	// getting data
	var xhr = $.get("http://api.giphy.com/v1/gifs/trending?api_key=jX4avpPN5rTB9wXq9lVszyjXo6LD97nq&limit=15");
	xhr.done(function(response) { 
		console.log("success got data", response);


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


