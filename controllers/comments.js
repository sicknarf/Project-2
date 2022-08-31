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

function deleteComment(req, res) {
    Response.findOne({'comments._id': req.params.id})
        .then(function(response){
            const comment = response.comments.id(req.params.id);
            // if(!review.user.equals(req.user._id)) return res.redirect(`/movies/${movie.id}`);
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
            console.log('response', response)
            console.log('comment:', comment);
            console.log('req.params.id:', req.params.id);
            console.log('req.body', req.body);
            comment.update(req.body)
            // comment.findByIdAndUpdate(req.body);
        }).then(function() {
            res.redirect(`/requests/${response.request}/${response.id}`) 
        })
}

module.exports = {
    create,
    delete: deleteComment,
    edit: editComment,
    update: updateComment
}