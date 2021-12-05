import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  currentDate: string;
  myTask = '';
  addTask: boolean;
  constructor(public afDB: AngularFireDatabase) {
    const date = new Date();
    this.currentDate = date.toLocaleDateString();
  }

  ngOnInit() {}
  add() {
    this.afDB.list('User/').push({
      pseudo: 'rim',
    });
  }
  addTaskToFirebase() {
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false,
    });
    this.showForm();
  }
  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }
}
