import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url = "http://localhost:3000/"

  constructor(private http:HttpClient) { }

  addTask(data:any){
    return this.http.post(this.url+'tasks',data)
  }

  getTask(){
    return this.http.get(this.url+'tasks')
  }

  getSingle(id:any){
    return this.http.get(this.url + 'tasks/' + id)
  }

  updateTask(id:any,data:any){
    return this.http.patch(this.url + 'tasks/'+id,data)
  }

  deleteTask(id:any){
    return this.http.delete(this.url + 'tasks/'+id)
  }


}
