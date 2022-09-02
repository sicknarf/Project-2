var Response = require('../models/userResponse');

function create(req, res){
    Response.findById(req.params.id, function(error, response){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        response.comments.push(req.body);
        response.save(function(error){
            if (error) return res.render('./error', {error, message: 'ya dun goofed'});
            res.redirect(`/requests/${response.request}/${response.id}`)
        })})
    }

function deleteComment(req, res) {
    Response.findOne({'comments._id': req.params.id})
        .then(function(response){
            const comment = response.comments.id(req.params.id);
            comment.remove();
            response.save()
            .then(function(){
                res.redirect(`/requests/${response.request}/${response.id}`)
            }).catch(function (error){
            return next(error)
            })})
}

function editComment(req, res) {
    Response.findOne({'comments._id': req.params.id})
        .then(function(response){
            const comment = response.comments.id(req.params.id);
            res.render('./responses/editComment', {title: 'edit your comment', comment, response})
    })
}
function updateComment(req, res) {
    Response.findOne({'comments._id': req.params.id})
        .then(function(response){
            const comment = response.comments.id(req.params.id);
            comment.comment = req.body.comment;
            response.save()
            // comment.update(req.body)
                .then(function() {
                    res.redirect(`/requests/${response.request}/${response.id}`)})
        })
}

module.exports = {
    create,
    delete: deleteComment,
    edit: editComment,
    update: updateComment
}