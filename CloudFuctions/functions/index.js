const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);


exports.addUserToDB = functions.auth.user().onCreate(event => {


    return admin.database().ref('/users/' + event.uid).set({
        name: event.displayName,
        email: event.email,
        returning : false,
        metadata: event.metadata
    });
});
