import express from 'express';
import { connection }  from "./connectionDB.mjs";

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: "Here is your data" });
  }
)

router.post('/', (req, res) => {
  const {name_user, email_user, telefone_user, password_user} = req.body;
  connection.query(
      'INSERT INTO user (name_user, email_user, telefone_user, password_user) VALUES (?, ?, ?, ?)',
      [ name_user, type_user, email_user, telefone_user, password_user],
      (err, results) => {
        if (err) {
          console.error('Erreur lors de l\'insertion des données : ', err);
        }
        res.send(req.body)
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