import admin from 'firebase-admin'

const firebaseConfig = {
    type: process.env.FIRE_TYPE,
    project_id: process.env.FIRE_PROJECT_ID,
    private_key_id: process.env.FIRE_PRIVATE_KEY_ID,
    private_key: process.env.FIRE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.FIRE_EMAIL,
    client_id: process.env.FIRE_CLIENT_ID,
    auth_uri: process.env.FIRE_AUTH_URI,
    token_uri: process.env.FIRE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIRE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIRE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIRE_UNIVERSE_DOMAIN,
}

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig as admin.ServiceAccount),
})

export const db = admin.firestore()
export const auth = admin.auth()
