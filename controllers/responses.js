const Response = require('../models/userResponse');
const Request = require('../models/userRequest');

function newResponse(req, res) {
    Request.findById(req.params.id, function(err, request){
        res.render('./responses/new', {title: 'submit a response', requestId: req.params.id, request})
    })
}

function createResponse(req, res) {
    const response = new Response(req.body);
    response.request = req.params.id;
    response.user = req.user._id;
    response.userName = req.user.name;
    response.userAvatar = req.user.avatar;
    response.save(function(err) {
    if (err) return res.render('./error', {error: err, message: 'oops'});
    res.redirect(`/requests/${response.request}`);
    });
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
    Response.findById(req.params.id)
        .then(function(response){
            let requestId = response.request;
            response.remove()
            .then(function(){
                res.redirect(`/requests/${requestId}`)
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