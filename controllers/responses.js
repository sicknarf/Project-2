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

function showResponse(req, res){
    Response.findById(req.params.id, function(err, response){
        if (err) return res.render('./error', {error: err, message: 'oops'});
        res.render('responses/show', {response, title: 'a picture for your request!'});
        })
}

// function showResponse(req, res){
//     Response.findById(req.params.id, function(err, response){
//         Request.findById({request: response.request}, function(err, response) {
//             if (err) return res.render('./error', {error: err, message: 'oops'});
//             res.render('responses/show', {request, response, title: 'request details'});
//         })})
// }


module.exports = {
    new: newResponse,
    create: createResponse,
    show: showResponse,
}