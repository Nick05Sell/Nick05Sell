frase = document.querySelector(".frase")

function aleatorio(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

switch(aleatorio(0,5)){
    case 0: 
        frase.innerHTML = "Hola mundo";
        break;
    case 1: 
        frase.innerHTML = "Como centrar un div";
        break;
    case 2: 
        frase.innerHTML = "Hola soy un porcentaje!";
        break;
    case 3: 
        frase.innerHTML = "Scrollear hacía la derecha esta muy mal!!";
        break;
    case 4: 
        frase.innerHTML = "No programes para solucionar problemas, sino que para crear soluciones";
        break;
    case 5: 
        frase.innerHTML = "Constancia > Talento";
        break;
}

