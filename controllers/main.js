const mainServices = require('../services/main')

exports.ping = (() =>{
    return {response: 'ping'}
});

exports.main = (req, res) => {
    return mainServices.main(req)
    .then((response) => {
        return response;
    }).catch(err => {
        return err;
    });
};