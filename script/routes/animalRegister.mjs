import express from 'express';
import { connection }  from "./connectionDB.mjs";

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();


router.post('/', (req, res) => {
  const {name_animal,id_user,telefone_animal,is_lost,picture_animal} = req.body;
  connection.query(
      'INSERT INTO animals (name_animal,id_user,telefone_animal,is_lost,picture_animal) VALUES (?, ?, ?, ?, ?)',
      [ name_animal,id_user,telefone_animal,is_lost,picture_animal],
      (err, results) => {
        if (err) {
          console.error('Erreur lors de l\'insertion des données : ', err);
        }
        res.send({data: `Animal register`})
        // res.render("login/login")
      }
    );
  }
)

router.put('/', (req, res) => {
    res.send({ data: `Animal updated` })
  }
)

router.delete('/', (req, res) => {
    res.send({ data: `Animal deleted` })
  }
)

export default router;