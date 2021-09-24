const axios = require('axios').default;
const formatter = require('./formatter');

module.exports = async (code, ctx) => {
    axios.get(`https://rastreamento.correios.com.br/app/resultado.php?objeto=${code}&mqs=S`)
        .then(response => {
            if (response.data.erro == true) {
                ctx.reply("Pacote não encontrado na base de dados dos Correios");
                return;
            }
            let obj = formatter(response.data);
            obj.then(objFormated => {
                ctx.reply(objFormated);
            })
        })
        .catch(error => {
            console.log(error);
        });
}
