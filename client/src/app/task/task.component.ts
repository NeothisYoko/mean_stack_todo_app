import { Component, OnInit } from '@angular/core';
import { TaskService } from './service/task.service';
import {Task, TaskList} from './Task';
import {DataToDelete} from '../data-to-delete';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public tasks:TaskList=[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasksList();
  }

  getTasksList(){
    this.taskService.query().subscribe(tasksDB => {
      /*for(let task of tasksDB){

        this.tasks.push(new Task(task._id,task.title,task.isDone))
      }
      console.log(this.tasks);*/
      this.tasks = tasksDB;
    });
  }



  createTask(task: Task) {
    console.log(task);

    this.taskService.post(task.toTaskDTO()).subscribe(task=>{
      this.tasks.push(task)
    })
  }

  deleteTask(taskToDelete: DataToDelete<Task>) {
    console.log(taskToDelete);
    this.taskService.delete(taskToDelete.object._id).subscribe(deletedTask=>{
      console.log(deletedTask);
      this.tasks.splice(taskToDelete.index,1);
    });
  }

  updateStatus(task: Task) {
    console.log(task);
    this.taskService.update(task,task._id).subscribe(response=>{
      console.log(response);
    });
  }
}
