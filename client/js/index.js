
import functions from 'firebase-functions';
import admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);
const _ = require('lodash');


exports.sendNotification = functions.database
		.ref(`/users/{userId}/groups/{groupId}/messages/{messageId}`)
				.onWrite(event => {
				  const userId = event.params.userId;
				  const groupId = event.params.groupId;
				  const messageId = event.params.messageId;
				  let messageStateChanged = false;
				  let messageCreated = false;

  	if (!event.previous.exists()) {
  	messageCreated = true;
  }
	if (!messageCreated && event.data.changed()) {
	messageStateChanged = true;
}
let msg = 'A message state was changed';
		if (messageCreated) {
			msg = `The following new message was posted to the message: ${messages.messageText}`;
		}

 return loadUsers().then(users => {
        let tokens = [];
        for (let user of users) {
            tokens.push(user.pushToken);
        }
        let payload = {
            notification: {
                title: 'Message Notification',
                body: msg,
                sound: 'default',
                badge: '1'
            }
        };
        return admin.messaging().sendToDevice(tokens, payload)
        		.then(response=> {
    		console.log("Successfully sent message:", response);
  })
  .catch(error => {
    console.log("Error sending message:", error);
  })
    });
});
function loadUsers() {
    let dbRef = admin.database().ref('/users');
    let defer = new Promise((resolve, reject) => {
        dbRef.once('value', (snap) => {
            let data = snap.val();
            let users = [];
            for (var property in data) {
                users.push(data[property]);
            }
            resolve(users);
        }, (err) => {
            reject(err);
        });
    });
    return defer;
}