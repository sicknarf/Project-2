const Response = require('../models/userResponse');

function newResponse(req, res) {
    // console.log('below is req params id')
    // console.log(req.params.id);
    res.render('./responses/new', {title: 'submit a response', requestId: req.params.id})
}

function createResponse(req, res){
    let requestId = req.params.id;
    req.body.request = requestId;
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
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

// function showResponse(req, res){
//     Response.findById(req.params.id, function(err, response){
//         Request.findById({request: response.request}, function(err, response) {
//             if (err) return res.render('./error', {error: err, message: 'oops'});
//             res.render('responses/show', {request, response, title: 'request details'});
//         })})
// }


// res.redirect(`/requests/${response.request}/${response.id}`)

module.exports = {
    new: newResponse,
    create: createResponse,
    show: showResponse,
}