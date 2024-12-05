import { generateToken } from "./generateToken.mjs";

export async function callApiLocationRetrieval() {

    try {
        const accessToken = await generateToken();
        const url = 'https://api.orange.com/camara/location-retrieval/orange-lab/v0/retrieve';
        const phoneNumber = '+33699901032'; // Replace with a valid test number in the list Orange
        const maxAge = 60; // Maximum age of the location information which is accepted for the location retrieval (in seconds).
        const requestData = {
            device: {
                phoneNumber: phoneNumber
            },
            maxAge: maxAge
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(requestData)
        });

        if (response.ok) {
            const data = await response.json(); //
            console.log("Device Location:", data);

            return data
        } else {
            switch (response.status) {
                case 400:
                    throw new Error("Invalid input: Please check the phone number or maxAge.");
                case 404:
                    throw new Error("Unknown Location: The equipment could not be localized.");
                case 503:
                    throw new Error("Service unavailable: The location service is currently down.");
                case 401:
                    throw new Error("Unauthorized: Access token expired or invalid. Generate a new token.");
                case 403:
                    throw new Error("Forbidden: You no longer have access to this API.");
                default:
                    throw new Error(`Unexpected error: ${response.status} - ${response.statusText}`);
            }
        }

    } catch (error) {
        console.error("Error during API call:", error.message);
    }
}

callApiLocationRetrieval()