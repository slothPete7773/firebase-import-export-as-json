const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("./serviceAccount.json");

const paramsDev = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

initializeApp({
    credential: cert(paramsDev),
});

const db = getFirestore();

async function demoInitialize(db) {
    // [START demo_initialize]
    // Fetch data from Firestore
    const snapshot = await db.collection("MOCK_DATA_FOR_TEST").get();

    // Print the ID and contents of each document
    snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
    // [END demo_initialize]
}

demoInitialize(db);
