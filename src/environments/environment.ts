export const environment = {
    production: true,
    firebase: {
        apiKey: import.meta.env['NG_FIREBASE_API_KEY'],
        authDomain: import.meta.env['NG_FIREBASE_AUTH_DOMAIN'],
        projectId: import.meta.env['NG_FIREBASE_PROJECT_ID'],
        storageBucket: import.meta.env['NG_FIREBASE_STORAGE_BUCKET'],
        messagingSenderId: import.meta.env['NG_FIREBASE_MESSAGING_SENDER_ID'],
        appId: import.meta.env['NG_FIREBASE_APP_ID'],
        measurementId: import.meta.env['NG_FIREBASE_MEASUREMENT_ID'],
    }
};
