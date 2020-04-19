import {TaskDTO} from './TaskDTO';

export declare type TaskList = Task[];

export class Task {
  private _ident: string;
  private _title: string;
  private _isDone: boolean;


  constructor(id?: string, title?: string, isDone?: boolean) {
    this._ident = id;
    this._title = title;
    this._isDone = isDone;
  }


  get ident(): string {
    return this._ident;
  }

  set ident(value: string) {
    this._ident = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get isDone(): boolean {
    return this._isDone;
  }

  set isDone(value: boolean) {
    this._isDone = value;
  }


  toTaskDTO():TaskDTO{
    return {
      ident:this.ident,
      title:this._title,
      isDone:this._isDone
    }
  }
}
