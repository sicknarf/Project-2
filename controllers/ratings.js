var Response = require('../models/userResponse');

function rate(req, res){
    Response.findById(req.params.id, function(error, response){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        response.ratings.push(req.body);
        response.save(function(error){
            if (error) return res.render('./error', {error, message: 'ya dun goofed'});
            res.redirect(`/requests/${response.request}/${response.id}`)
        })})
    }

module.exports = {
    rate,
}