
document.getElementById("toggle").onclick = () =>{
   document.getElementById("blockItems").classList.toggle("open");
   document.getElementById("toggle").classList.toggle("close");
}

function cargarDatosPortafolio(){

   fetch('Recursos/Datos/Datos.json')
       .then(function(respuesta){          
           return respuesta.json();
       }).then(function(datos){  

         let html= '';          
         datos.portafolios.forEach(element => {
           html += `
           <div class="product-card" id="producto">
            <div class="card">
                <div class="img">
                    <img src="./Recursos/Img/Productos/${element.img}" alt="${element.alt}" >
                </div>
                <h2>${element.nombre}</h2>
                <p>${element.parrafo}</p>
                <span>${element.valor}</span>
            </div>
        </div>
           `
         });

         //Cargo los trabajos en el listados
         document.getElementById("producto").innerHTML = html;
         
       }).catch(function(error){
         document.getElementById("producto").innerHTML = '<p>De momento no hay trabajos</p>';
       })
}
document.addEventListener('DOMContentLoaded',function(){
 cargarDatosPortafolio();  
})






// aaqsqs
function openFulImg(reference){
  fulImgBox.style.display = "flex";
  fulImg.src = reference
}
function closeImg(){
  fulImgBox.style.display = "none";
}