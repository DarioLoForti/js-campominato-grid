// aggiungo funzione che crea casella della griglia

function createCell(num){
    let element = document.createElement("div");
    element.classList.add("square");

    element.innerText = num;
    return element;
}

