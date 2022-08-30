const Request = require('../models/userRequest');
const Response = require('../models/userResponse');

function newResponse(req, res) {
    // console.log('below is req params id')
    // console.log(req.params.id);
    res.render('./responses/new', {title: 'submit a response', requestId: req.params.id})
}

function createResponse(req, res){
    let requestId = req.params.id;
    req.body.request = requestId;
    Response.create(req.body, function (err, response){
        res.redirect(`/requests/${requestId}`)
    })
}

module.exports = {
    new: newResponse,
    create: createResponse
}