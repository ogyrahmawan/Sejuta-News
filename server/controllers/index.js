const axios = require('axios')
class Controllers {
    static getNews (req, res) {
        axios({
            url: 'https://today.line.me/id/portaljson',
            method: 'GET'
        })
        .then(resp => {
            res.status(200).json(resp.data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}

module.exports = Controllers