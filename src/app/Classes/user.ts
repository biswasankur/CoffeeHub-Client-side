export class User {
    name!: string;
    email!: string;
    contact!: string;
    password!: string;
    image!: File;


}

export class Contact {
    name!: string;
    email!: string;
    contact!: string;
    message!: string;
}
export class Menu {
    itemName!: string;
    itemDetails!: string;
    price!: string;
    image!: File;
}

export class Cart {

    "id"!: number
    "email"!: string
    "pid"!: string
    "product_name"!: string
    "product_price"!: number
    "quantity"!: number
    "sub_total"!:number
}
export class Buy {
    name!: string;
    address!: string;
    contact!: string;
    city!: string;
    state!: string;
    zip!: string;
}
