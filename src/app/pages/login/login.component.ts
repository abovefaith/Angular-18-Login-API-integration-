import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj:any = {
    "EmailId": "",
    "Password":""
  };

  http= inject(HttpClient);

  // dependancy injection
  constructor(private router:Router){}

  // or instead of constructor we can make use of the router service in ang 17, the new way
  // router= inject...


  onLogin(){
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", this.loginObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("LoginSuccess");
        localStorage.setItem("angular18Login", this.loginObj.User);
        this.router.navigateByUrl("dashboard")
      } else{
        alert("Check User Name or Password")
      }
    })

  }

}
