function huesped_middleware(req, res, next) {
	if (req.session.login_user == undefined) {
	next();
	}else{
		res.send("esta pagina es solo para invitados")
	}
	
}

module.exports = huesped_middleware;