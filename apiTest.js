// key_API_locationVerification = "RFZ6ZWZSZ0Y1UTdRWk1Ud3RLd0MyUFpoMW5TcG5LTXU6akZ6WUZIOFdzZngyU0tMZUdqRnhZMlVmaDVVajlrQ2dNM2dXTGlyWnpWUWM";

// async function generateToken() {
//     console.log("generateToken() called");
//     const url = `https://api.orange.com/oauth/v3/token`;
//     const headers = 
//     {"Authorization": `basic ${key_API_locationVerification}`,
//      "Content-Type": "application/x-www-form-urlencoded",
//      "Accept": "application/json",
//     }
//     const body = new URLSearchParams({
//         grant_type: "client_credentials"
//     });

//     try {
//         const response = await fetch (url, {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify(body),
//         });
//         if (!response.ok) {
//             throw new Error(`Error: ${response.status} ${response.statusText}`)
//         }
//         const data = await response.json();
//         console.log(data);
//         // return data   
//     } catch (error) {
//         console.error('error 2e', error.message)
//     }
// }
// generateToken();

const clientId = 'DVzefRgF5Q7QZMTwtKwC2PZh1nSpnKMu';
const clientSecret = 'jFzYFH8Wsfx2SKLeGjFxY2Ufh5Uj9kCgM3gWLirZzVQc';
const encodedCredentials = btoa(`${clientId}:${clientSecret}`);

async function generateToken() {
    const response = await fetch('https://api.orange.com/oauth/v3/token', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${encodedCredentials}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        body: 'grant_type=client_credentials'
    });

    if (response.ok) {
        const data = await response.json();
        console.log('Access Token:', data.access_token);
        return data.access_token;
    } else {
        console.error('Error generating token:', response.status, response.statusText);
        const errorDetails = await response.text();
        console.error('Error details:', errorDetails);
    }
}

generateToken();
