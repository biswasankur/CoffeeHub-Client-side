import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // allItem!: any
  allItem: any = {};
  img_path: any = "";
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  discountedPrice!: number;
  originalPrice!:any;
  searchedCoffee : any = [];

  constructor(private httpSer: UserService, private Activate: ActivatedRoute) {
    // this.httpSer.item_Menu().subscribe((res: any) => {
    //   // this.allItem =res.data.price;
    //   // console.log("menu price:",this.allItem);
    //   this.originalPrice = {
    //     ...res,
    //     price: res.price + (res.price)
    //   }
    //   console.log("menu price:",this.originalPrice);
      
       this.originalPrice = 100;
        this.discountedPrice = this.httpSer.calculateDiscountedPrice(this.originalPrice);
    // })

  }
  ngOnInit(): void {
    this.httpSer.item_Menu().subscribe((res: any) => {
      this.allItem = res.data;
      // console.log("All item:", this.allItem);

      this.img_path = this.baseUrl + this.folderPath
      // console.log(this.img_path);

      // console.log("all image:", this.baseUrl,this.folderPath,this.allItem.image);

    })
  }

  onSearch(search:any){
    console.log(search.value);
    let value = search.value;
    if(value.length >= 2){
     this.searchedCoffee = this.allItem.filter((data:any)=>{
       return data.itemName.toLowerCase().includes(value.toLowerCase())
     });
     console.log(this.searchedCoffee);
     
    }
 }

}