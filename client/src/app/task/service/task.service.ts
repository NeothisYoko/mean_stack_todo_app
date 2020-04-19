import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Task, TaskList } from '../Task';
import {HttpClient} from '@angular/common/http';
import {TaskDTO} from '../TaskDTO';




@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private static URL_API: string = 'http://localhost:3000/api/task';
  constructor(public http: HttpClient) { }


  query(): Observable<TaskList> {
    return this.http.get<TaskList>(TaskService.URL_API);
  }

  post(task: TaskDTO): Observable<Task> {
    return this.http.post<Task>(TaskService.URL_API, task);
  }

  update(task: Task,id:string): Observable<Task> {
    return this.http.put<Task>(TaskService.URL_API+"/"+id, task);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(TaskService.URL_API + "/" + id);
  }
}
