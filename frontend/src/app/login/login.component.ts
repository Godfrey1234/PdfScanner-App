import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from '../service/pdf-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
  
    email: new FormControl(),
    password: new FormControl(),


  });

  constructor(private service:PdfServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onlogin(){


    if(this.loginForm.value.password != '' || this.loginForm.value.email != '' ){
      console.log('success')
      this.service.onLogin(this.loginForm.value).subscribe((data:any)=>{

      
          sessionStorage.setItem('token',data.token)
          console.log('success')
          this.router.navigateByUrl('/landing');
        
    
        
      }),(error:HttpErrorResponse)=>{
       
        console.log(error)
       
      }
     

    }else{
      console.log('fill all fields')
    }


  }

  }


