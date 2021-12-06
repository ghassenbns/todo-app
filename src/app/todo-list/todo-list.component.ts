import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  addTask = true;
  currentDate: string;
  myTask = '';
  tasks = [];

  constructor(public afDB: AngularFireDatabase) {
    const date = new Date();
    this.currentDate = date.toLocaleDateString();
    this.getTasks();
  }

  ngOnInit() {}

  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }
  addTaskToFirebase() {
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false,
    });
    this.showForm();
  }

  getTasks() {
    this.afDB
      .list('Tasks/')
      .snapshotChanges(['child_added', 'child_removed'])
      .subscribe((actions) => {
        this.tasks = [];
        actions.forEach((action) => {
          this.tasks.push({
            key: action.key,
            text: action.payload.exportVal().text,
            hour: action.payload.exportVal().date.substring(11, 16),
            checked: action.payload.exportVal().checked,
          });
        });
      });
  }
  changeCheckState(ev: any) {
    console.log('checked: ' + ev.checked);
    this.afDB.object('Tasks/' + ev.key + '/checked/').set(ev.checked);
  }
  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }
}
