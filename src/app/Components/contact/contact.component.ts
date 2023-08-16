import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactFormValue!: FormGroup;
  constructor(private userSer: UserService) { }
  ngOnInit(): void {
    this.contactFormValue = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      message: new FormControl(''),
    })
  }
  submitData() {
    console.log("Collect Form Value:", this.contactFormValue.value);
    // const formdata:FormData=new FormData();
    // formdata.append('name',this.contactFormValue.value.name)
    // formdata.append('email',this.contactFormValue.value.email)
    // formdata.append('contact',this.contactFormValue.value.contact)
    // formdata.append('message',this.contactFormValue.value.message)

    this.userSer.contact(this.contactFormValue.value).subscribe((res:any) => {
console.log("responce after post:",res.data);
if(res.status==200){
  alert("Your query Successfully send")
}else{
  alert("try Again")
}
    })
  }
}
