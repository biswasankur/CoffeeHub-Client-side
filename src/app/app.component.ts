import { Component } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { StorageService } from './Service/storage.service';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientSide';

  token!: any;
  data!: any;
  name!: any;
  // image!: any;
  load: boolean = false;
  profile_pic: any = {};
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  img_path: any = "";
  totalItem=0;
 

  constructor(private router: Router,
    private userser:UserService,
    private storeSer: StorageService,
    private userSer: UserService
  ) { 
    this.userSer.profile_data().subscribe((res: any) => {
      this.profile_pic = res.data
      // console.log("profile home:", this.profile_pic);

      // if (this.profile_pic.image == "undefined" || this.profile_pic.image == "") {
      //   this.img_path = "assets/images/demo.png"
      // } else {
      this.img_path = this.baseUrl + this.folderPath + this.profile_pic.image 
      // console.log("img:",this.img_path);
      // }

    })
  }

  ngOnInit(): void {
    this.router.events.subscribe(enent => {
      if (enent instanceof RouteConfigLoadStart) {
        this.load = true;
        console.log("Loding started");
      } else if (enent instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.load = false;
          console.log("loading done");
        }, 1500)
      }
    })
    
    this.userser.Cart_data().subscribe((res:any)=>{
      this.totalItem=res.length;
      console.log("cart length:",res.length);
    })
   

  }

  //loggin 
  logggedIn() {
    this.token = this.storeSer.getToken();
    // console.log("Token Value:", this.token);
    if (this.token) {
      this.data = this.storeSer.getData();
      // console.log("User data:", this.data);
      this.name = this.data[0].name
      // this.image = this.data[0].image
    }
    return this.token;
  }



  //loggin out
  loggingOut() {
    this.storeSer.getDestroy();
    alert("LogOut Successfully")
    this.router.navigate(['/login'])
  }

}
