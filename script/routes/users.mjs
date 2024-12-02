import express from 'express';
import { connection }  from "./connectionDB.mjs";

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();

router.get('/', (req, res) => {
    res.send();
  }
)

router.post('/', (req, res) => {
    res.send({ data: `Utilisateur créé et stocké dans la base de données` })
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