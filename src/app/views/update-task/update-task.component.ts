import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/interfaces/taskInterface';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  constructor(private taskService:TasksService,private route:ActivatedRoute,private router:Router) { }
  id = this.route.snapshot.params['x']
  task:Task = {}

  getSingleTask(){
    this.taskService.getSingle(this.id).subscribe({
      next:(res:any)=>{
        this.task = res
      }
    })
  }

  updateTask(data:any){
    this.taskService.updateTask(this.id,data).subscribe({
      next:()=>{
        this.router.navigateByUrl('/tasks')
      }
    })
  }

  ngOnInit(): void {
    this.getSingleTask()
  }

}
