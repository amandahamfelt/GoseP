window.onload = function(){
 
document.getElementById('filter').addEventListener("click", applyFilter);
$( ".filter" ).click(function() {
alert( "Handler for .click() called on:" + this.id);
});
}

function applyFilter(){
    //alert();
    var canvas=document.getElementById("drawing"); // grabs the canvas element
    var context=canvas.getContext("2d"); // returns the 2d context object

    var imgData = context.getImageData(0,0,canvas.width, canvas.height);
    for (var i = 0; i < imgData.data.length; i+=4) {
        imgData.data[i]=255-imgData.data[i];
        imgData.data[i+1]=255-imgData.data[i+1];
        imgData.data[i+2]=255-imgData.data[i+2];
        /*imgData.data[i+3]=255;*/
    };
    context.putImageData(imgData,0,0);
}

function readURL(input) { console.log('readURL');
        if (input.files && input.files[0]) {
            var reader = new FileReader();
             
            reader.onload = function (e) { console.log(e);
                var canvas=document.getElementById("drawing"); // grabs the canvas element
                var context=canvas.getContext("2d"); // returns the 2d context object

                var img = new Image(); //creates a variable for a new image
                img.src= e.target.result; // specifies the location of the image
                console.log(img);
                img.onload = function(){
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img,0,0); 
                console.log('width' + img.width);}
                

            };
console.log('klar');    
            reader.readAsDataURL(input.files[0]);      
    }
}

Filters = {};


Filters.getPixels = function(img) {
  var c = this.getCanvas(img.width, img.height);
  var ctx = c.getContext('2d');
  ctx.drawImage(img);
  return ctx.getImageData(0,0,c.width,c.height);
};

Filters.getCanvas = function(w,h) {
  var c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
};






