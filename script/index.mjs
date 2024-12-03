import express from 'express';
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

app.use(express.json());
app.use("/animap/api/register", registerRoute);
app.use("/animap/api/login", loginRoute);
app.use("/animap/api/users", usersRoute);

app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`))