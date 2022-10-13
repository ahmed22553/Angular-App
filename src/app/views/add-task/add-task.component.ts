import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private fb:FormBuilder,private taskService:TasksService,private router:Router) { }

  file:any

  taskForm = this.fb.group({
    title:['',[Validators.required]],
    description:['',Validators.required],
    completed:[false],
    image:[]
  })

  // addTask(data:any){
  //   this.taskService.addTask(data).subscribe({
  //     next:()=>{
  //       this.router.navigateByUrl('/tasks')
  //     },
  //     error:(err:any)=>{
  //       console.log(err)
  //     }
  //   })
  // }

  handelUpload(event:any){
    this.file = event.target.files
  }

  addTask(task:any){
    const myData = new FormData()
    myData.append('image',this.file[0])
    myData.append('title',task.title),
    myData.append('description',task.description)
    myData.append('completed',task.completed)
    this.taskService.addTask(myData).subscribe({
      next:(res:any)=>{
        this.router.navigateByUrl('/tasks')
      }
    })
  }

  get taskValues(){
    return this.taskForm.controls
  }

  ngOnInit(): void {
  }

}
