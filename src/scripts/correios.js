const axios = require('axios').default;

module.exports = async (code) => {
    await axios.get(`https://rastreamento.correios.com.br/app/resultado.php?objeto=${code}&mqs=S`)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}
