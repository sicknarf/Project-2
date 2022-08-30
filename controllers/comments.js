var Response = require('../models/userResponse');

function create(req, res){
    Response.findById(req.params.id, function(error, response){
        console.log(req.body.comments);
        response.comments.push(req.body.comments);
        response.save(function(error){
            if (error) return res.render('./error', {error, message: 'oops'});
            res.redirect(`/requests/${response._id}`)
        })})
    }

module.exports = {
    create,
}