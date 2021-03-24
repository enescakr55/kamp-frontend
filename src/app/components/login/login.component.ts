import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private autService:AuthService,private toastrService:ToastrService) { }
  loginForm:FormGroup;
  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  login(){
    if(this.loginForm.valid){
      let loginModel:LoginModel = Object.assign({},this.loginForm.value);
      this.autService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message);
        localStorage.setItem("token",response.data.token);
      },responseError=>{
        this.toastrService.error(responseError.error,"Giriş Başarısız");
      })
      //console.log(this.loginForm.value);
    }
  }
}
