let boton = document.querySelector("button");
let input = document.querySelector("input")

boton.addEventListener("click", function () {
    let ciudad = input.value;
    cargarCiudad(ciudad);
    input.value = "";
  });

function cargarCiudad(ciudad) {

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=1f0a98b88d112d2d2c0e599fcf12b457&units=metric&lang=es", function (data) {

        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").innerHTML= (data.main.temp) +"<sup>°C</sup>";
        document.querySelector("#wicon"). src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        document.querySelector("#descripcion").textContent = data.weather[0].description;
    }
    )
        .fail(function() {
        alert("Ciudad no encontrada");
});
}

