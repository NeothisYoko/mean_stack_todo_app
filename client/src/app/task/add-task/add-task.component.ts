import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task:Task = new Task();

  @Output()
  newTask: EventEmitter<Task> = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
  }



  createTask() {
    if (!this.task.title){
      return;
    }
    this.task.isDone = false;

    this.newTask.emit(this.task);
  }
}
