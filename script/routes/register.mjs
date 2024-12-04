import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connection }  from "./connectionDB.mjs";

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../views/register/register.html'));
  }
)

router.post('/', (req, res) => {
  const {name_user, email_user, telefone_user, password_user} = req.body;
  connection.query(
      'INSERT INTO user (name_user, email_user, telefone_user, password_user) VALUES (?, ?, ?, ?)',
      [ name_user, email_user, telefone_user, password_user],
      (err, results) => {
        if (err) {
          console.error('Erreur lors de l\'insertion des données : ', err);
        }
        res.render("login/login")
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

export default router;