[![Build Status](https://travis-ci.org/sasili-adetunji/post-it-app-2.svg?branch=develop)](https://travis-ci.org/sasili-adetunji/post-it-app-2)
[![Coverage Status](https://coveralls.io/repos/github/sasili-adetunji/post-it-app-2/badge.svg?branch=master)](https://coveralls.io/github/sasili-adetunji/post-it-app-2?branch=master)

[![Coverage Status](https://coveralls.io/repos/github/sasili-adetunji/post-it-app-2/badge.svg?branch=develop)](https://coveralls.io/github/sasili-adetunji/post-it-app-2?branch=develop)
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
  PostIt-app API is built with <a href="https://nodejs.org/">Node.js</a>, <a href="https://www.javascript.com/">JavaScript(ES6)</a>, <a href="https://expressjs.com/">Express</a> and <a href="https://firebase.google.com/">Firebase</a>
## API Documentation
It is a simple RESTful api, which creates users,sign in registered users, create group and add memebrs to a groups.
use x-www-formurlencoded parameters.
Methods

'/user/signup'

	.POST: Create a user

		parameters:

			email: string

			userName: string

			password: string

'/user/signin'

	.POST: Sign in user

		parameters:

			email: string

			password: string

'/group'

	.POST: Create a group

		 groupName: string
        
'/group/groupId/user'
      
 	.POST:Add a user a group

		:
		
		
## Installation
- Download or clone the app on your local machine
- Move into local directory ```cd post-it-app-2```
- Install project dependencies ```npm install```
- Create a firebase database
- Create a ```.env``` file and set the variables in the  ```env-sample``` to your specified database connection
- Start the server by running ```npm start```
- Run `npm test ` for testing 
- Run ```npm start ``` and visit ```localhost:8000``` to view the app locally
## Author
This is done by Sasiliyu Adetunji
## Acknowledgement 
- Andela 
- Bootcamp Facilitators 
- Developers community
- Friends and family 
## Contributing
- If you are planning on contributing to PostIt, that will be awesome. We welcome contributions. Just fork the repo and raise a PR.
