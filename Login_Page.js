function handleCredentialResponse(response) {
    const userPayload = decodeJwtResponse(response.credential);

    console.log("ID (sub): " + userPayload.sub);
    console.log("Full Name: " + userPayload.name);
    console.log("Email: " + userPayload.email);
    console.log("Image URL: " + userPayload.picture);
}

function decodeJwtResponse(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        window.atob(base64)
            .split('')
            .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );
    return JSON.parse(jsonPayload);
}