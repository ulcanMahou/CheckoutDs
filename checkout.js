function pix(preco, frete){
    let prodval = (Number(preco) + Number(frete))*0.90
    document.getElementById("total").innerHTML = "Total: R$" + prodval.toFixed(2)
}

function dinheiro(preco, frete){
    let prodval = (Number(preco) + Number(frete))*0.95
    document.getElementById("total").innerHTML = "Total: R$" + prodval.toFixed(2)
}
        
function cardVista(preco, frete){
    let prodval = Number(preco) + Number(frete)
    document.getElementById("total").innerHTML = "Total: R$" + prodval.toFixed(2)
}

function cardParcelado(preco, frete){
    let prodval = (Number(preco) + Number(frete))*1.05
    document.getElementById("total").innerHTML = "Total: R$" + prodval.toFixed(2)
}