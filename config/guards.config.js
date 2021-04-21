exports.ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {

        next()

    } else {

        res.redirect('/');

    }
}