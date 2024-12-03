import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ajout de la route GET pour "/"
app.get('/', (req, res) => {
    res.send('Proxy server is running. Use the POST /proxy/token endpoint to request a token.');
});

app.get('/proxy/token', (req, res) => {
    res.send('Use POST method to get the token.');
});


app.post('/proxy/token', async (req, res) => {
    const url = 'https://api.orange.com/oauth/v3/token';
    const headers = {
        "Authorization": `Basic ${req.body.apiKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
    };
    const body = new URLSearchParams({
        grant_type: 'client_credentials',
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body,
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error in proxy:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
