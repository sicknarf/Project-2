const Request = require('../models/userRequest');
const Response = require('../models/userResponse');
// const Category = require('../models/category'); // to be added into icebox

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
    request.user = req.user._id;
    request.userName = req.user.name;
    request.userAvatar = req.user.avatar;
    console.log(req.body);
    console.log(request)
    request.save(function(err) {
    if (err) return res.render('requests/new', { title: 'new request form'});
    res.redirect('/requests');
    });
}

function show(req, res){
    Request.findById(req.params.id, function(err, request){
        console.log(request);
        Response.find({request: request._id}, function(err, response) {
            if (err) {return res.send('controller line 34 error'+err)};
            res.render('requests/show', {request, response, title: `${request.userName} wants pics of ${request.category}`});
        })})
}

module.exports = {
    index,
    new: newRequest,
    create: createRequest,
    show,
}