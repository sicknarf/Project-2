const Request = require('../models/userRequest');
const Response = require('../models/userResponse');
// const Category = require('../models/category');

function index(req, res) { // not yet working
    Request.find({}, function(err, requests) {
        if (err) return res.redirect('/');
        res.render('./requests/index', {requests, title: 'home'})
    })
}

function newRequest(req, res) {
    res.render('requests/new', { title: 'new request form'})
}

function createRequest(req, res) {
    const request = new Request(req.body);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    request.save(function(err) {
    // if (err) return res.render('./error', {error: err, message: 'oops'});
    if (err) return res.render('requests/new', { title: 'new request form'});
    res.redirect('/requests');
    });
}

function show(req, res){
    Request.findById(req.params.id, function(err, request){
        console.log(request);
        console.log('ABOVE IS REQUEST ON REQUESTS CONTROLLER ****')
        Response.find({request: request._id}, function(err, response) {
            if (err) {return res.send('controller line 31 error'+err)};
            res.render('requests/show', {request, response, title: 'request details'});
        })})
}

module.exports = {
    index,
    new: newRequest,
    create: createRequest,
    show,
}