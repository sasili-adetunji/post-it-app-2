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

The functionality of this web app being a <a href="https://nodejs.org/">Node.js</a> app depends on the following technologies.
- <a href="https://www.javascript.com/">JavaScript(ES6)</a>

- <a href="https://expressjs.com/">Express</a>: A Fast, opinionated, minimalist web framework for node which was used in routing this application.   BodyParser: This module was used to collect search data sent from the client side to the routing page.
- <a href="https://github.com/babel/babel">Babel </a>: This project is written in ES6, babel transpiles the code to ES5.
- <a href="https://firebase.google.com/">Firebase</a> For authentication and database
- <a href="https://webpack.js.org/"> Webpack:</a> webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in browser, it is also used for transpiling scss to css.
- <a href="https://facebook.github.io/react/">ReactJs</a>: A javascript library for building user interfaces.
 - <a href="https://facebook.github.io/flux/docs/overview.html"> Flux Architecture </a>
 - <a href="https://facebook.github.io/jest/">  Jest: </a> For client testing
 - <a href="https://mochajs.org/"> Mocha </a> and <a href="http://chaijs.com/"> chai </a>for server testing
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
- Create a free account on gmail and add your email and password in ```.env``` file.
- Create an account on <a href="https://www.nexmo.com/">  Nexmo </a> to get the Api key and secret which you will put in ```.env``` file.
- Build the project by running ```npm run build```.
- Start the server by running ```npm start``` and got to ```localhost:8000``` to view the app
- Run `npm test ` for testing 

## FAQ
To which branch should I raise a PR?

- Every PR is to be raised against develop branch.

What are the features in the timeline
- Ability to delete messages once sent
- Ability to send pictures
- Ability to remove oneself from group
- Signin with Twitter
- Signin with Facebook
- More intuitive UI/UX
## Acknowledgement 
- Andela 
- Bootcamp Facilitators 
- Developers community
- Friends and family 
## Contributing
- If you are planning on contributing to PostIt, that will be awesome. We welcome contributions. Just fork the repo and raise a PR.
-  If you have other improvements you want to add, feel free to do so. Ensure you follow style guide in the <a href="https://github.com/sasili-adetunji/post-it-app-2/wiki">  wiki </a>


## Author
This is done by ```Sasiliyu Adetunji```

## License & Copyright

MIT © <a href="https://github.com/sasili-adetuni">Sasiliyu Adetunji </a>

Licensed under the MIT License.

