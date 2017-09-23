
$("#gif").on("click", function(){
	var state = $(this).attr("data-state");

	if (state === "still") {
		$(this).attr("src", $(this).attr("data-animate"));
		$(this).attr("data-state", "animate");
	}
	else{
		$(this).attr("src", $(this).attr("data-still"));
		$(this).attr("data-state", "still");	
	}
});


$("#add-character").on("click", function(event){
	event.preventDefault();
	var character = $("addTo").val()
	var item = $("<p>");
	item.append(character);

	var jesse = $("<button>");

	jesse.attr("button-to-add", addButton);
	item = item.prepend(jesse);
	$("#box").append(item);


});
console.log(url);



$("#box").on("click", function(){
	var cartoon = $(this).attr("data-cartoon");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
        cartoon + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	
	.done(function(response){
		var results = response.data;

		for(var i=0; i < results.length; i++){
			var gifDiv = $("<div class = 'item'>" );

			var rating = results[i].rating;

			var p = $("<p>").text("Rating: " + rating);

			var cartoonImage = $("<img>");
			cartoonImage.attr("src", results[i].images.fixed_height.url);

			gifDiv.prepend(p);
			gifDiv.prepend(cartoonImage);

			$("#gifs").prepend(gifDiv);

		}
	// console.log("response", response);
	});


});
