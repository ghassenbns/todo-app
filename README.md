

# Todo-App - Ionic Firebase App

Todo-App allows user to create an account and login via Firebase Auth library.

Once logged in you can 
* Get all your saved tasks
* Check tasks to be considered as done
* Uncheck your tasks
* Delete task
* Add new task
 
All of this is done through a simple UI experience.

## Installation

Use the npm package manager [npm](https://www.npmjs.com/) to install Todo-App.

```bash
npm install 
```

## Run
To run Todo-App, you need to execute this ionic command 

```bash
ionic serve 
```


## Usage
You can set your own firebase config in folder src/environnements/environnement.ts by changing the firebaseConfig object.
 ```javascript
firebaseConfig: {
    apiKey: 'AIzaSyDYn9qms8C-dfTeqwJ3_yxFSwk5VvoJdoA',
    authDomain: 'todoapp-f4eee.firebaseapp.com',
    databaseURL: 'https://todoapp-f4eee-default-rtdb.firebaseio.com',
    projectId: 'todoapp-f4eee',
    storageBucket: 'todoapp-f4eee.appspot.com',
    messagingSenderId: '540600688848',
    appId: '1:540600688848:web:6e6f727d346e80a377bed5',
    measurementId: 'G-QL82TCJ0T6',
  }
```
### Todo-List
#### Add task 
You can add a task throught the input field under the list of tasks by entering the description of the task
#### Delete task 
To delete a task, swipe the task item to the left and a garbage icon will show up at the right of the ion-item
#### Logout
To logout, click on the top right icon , then you'll be redirected to the login screen

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

