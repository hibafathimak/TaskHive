import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:string ="http://localhost:3000"
  constructor(private http:HttpClient) {}
  appendToken(){
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem("token")
    if(token){
      headers=headers.append("Authorization",`Bearer ${token}`)
    }
    return {headers}
  }
    registerUser(reqBody:any){
      return this.http.post(`${this.serverUrl}/register`,reqBody)
   }
   loginUser(reqBody:any){
    return this.http.post(`${this.serverUrl}/login`,reqBody)
   }
   createTask(reqBody:any){
    return this.http.post(`${this.serverUrl}/create-task`,reqBody,this.appendToken())
   }
   getTask(taskId:String){
    return this.http.get(`${this.serverUrl}/tasks/${taskId}`,this.appendToken())
   }
   allTasks(){
    return this.http.get(`${this.serverUrl}/all-tasks`,this.appendToken())
   }
   updateTask(reqBody:any,taskId:String){
    return this.http.put(`${this.serverUrl}/update/${taskId}`,reqBody,this.appendToken())
   }
   deleteTask(taskId:String){
    return this.http.delete(`${this.serverUrl}/delete/${taskId}`,this.appendToken())
   }
}
