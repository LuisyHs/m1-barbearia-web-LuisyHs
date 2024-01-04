const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
        let counter = 0;
        let exist = -1;
        while(counter<barbearia.cortes.length){
            if(barbearia.cortes[counter].id == id){
                exist = counter;
            }
            counter++;
        }

        if(exist>=0){
            return barbearia.cortes[exist];
        }else{
            return "Corte não encontrado";
        }

}

function buscaBarbaPorId(id) {
    let exist = -1;
    for(i=0;i<barbearia.barbas.length;i++){
        if(barbearia.barbas[i].id == id){
            exist = i;
        }
    }

    if(exist>=0){
        return barbearia.barbas[exist];
    }else{
        return "Barba não encontrada";
    }
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
        return ("Estamos abertos");
    }else{
        return ("Estamos fechados");
    }
}


function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const pedido = {
        nome: nomeCliente,
        pedidoCorte: buscaCortePorId(corteId).tipo,
        pedidoCortePreco: buscaCortePorId(corteId).valor,
        pedidoBarba: buscaBarbaPorId(barbaId).tipo,
        pedidoBarbaPreco: buscaBarbaPorId(barbaId).valor,
    }
    return pedido;
}

const cortes = [
    { id: 1, tipo: "Militar", valor: 20 },
    { id: 2, tipo: "Samurai", valor: 35 },
    { id: 3, tipo: "Pompadour", valor: 20 },
    { id: 4, tipo: "Moicano", valor: 10 },
    { id: 5, tipo: "Razor part", valor: 5 },
]



function atualizarServico(lista, id, valor, tipo) {
    for(i=0;i<lista.length;i++){
        if(lista[i].id == id){
            lista[i].tipo = tipo;
            lista[i].valor = valor;
            return lista;
        }
    }
}




function calculaTotal(pedido) {
    return (pedido.pedidoCortePreco + pedido.pedidoBarbaPreco);
}
  

