// Filtra valores repetidos
const removerDuplicados = array =>{
    let array2 = [];
    array2 = array.reduce((acumulador, nomeAtual) => {
        if(acumulador.indexOf(nomeAtual) === -1){
            acumulador.push(nomeAtual);
        }
        return acumulador;
    }, []);
    return array2;
};