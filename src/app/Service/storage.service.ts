import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  email!: string;
 

  constructor() { }
  setData(name:string,email:string,id:string,token:string){
    window.localStorage.setItem('name',name);
    window.localStorage.setItem('email',email);
    window.localStorage.setItem('id',id);
    window.sessionStorage.setItem('token',token);
  }
  getData(){
    const saveData=[];
    let data={
      name:window.localStorage.getItem('name'),
      email:window.localStorage.getItem('email'),
     id:window.localStorage.getItem('id'),
    }
    saveData.push(data);
    return saveData;
  }
  // token collect
  getToken(){
    return window.sessionStorage.getItem('token')
  }
// logout using SessionStorage

  // getDestroy(){
  //   return window.sessionStorage.clear()
  // }
  
// Logout using Both Storage

  getDestroy() {
    const destroyData=[];
    let data={
      localStorage:window.localStorage.clear(),
      sessionStorage :window.sessionStorage.clear()
    }
    destroyData.push(data)
    return destroyData;
  }
}
