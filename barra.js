function mostrarSubitens(item) {
    const subitens = item.querySelector(".subitens");
    console.log(subitens)
        subitens.style.display = "block";
}

function esconderSubitens(item) {
    const subitens = item.querySelector(".subitens");
    subitens.style.display = "none";
}

function mostrardeslogar(item) {
    const deslogar = item.querySelector(".deslogar");
    
        deslogar.style.display = "block";
}

function esconderdeslogar(item) {
    const deslogar = item.querySelector(".deslogar");
    deslogar.style.display = "none";
}