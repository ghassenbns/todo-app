import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Subscription } from 'rxjs';
import { UserAuthService } from '../shared/user-auth.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  addTask = true; //Task input handler
  currentDate: string; // actual date
  newTaskDescription = ''; // New Task description
  tasks = []; // Actual user tasks
  subscription: Subscription; //subscription to get Tasks
  constructor(
    public afDB: AngularFireDatabase,
    public userService: UserAuthService,
  ) {}

  ngOnInit() {
    //Getting Actual User Tasks
    this.subscription = this.afDB
      .list('Tasks/')
      .snapshotChanges(['child_added', 'child_removed'])
      .subscribe((actions) => {
        this.tasks = [];
        actions.forEach((action) => {
          if (action.payload.exportVal().uid === this.userService.uid) {
            this.tasks.push({
              key: action.key,
              text: action.payload.exportVal().text,
              hour: action.payload.exportVal().date.substring(11, 16),
              checked: action.payload.exportVal().checked,
            });
          }
        });
      });

    //Setting up date and time
    const date = new Date();
    this.currentDate = date.toLocaleDateString();
  }
  //Show & hide task form handler
  showForm() {
    this.addTask = !this.addTask;
    this.newTaskDescription = '';
  }
  //Add new task to task lists in firebase
  addTaskToFirebase() {
    this.afDB.list('Tasks/').push({
      text: this.newTaskDescription,
      date: new Date().toISOString(),
      checked: false,
      uid: this.userService.uid,
    });
    //reset form
    this.showForm();
  }
  //Change task checked value handler in real time
  changeCheckState(ev: any) {
    console.log('checked: ' + ev.checked);
    this.afDB.object('Tasks/' + ev.key + '/checked/').set(ev.checked);
  }
  //delete task from database
  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }
  //Avoid perfomance leaks by unsubscribing
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.userService.logout();
  }
}
