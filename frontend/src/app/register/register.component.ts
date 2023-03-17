import { Component, OnInit } from '@angular/core';
import { PdfServiceService } from '../service/pdf-service.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    surname: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl(),
    password: new FormControl(),
    confirm: new FormControl(),

  });

  constructor(private service:PdfServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onRegister(){
   


    if(this.registerForm.value.password === this.registerForm.value.confirm ){
     
      this.service.onRegister(this.registerForm.value).subscribe((data:any)=>{

        if(data === 'successfully registered'){

          console.log('registered')
          this.router.navigateByUrl('/landing');

        }else if (data === 'user already registered'){
          console.log('user already registered')
        }
        
      }),(error:HttpErrorResponse)=>{
       
        console.log(error)
       
      }
     

    }else{
      console.log('password dont match')
    }


  }

}
