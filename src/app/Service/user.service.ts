import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { Buy, Cart, Contact, Menu, User } from '../Classes/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
 
  forEach(arg0: (item: any) => void) {
    throw new Error('Method not implemented.');
  }
  registation_api: string = "http://localhost:2100/reg";
  login_api: string = "http://localhost:2100/login";
  contact_api: string = "http://localhost:2100/contact";
  memuPost_api: string = "http://localhost:2100/getItem";
  single_data_api: string = "http://localhost:2100/single";
  profile_api: string = "http://localhost:2100/profile";
  buyNow_api: string = "http://localhost:2100/buynow";


  Cart_api: string = "http://localhost:3000/cart";

  // add_api: string = "http://localhost:2100/addcart";
  cartItems: any[] = [];


  constructor(private http: HttpClient, private auth: StorageService) { }

  register(formdata: any): Observable<User[]> {
    return this.http.post<User[]>(this.registation_api, formdata)
  }

  loginUser(loginData: any): Observable<User[]> {
    return this.http.post<User[]>(this.login_api, loginData)
    .pipe(catchError(this.errorHandler))
  }

  //error Handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(() => error || "Server Error")
  }

  contact(data: any): Observable<Contact[]> {
    return this.http.post<Contact[]>(this.contact_api, data)
  }
  item_Menu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.memuPost_api)
  }

  single_data_fetch(id: any): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.single_data_api}/${id}`)
  }

  profile_data(): Observable<User[]> {
    let data=this.auth.getData()
    let pid=data[0].id
    // console.log("profile Data:",data,pid);
    return this.http.get<User[]>(`${this.profile_api}/${pid}`)
  }

Cart_data():Observable<Cart[]>{
  return this.http.get<Cart[]>(this.Cart_api)
}
cartSingleData(id:number):Observable<Cart[]>{
  return this.http.get<Cart[]>(`${this.Cart_api}/${id}`)
}

AddToCart(obj:any):Observable<Cart[]>{
  // console.log("cart:",obj);
  
  return this.http.post<Cart[]>(this.Cart_api,obj)
}

CartItemDelete(id:number):Observable<Cart[]>{
  return this.http.delete<Cart[]>(`${this.Cart_api}/${id}`)
}
editQuant(id:number,data:any):Observable<Cart[]>{
  return this.http.put<Cart[]>(`${this.Cart_api}/${id}`,data)
}

BuyNow(formdata: any): Observable<Buy[]> {
  return this.http.post<Buy[]>(this.buyNow_api, formdata)
}

calculateDiscountedPrice(price: number) {
  const discountPercentage =0.20; // 20% off
  const discountAmount = price * discountPercentage;
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}


// removeFromCart(index: number) {
//   if (index >= 0 && index < this.cartItems.length) {
//     this.cartItems.splice(index, 1);
//   }
// }

// clearCart() {
//   this.cartItems = [];
// }




}
