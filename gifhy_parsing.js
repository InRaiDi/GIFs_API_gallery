	// getting data
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=the+office&api_key=jX4avpPN5rTB9wXq9lVszyjXo6LD97nq&limit=5");
	xhr.done(function(response) { 
		console.log("success got data", response);
	});

