const  Usuario = require ( '../models/usuarios' ); 

const usuarioController = {
     login(req , res){
        const { cpf, senha } = req.body;

        const usuario = Usuario.findOne({ where:{id_CPF: cpf} });

        if (!usuario) {
            return res.status(401).json({ error: 'Usuario não encontrado!' });
        }
        if (usuario.senha!=senha) {
            return res.status(401).json({ error: 'Senha não confere!' });
        }

        const {email, dt_nasc, nome } = usuario;

        return res.json({
              usuario: {
              id_CPF: cpf,
              nome,
              email,
              dt_nasc
            }
        })
    }
}

module.exports=usuarioController;