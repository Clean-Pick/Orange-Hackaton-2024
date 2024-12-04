import express from 'express';
import { connection }  from "./connectionDB.mjs";

connection.connect((err) => {
    if(err) {
        console.error('Erreur de connexion à la base de données');
    }
})

const router = express.Router();


router.get('/', (req, res) => {
  connection.query(
      'SELECT * FROM animals',
      (err, results) => {
        if (err) {
          console.error('Erreur lors du chargement des données : ', err);
        }
        res.json(results);
      }
    );
  }
)


export default router;