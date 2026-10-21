const barra = document.getElementById('barra');
const botonBusqueda = document.getElementById('boton_busqueda');


function busqueda (){
    let texto = barra.value;
    window.location.href = `https://google.com/search?q=${texto}`;
}

botonBusqueda.addEventListener('click', busqueda);

barra.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        busqueda();
    }
})