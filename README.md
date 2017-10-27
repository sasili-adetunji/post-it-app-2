[![Build Status](https://travis-ci.org/sasili-adetunji/post-it-app-2.svg?branch=defense-feedback)](https://travis-ci.org/sasili-adetunji/post-it-app-2)
[![codecov.io Code Coverage](https://codecov.io/github/sasili-adetunji/post-it-app-2/branch/defense-feedback/graphs/badge.svg)](https://codecov.io/gh/sasili-adetunji/post-it-app-2/branch/defense-feedback)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)
[![Code Climate](https://codeclimate.com/github/sasili-adetunji/post-it-app-2/badges/gpa.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
[![Issue Count](https://codeclimate.com/github/sasili-adetunji/post-it-app-2/badges/issue_count.svg)](https://codeclimate.com/github/codeclimate/codeclimate)
## PostIt application
This application allows friends and colleagues to create groups for notifications. This way, one person can post notifications to everyone by sending message once. The app allows people to crete accounts, create groups and add registered users to the groups and send send messages out to these people whenever they want
## Features
- Signup up
- Login
- Create groups
- Add registered users to groups
- Post messages to all users in the groups
- See messages from the message board
- Reset password
- Sign up with Google+
- Reset password
- Email notifications of messages
- SMS notifications of messages 
- Read messages should be marked
## Technologies used
  PostIt-app API is built with <a href="https://nodejs.org/">Node.js</a>, <a href="https://www.javascript.com/">JavaScript(ES6)</a>, <a href="https://expressjs.com/">Express</a>, <a href="https://firebase.google.com/">Firebase</a> and <a href="https://facebook.github.io/react/">ReactJs</a> using  <a href="https://facebook.github.io/flux/docs/overview.html"> Flux Architecture </a>
## Limitations

- Users cannot send picture
- Users cannot choose to accept invitation request
- Users cannot exit from a group
- Users cannot delete a message once sent
## Installation
- Download or clone the app on your local machine
- Move into local directory ```cd post-it-app-2```
- Install project dependencies ```npm install```
- Go to <a href="https://firebase.google.com/">Firebase</a> and ```Click Go To Console``` to add a new project
- After getting setting your project, click ``` Add Firebase to Your Web App```. This will bring your security key
- Create a ```.env``` file and set the variables in the  ```env-sample``` to your specified database connection
- Start the server by running ```npm start```
- Run `npm test ` for testing 
- Run ```npm start ``` and visit ```localhost:8000``` to view the app locally
## Author
This is done by ```Sasiliyu Adetunji```

## License & Copyright

MIT © <a href="https://github.com/sasili-adetuni">Sasiliyu Adetunji </a>

Licensed under the MIT License.
## Acknowledgement 
- Andela 
- Bootcamp Facilitators 
- Developers community
- Friends and family 
## Contributing
- If you are planning on contributing to PostIt, that will be awesome. We welcome contributions. Just fork the repo and raise a PR.
