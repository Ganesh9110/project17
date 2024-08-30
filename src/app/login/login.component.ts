import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  department:any[]=[]
// name=''
// logo=''
DeptObj:any={
  "departmentname":"",
  "departmentLogo":""
}
  http=inject(HttpClient)
  ngOnInit(): void {
    this.getData()
      
  }
  
  getData(){
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result:any)=>{
    console.log(result.data)
    this.department=result.data

    })
  
}
onSubmit(){
  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.DeptObj).subscribe((result:any)=>{
    if(result.result){
      alert(" Sucessfully Created Record")
      this.getData()
    }
    else{
      alert(result.console.error)
      
    }

  })

  // console.log(this.DeptObj)
}
onUpdate(){
  this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment",this.DeptObj).subscribe((result:any)=>{
    if(result.result){
      alert(" Sucessfully Updated Record")
      this.getData()
    }
    else{
      alert(result.console.error)
      
    }


  })

}
onDelete(id:any){
  const isDelete= confirm("You need to delete this Record")
  if(isDelete){
    this.http.delete("+idhttps://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId"+id).subscribe((result:any)=>{
      if(result.result){
        alert("Sucessfully Deleted")
  
      }
      else{
        alert(result.message)
      }
  
    })

  }

}
}
