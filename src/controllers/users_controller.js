const users_controller = {
    login: (req, res) => {
        res.status(200).render('../views/users/login')
    },
    register: (req, res) => {
        res.status(200).render('../views/users/register')
    },
    add_user: (req, res) => {
        res.send(req.body);

        res.status(200).redirect('../views/index'); //ruta de cierre del metodo POST
    }
};

module.exports = users_controller;