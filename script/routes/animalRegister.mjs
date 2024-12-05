import express from 'express';
import { connection }  from "./connectionDB.mjs";

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();

async function getUserData(res){
  const response = await fetch('http://localhost:3001/animap/api/users');
  const user = await response.json()
  return user;
}

router.get('/',(req, res) => {})


router.post('/', (req, res) => {
  const dataUser = getUserData();
  const {name_animal,telefone_animal,is_lost,picture_animal} = req.body;
  connection.query(
      'INSERT INTO animals (name_animal,id_user,telefone_animal,is_lost,picture_animal) VALUES (?, ?, ?, ?, ?)',
      [ name_animal,dataUser["id_user"],telefone_animal,is_lost,picture_animal],
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