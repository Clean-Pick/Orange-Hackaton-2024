import dotenv from "dotenv";

dotenv.config();

const authorization_header = process.env.AUTHORIZATION_HEADER;

console.log(authorization_header)
let cachedToken = null;
let tokenExpirationTime = null;

// Function to get a new access token
async function generateToken() {
    if (cachedToken && Date.now() < tokenExpirationTime) {
        console.log('Using cached token');
        return cachedToken;
    }
    try {
        const response = await fetch('https://api.orange.com/oauth/v3/token', {
            method: 'POST',
            headers: {
                'Authorization': authorization_header,
                'Accept': 'application/json',
    
            },
            body: new URLSearchParams({
                'grant_type': 'client_credentials'
            }),
        });
    
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error fetching token:', errorData);
        }
    
        const data = await response.json();
        cachedToken = data.access_token;
        console.log(cachedToken)
        tokenExpirationTime = Date.now() + (data.expires_in * 1000);
    
        console.log('New access token obtained');
        return cachedToken;
    } catch (error) {
       throw new Error("Error");
        
    }
    
}

generateToken()


