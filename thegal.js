

	
	var display_ray = [];

	//main function
	$(document).ready(function(){

		var big1, big2,big3, big4, big5, thumb1, thumb2, thumb3, thumb4, thumb5, image1, image2, image3, image4, image5;
		//big will refer to large rendering of images
		//thumb is thumbnail settings
		//image will be image objects value assigned

		//takes height, width, ID, source
		thumb1 = makeDisplay('150px', '150px', 'i-1', 'apple.jpg');
		thumb2 = makeDisplay('150px', '150px', 'i-2', 'orange.jpg');
		thumb3 = makeDisplay('150px', '150px', 'i-3', 'banana.jpg');
		thumb4 = makeDisplay('150px', '150px', 'i-4', 'drop.jpg');
		thumb5 = makeDisplay('150px', '150px', 'i-5', 'candy.jpg');


	   big1 = makeDisplay('300px', '300px', 'k-1', 'apple.jpg');
	   big2 = makeDisplay('300px', '300px', 'k-2','orange.jpg');
	   big3 = makeDisplay('300px', '300px', 'k-3', 'banana.jpg');
	   big4 = makeDisplay('300px', '300px', 'k-4', 'drop.jpg');
	   big5 = makeDisplay('300px', '300px', 'k-5', 'candy.jpg');

			//loaded with thumbnail, title, big, price
		image1 = new makeGalleryObj(thumb1, "A Dog's Life", big1, 100.39);
		image2 = new makeGalleryObj(thumb2, "This Dog Love", big2, 250.23);
		image3 = new makeGalleryObj(thumb3, "Who Left the Dogs Out", big3, 200.59);
		image4 = new makeGalleryObj(thumb4, "Dog or Cat", big4, 1000.73);
		image5 = new makeGalleryObj(thumb5, "Best In Show", big5, 130.55);

		display_ray = [image1, image2, image3, image4, image5];

		for (var i = 0; i < 5; i++){
			var div_2_display = document.getElementById("div_2_display");
			div_2_display.appendChild(display_ray[i].thumbnail);
		}
	});


$(document).ready(function(){
  $("img").mouseover(function(){
  		//var large = document.createElement("img");
		var large_source = showDisplay(display_ray, $(this).attr("id"));
   		console.log(large_source);
	    //var display_large = $(large).hide();
	    var image;
	    switch (large_source)
	    {
	    	case "file:///Users/ruthieblock/Desktop/apple.jpg":
	    	image = display_ray[0].big;
	    	break;

	    	case "file:///Users/ruthieblock/Desktop/orange.jpg":
	    	image = display_ray[1].big;
	    	break;


	    	case "file:///Users/ruthieblock/Desktop/banana.jpg":
	    	image = display_ray[2].big;
	    	break;


	    	case "file:///Users/ruthieblock/Desktop/drop.jpg":
	    	image = display_ray[3].big;
	    	break;


	    	case "file:///Users/ruthieblock/Desktop/candy.jpg":
	    	image = display_ray[4].big;
	    	break;

	    }
		 $("#bigs").append(image);
	     $("#bigs").stop().fadeTo('slow',1);
  });

  	$("img").mouseout(function(){
  		$("#bigs").stop().fadeTo('slow',0);
  	    $("#bigs").empty();
  });
});

$(document).ready(function(){
  $("img").click(function(){
  	var cost;
	var formalTitle;

  	var info_source = showDisplay(display_ray, $(this).attr("id"));
  	switch (info_source)
	    {
	    	case "file:///Users/ruthieblock/Desktop/apple.jpg":
	    	cost = display_ray[0].price;
	    	formalTitle = display_ray[0].title;
	    	break;

	    	case "file:///Users/ruthieblock/Desktop/orange.jpg":
	    	cost = display_ray[1].price;
	    	formalTitle = display_ray[1].title;
	    	break;


	    	case "file:///Users/ruthieblock/Desktop/banana.jpg":
	    	cost = display_ray[2].price;
	    	formalTitle = display_ray[2].title;
	    	break;


	    	case "file:///Users/ruthieblock/Desktop/drop.jpg":
	    	cost = display_ray[3].price;
	    	formalTitle = display_ray[3].title;
	    	break;


	    	case "file:///Users/ruthieblock/Desktop/candy.jpg":
	    	cost = display_ray[4].price;
	    	formalTitle = display_ray[4].title;
	    	break;

	    }
	 var infoString = "Price: $" + cost + "<br/> Title: " + formalTitle; 
	document.getElementById("info").innerHTML = infoString;
    $("#info").fadeIn();
    $("#info").delay(5000).fadeOut('slow');
    });
});

function makeGalleryObj(thumbnail, title, big, price){
	this.thumbnail = thumbnail;
	this.title = title;
	this.price = price;
	this.big = big;
}

function makeDisplay(height, width, id, src){
	var pic = document.createElement('img');

	pic.setAttribute('src', src);
	pic.setAttribute('height', height);
	pic.setAttribute('width', width);
	pic.setAttribute('id', id);

	return pic;
}

function showDisplay(ray, id){
	for (var i = 0; i < 5; i++)
	{
		if (id == ray[i].thumbnail.id)
	//ex. "apple.jpg.. but tis long"
	return ray[i].big.src;
	}
}





