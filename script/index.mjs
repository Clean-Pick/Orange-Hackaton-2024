import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import registerRoute from './routes/register.mjs';
import { router as loginRoute } from './routes/login.mjs';
import usersRoute from './routes/users.mjs';
import { connection }  from "./routes/connectionDB.mjs";

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ', err);
    } else {
        console.log('Connexion à la base de données réussie.');
    }
});

const PORT = 3001;
const app = express();

// Obtenir le chemin absolu du répertoire courant
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, '../views')); // Chemin vers le dossier "views"

app.use("/animap/register", registerRoute);
app.use("/animap/login", loginRoute);
app.use("/animap/api/users", usersRoute);

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))