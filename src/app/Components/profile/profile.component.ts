import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profile_pic: any = {};
  img_path: any = "";
  profile_id:any;
  baseUrl: string = "http://localhost:2100/"
  folderPath: string = "upload/"
  
  constructor(private userser:UserService, private Active:ActivatedRoute){}
  ngOnInit(): void {
      this.userser.profile_data().subscribe((res:any)=>{
        this.profile_pic=res.data
        console.log("profile details:",this.profile_pic);

        if (this.profile_pic.image == "undefined" || this.profile_pic.image == "") {
          this.img_path = "assets/images/demo.png"
        } else {
          this.img_path= this.baseUrl + this.folderPath + this.profile_pic.image    
          // console.log("finally fetch:", this.img_path);
          // console.log("image:",this.profile_pic.image);
          
  
        }
      })
    
    
  }
}
