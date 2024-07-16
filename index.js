const { initializeFirebaseApp, backup } = require("firestore-export-import");

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

// If you want to pass settings for firestore, you can add to the options parameters
// const options = {
//     firestore: {
//         host: "localhost:8080",
//         ssl: false,
//     },
// };

// Initiate Firebase App
const firestore = initializeFirebaseApp(paramsDev);

const backupOptions = {
    docsFromEachCollection: 10, // limit number of documents when exporting
    // refs: ["refKey", "deep.level.key"], // reference Path
};

backup(firestore, "MOCK_DATA_FOR_TEST", backupOptions).then((data) =>
    console.log(JSON.stringify(data))
);
