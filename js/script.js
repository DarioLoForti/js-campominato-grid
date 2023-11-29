// aggiungo funzione che crea casella della griglia

function createCell(num){
    let element = document.createElement("div");
    element.classList.add("square");

    element.innerText = num;
    return element;
}

// recupero l'elemento dal file html che contiene la griglia

let grid = document.getElementById("grid");

// eseguo un ciclo for per la creazione di tutte le celle

for(i=1; i<=100; i++){
    let square = createCell(i);

    grid.appendChild(square);
    
}