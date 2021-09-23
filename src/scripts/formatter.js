async function formatText(data) {
    var moves = "Codigo do objeto: " + data.codObjeto + "\n\n";

    let count = Object.keys(data.eventos).length;
    for (let i = 0; i < count; i++) {
        moves = moves + data.eventos[i].dtHrCriado;
        moves = moves + " " + data.eventos[i].descricao + " | de";
        moves = moves + " " + data.eventos[i].unidade.nome + " " + data.eventos[i].unidade.endereco.uf + " -";
        moves = moves + " " + data.eventos[i].unidade.tipo + " para";
        // is necessary because some packages are posted to be shipped another day
        if (i != count - 1) {
            moves = moves + " " + data.eventos[i].unidadeDestino.nome + " " + data.eventos[i].unidadeDestino.endereco.uf + " -";
            moves = moves + " " + data.eventos[i].unidadeDestino.tipo;
        }
        moves = moves + "\n\n";
    }

    return moves;
}

module.exports = async (data) => {
    let formatedJson = await formatText(data);
    return formatedJson;
}
