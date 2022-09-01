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
        res.render('responses/show', {response, avg: averageRatings(response.ratings), title: 'a picture for your request!'});
        })
}

function averageRatings(array){
    let avg = 0;
    array.forEach((r)=>{
        avg = avg + r.rating
    })
    return (avg/array.length).toFixed(2)
}

function deleteResponse(req, res) {
    Response.findOne({'response._id': req.params.id})
        .then(function(response){
            response.remove()
            .then(function(){
                res.redirect(`/requests`)
            }).catch(function (error){
            return next(error)
            })})
}

module.exports = {
    new: newResponse,
    create: createResponse,
    show: showResponse,
    delete: deleteResponse,
}