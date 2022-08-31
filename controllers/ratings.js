var Response = require('../models/userResponse');

function rate(req, res){
    Response.findById(req.params.id, function(error, response){
        console.log('below is req.params.id for rating')
        console.log(req.params.id);
        response.ratings.push(req.body);
        console.log('below is response')
        console.log(response)
        response.save(function(error){
            if (error) return res.render('./error', {error, message: 'ya dun goofed'});
            res.redirect(`/requests/${response.request}/${response.id}`)
        })})
    }

module.exports = {
    rate,
}