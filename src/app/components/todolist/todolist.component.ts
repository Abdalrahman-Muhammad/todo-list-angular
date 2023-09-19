import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskName: string = '';
  tasks: string[] = [];
  showError: boolean = false;
  addTask() {
    if (!this.taskName.trim()) {
      this.showError = true;
      return;
    } else {
      this.showError = false;
    }
    this.tasks.push(this.taskName);
    console.log(this.tasks);
    this.taskName = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
