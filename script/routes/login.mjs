import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connection }  from "./connectionDB.mjs";

export const user = {
    id_user: null,
    name_user: null,
    telefone_user: null,
}

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/login/login.html'));
  }
)

router.post('/', (req, res) => {

      const {email_user, password_user} = req.body;

      connection.query(
        'SELECT id_user, name_user, telefone_user FROM user WHERE email_user=? AND password_user=?',
        [email_user, password_user],
        (err, results) => {
            if (err) {
                console.error('Erreur lors de la vérification des logs', err);
                return res.send({ success: false, message: 'Erreur interne du serveur' });
            }
            if (results.length > 0) {
                user.id_user = results[0].id_user;
                user.name_user = results[0].name_user;
                user.telefone_user = results[0].telefone_user;
                res.redirect("/animap/index");
            } else {
                return res.send({
                    success: false,
                    message: 'Email ou password incorrect'
                });
            }
        }
    );
  }
)

router.put('/', (req, res) => {
    res.send({ data: `User updated` })
  }
)

router.delete('/', (req, res) => {
    res.send({ data: `User deleted` })
  }
)

export { router };