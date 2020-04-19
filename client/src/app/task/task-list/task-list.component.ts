import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task, TaskList} from '../Task';
import {DataToDelete} from '../../data-to-delete';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {


  private _taskList:TaskList=[];

  @Output()
  taskToDelete:EventEmitter<DataToDelete<Task>> = new EventEmitter<DataToDelete<Task>>();

  @Output()
  taskToUpdate: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }



  @Input()
  set taskList(value: TaskList) {
    this._taskList = value;
  }


  get taskList(): TaskList {
    return this._taskList;
  }

  deleteTask(task: Task,index:number) {
    this.taskToDelete.emit({
      object:task,
      index:index
    });
  }

  updateStatus(task: Task) {
    this.taskToUpdate.emit(task);
  }
}
