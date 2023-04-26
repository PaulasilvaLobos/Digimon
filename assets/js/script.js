var url = "https://digimon-api.vercel.app/api/digimon"

var contenido = document.querySelector("#contenido")

fetch(url)
.then(response => response.json())
.then(datos => {
    console.log(datos)

    for (item of datos){

    contenido.innerHTML += `
    <div class="tarjeta">
        <div class="card" style="width: 10rem;">
        <img src="${item.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.level}</p>
          <a href="" class="btn btn-primary">Soy un Digimon</a>
        </div>
        </div>
    </div>    
    `

}

})
const miBoton = document.getElementById("miBoton");

miBoton.addEventListener("mouseover", function() {
  this.style.backgroundColor = "blue";
});


miBoton.addEventListener("mouseout", function() {
  this.style.backgroundColor = "";
});

const miVentana = document.getElementById("miVentana");
const cerrarVentana = document.getElementById("cerrarVentana");


cerrarVentana.addEventListener("click", function() {
  miVentana.style.display = "none";
});


miVentana.style.display = "block";

/*

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

*/