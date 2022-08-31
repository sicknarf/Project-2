var Response = require('../models/userResponse');

function create(req, res){
    Response.findById(req.params.id, function(error, response){
        console.log(req.params.id);
        console.log('above is req.params.id')
        response.comments.push(req.body);
        console.log('below is response')
        console.log(response)
        response.save(function(error){
            if (error) return res.render('./error', {error, message: 'ya dun goofed'});
            res.redirect(`/requests/${response.request}/${response.id}`)
        })})
    }

module.exports = {
    create,
}