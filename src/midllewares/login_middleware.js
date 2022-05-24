function login_middleware (req, res, next) {
	if (req.session.login_user !== undefined) {
	next();
	}else{
		return res.status(200).render("../views/users/login");
	}
	
}

module.exports = login_middleware;