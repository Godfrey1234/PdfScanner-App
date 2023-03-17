import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {

  baseURl = "https://pdf-scanner-puzphkwas-godfrey1234.vercel.app/"

  constructor(private http:HttpClient) { }

  onRegister(data:any){
    return this.http.post(this.baseURl + 'register',data)
  }

  onLogin(data:any){
    return this.http.post(this.baseURl + 'login',data)
  }


}
