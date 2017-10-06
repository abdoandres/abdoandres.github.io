var json = {
    "shoppingItem": [{
            "name": "Apostol",
            "name_descripcion": "Diseño,  Maquetacion",
            "modal_target_movil": "m-movil-apostol",
            "modal_target_desktop": "m-desktop-apostol",
            "link_site": "http://www.apostol.com.co/",
            "img_movil": "images/movil-img/movil-apostol.jpg",
            "img_desktop": "images/desktop-img/desktop-apostol.jpg",
            "images": "images/small-img/cuadro-apostol.jpg"
    }, {
            "name": "Papel planeta",
            "name_descripcion": "Maquetacion",
            "modal_target_movil": "m-movil-familia",
            "modal_target_desktop": "m-desktop-familia",
            "link_site": "",
            "img_movil": "images/movil-img/movil-familia.jpg",
            "img_desktop": "images/desktop-img/desktop-familia.jpg",
            "images": "images/small-img/cuadro-familia.jpg"
    }, {
            "name": "Applica",
            "name_descripcion": "Maquetacion",
            "modal_target_movil": "m-movil-applica",
            "modal_target_desktop": "m-desktop-applica",
            "link_site": "",
            "img_movil": "images/movil-img/movil-applica.jpg",
            "img_desktop": "images/desktop-img/desktop-applica.jpg",
            "images": "images/small-img/cuadro-applica.jpg"
    }, {
            "name": "Positivo Group",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-positivo",
            "modal_target_desktop": "m-desktop-positivo",
            "link_site": "http://www.positivogroup.com/",
            "img_movil": "images/movil-img/movil-positivo.jpg",
            "img_desktop": "images/desktop-img/desktop-positivo-2.jpg",
            "images": "images/small-img/cuadro-positivo.jpg"
    }, {
            "name": "El Astor",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-astor",
            "modal_target_desktop": "m-desktop-astor",
            "link_site": "https://www.elastor.com.co/",
            "img_movil": "images/movil-img/movil-astor.jpg",
            "img_desktop": "images/desktop-img/desktop-astor.jpg",
            "images": "images/small-img/cuadro-astor.jpg"
    }, {
            "name": "Frutos Rojos",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-frutosrojos",
            "modal_target_desktop": "m-desktop-frutosrojos",
            "link_site": "http://frutosrojos.com.co/",
            "img_movil": "images/movil-img/movil-frutosrojos.jpg",
            "img_desktop": "images/desktop-img/desktop-frutosrojos.jpg",
            "images": "images/small-img/cuadro-flutosrojos.jpg"
    }, {
            "name": "Buenautos",
            "name_descripcion": "Maquetacion",
            "modal_target_movil": "m-movil-buenautos",
            "modal_target_desktop": "m-desktop-buenautos",
            "link_site": "https://www.buenautos.com/",
            "img_movil": "images/movil-img/movil-buenautos.jpg",
            "img_desktop": "images/desktop-img/desktop-buenautos.jpg",
            "images": "images/small-img/cuadro-buenautos.jpg"
    }, {
            "name": "Sindominio",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-sindominio",
            "modal_target_desktop": "m-desktop-sindominio",
            "link_site": "",
            "img_movil": "images/movil-img/movil-sindominio.jpg",
            "img_desktop": "images/desktop-img/desktop-sindominio.jpg",
            "images": "images/small-img/cuadro-sindominio.jpg"
    }, {
            "name": "Dogman",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-dogman",
            "modal_target_desktop": "m-desktop-dogman",
            "link_site": "http://www.dogman.com.co/",
            "img_movil": "images/movil-img/movil-dogman.jpg",
            "img_desktop": "images/desktop-img/desktop-dogman.jpg",
            "images": "images/small-img/cuadro-dogman.jpg"
    }, {
            "name": "Tina & Tin",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "",
            "modal_target_desktop": "m-desktop-tinaytin",
            "link_site": "",
            "img_movil": "images/movil-img/movil-tinaytin.jpg",
            "img_desktop": "images/desktop-img/desktop-tinaytin.jpg",
            "images": "images/small-img/cuadro-tinaytin.jpg"
    }, {
            "name": "Edemfold",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-edemfold",
            "modal_target_desktop": "m-desktop-edemfold",
            "link_site": "http://www.edemfold.com/",
            "img_movil": "images/movil-img/movil-edemfold.jpg",
            "img_desktop": "images/desktop-img/desktop-edemfold.jpg",
            "images": "images/small-img/cuadro-edemfold.jpg"
    }, {
            "name": "Agyl Aseguramiento",
            "name_descripcion": "Diseño, Maquetacion",
            "modal_target_movil": "m-movil-agyl",
            "modal_target_desktop": "m-desktop-agyl",
            "link_site": "http://agylaseguramiento.com/",
            "img_movil": "images/movil-img/movil-agyl.jpg",
            "img_desktop": "images/desktop-img/desktop-agyl.jpg",
            "images": "images/small-img/cuadro-agyl.jpg"
    }]
};
var output = ""; // initialize it outside the loop
$.each(json.shoppingItem,function()
{
     output += '<div class="col-sm-6 col-lg-4 mb-4"> <div class="card card-portfolio "> <img class="card-img-top img-fluid" src="'+this.images+'" alt="'+this.name+'"> <div class="card-block"> <h4 class="card-title">'+this.name+'</h4>  <div class="card-ico"> <button type="button" class="btn-icoPort" data-toggle="modal" data-target="#'+this.modal_target_movil+'"> <i class="fa fa-mobile fa-lg"></i> </button> <button type="button" class="btn-icoPort" data-toggle="modal" data-target="#'+this.modal_target_desktop+'"><i class="fa fa-desktop "></i></button><a href="'+this.link_site+'"  target="_blank"  class="btn-icoPort link-bt"><i class="fa fa-link"></i> </a> </div><h6 class="card-subtitle mb-2 text-muted">'+this.name_descripcion+'</h6></div></div></div> ';
     output += ' <div class="modal fade" id="'+this.modal_target_movil+'" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true"> <div class="modal-dialog modal-sm modal-info" role="document"> <div class="modal-content"> <div class="modal-header"> <h5 class="modal-title" >'+this.name+'</h5> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> </div> <div class="modal-body"> <div class="cont-movil"> <div class="info-device"><img class="card-img-top img-fluid" src="'+this.img_movil+'" alt=""></div></div> </div> </div> </div> </div> ';
     output += '<div class="modal fade" id="'+this.modal_target_desktop+'" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true"><div class="modal-dialog modal-lg modal-info" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" >'+this.name+'</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> </div><div class="modal-body"><div class="cont-desktop"> <div class="info-device"><img class="card-img-top img-fluid" src="'+this.img_desktop+'" alt=""></div></div></div></div></div></div>';
});
$('.items-portafolio').append(output);
// oculta los iconos de informacion que no existe
if ($('.card-ico')) {
    $('a[href=""]').hide();
    $('button[data-target="#"]').hide();
}
/*
<div class="col-sm-6 col-lg-4 mb-4">
    <div class="card card-portfolio ">
        <img class="card-img-top img-fluid" src="'+this.images+'" alt="'+this.name+'">
        <div class="card-block">
            <h4 class="card-title">'+this.name+'</h4> 
            <div class="card-ico">
                <button type="button" class="btn-icoPort" data-toggle="modal" data-target="#'+this.modal_target-movil+'">
                    <i class="fa fa-mobile fa-lg"></i>
                </button>
                <button type="button" class="btn-icoPort" data-toggle="modal" data-target="#'+this.modal_target-desktop+'">
                    <i class="fa fa-desktop "></i>
                </button>
                <a href="'+this.link-site+'"  target="_blank"  class="btn-icoPort"><i class="fa fa-link"></i> </a> 
            </div>
            <h6 class="card-subtitle mb-2 text-muted">'+this.name_descripcion+'</h6>
        </div>
    </div>
</div>

<div class="modal fade" id="'+this.modal_target_movil+'" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-info" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >'+this.name+'</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="cont-movil"> <div class="info-device"><img class="card-img-top img-fluid" src="'+this.img_movil+'" alt=""></div></div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="'+this.modal_target_desktop+'" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-info" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >'+this.name+'</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="cont-movil"> <div class="info-device"><img class="card-img-top img-fluid" src="'+this.img_desktop+'" alt=""></div></div>
      </div>
    </div>
  </div>
</div>*/