function login_middleware (req, res, next) {
	if (req.session.login_user !== undefined) {
	next();
	}else{
	 res.redirect("/users/login");
	}
	
}

module.exports = login_middleware;