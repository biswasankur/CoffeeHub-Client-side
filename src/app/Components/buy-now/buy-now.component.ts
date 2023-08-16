import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-buy-now',
  templateUrl: './buy-now.component.html',
  styleUrls: ['./buy-now.component.css']
})
export class BuyNowComponent implements OnInit {
  allcart:any;
  item:any=[];
  grandTotal:number=0;
  CodArr: string[] = ['Cash On Delivery', 'UPI']
  registaionInputValue!: FormGroup
  constructor(private buyser: UserService,
     private route: Router,
     private toster:ToastrService
    ) { }
  ngOnInit(): void {
    this.registaionInputValue = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      contact: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
      cardholdername: new FormControl(''),
      card: new FormControl(''),
      expmonth: new FormControl(''),
      expyear: new FormControl(''),
      cvv: new FormControl(''),
      cod: new FormControl(''),
    })

    this.buyser.Cart_data().subscribe((res) => {
     this.item = res;
      console.log("Cart item throw buy now page:", this.item);
      this.allcart = this.item.filter((data: any) => data.email == window.localStorage.getItem('email'));
      console.log("number of cart product:", this.item.length);
      for (let i = 0; i < this.allcart.length; i++)
        this.grandTotal += this.allcart[i].sub_total
    })
  }
  submitdata() {
    // console.log("recived data:",this.registaionInputValue.value);

    this.buyser.BuyNow(this.registaionInputValue.value).subscribe((res: any) => {
      console.log("submited data:", res);
      if (res.status == 200) {
        // console.log(res.msg);
        this.toster.success("Your Order is confirm ")

        this.route.navigate(['/menu'])
      } else {
        this.toster.success("Your Order is not confirm ")
        
      }

    })
  }

// orderSuccess(){
//   this.toster.success("Your Order is confirm ")
// }

}
