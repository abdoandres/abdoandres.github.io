var json = {
    "shoppingItem": [{
        "name": "LG Tone",
            "model_no": "HBS-730",
            "title": "Bluetooth Stereo",
            "development": "�45.00",
            "stock": 10,
            "images": "images/small-img/apostol.jpg"
    }, {
        "name": "NoiseHush",
            "model_no": "NX22",
            "title": "Wired Headphones",
            "development": "�69.95",
            "stock": 10,
            "images": "images/small-img/papel_planeta-cuadro.jpg"
    }, {
        "name": "NoiseHush",
            "model_no": "NX80",
            "title": "Earphones",
            "development": "�25.00",
            "stock": 10,
            "images": "images/small-img/positivo-cuadro.jpg"
    }, {
        "name": "Motorola MOTOROKR",
            "model_no": "S305",
            "title": "Bluetooth Stereo",
            "development": "£35.00",
            "stock": 10,
            "images": "images/small-img/aplica-cuadro.jpg"
    }]
};
var output = ""; // initialize it outside the loop
$.each(json.shoppingItem,function()
{
    output += ' <div class="col-sm-6 col-lg-4 mb-4"><div class="card h-100 text-center"> <img class="card-img-top img-fluid" alt ="'+this.name+'" src="'+this.images+'" alt=""><div class="card-block"><h4 class="card-title">'+this.title+'</h4><h6 class="card-subtitle mb-2 text-muted">'+this.development+'</h6> <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.</p></div><div class="card-footer"><a href="#">name@example.com</a></div></div></div>';
});
$('.items-portafolio').append(output);