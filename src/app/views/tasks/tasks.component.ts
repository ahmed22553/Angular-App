import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/taskInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[] = []
  constructor(private taskService:TasksService) { }

  getTasks(){
    this.taskService.getTask().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.tasks = res
      },
      error:(err:any)=>{
        console.log(err)
      }
    })
  }

  deleteTask(id:any,i:number){
    this.taskService.deleteTask(id).subscribe({
      next:()=>{
       this.tasks.splice(i,1)
      }
    })

  }

  ngOnInit(): void {
    this.getTasks()
  }

}
