export interface IMenuItem {
    image: string;
    name: string;
    desc: string;
    price: number;
    id: number
}

type TMenuItem = IMenuItem[]

export interface IPopularMenu {
    breakfast: TMenuItem;
    dinner: TMenuItem;
    lunch: TMenuItem;
    dessert: TMenuItem;
    drink: TMenuItem;
}

export interface IChef {
    name: string;
    image: string;
    job: string;
    bgColor: string;
}

export interface IContactForm {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}

export interface IOrderList {
    id: number;
    name: string;
    image: string;
    desc: string;
    price: number;
    pieces: number;
    totalPrice: number;
}

export type TOrderList = Omit<IOrderList, "pieces" | "totalPrice">

export interface IReservation {
    name: string;
    surname: string;
    number: string;
    date: string;
    time: string;
    peopleNumber: string;
    note: string;
}

export interface ICheckout {
    firstName: string;
    lastName: string;
    number: string;
    address: string;
    note: string;
    orderMethod: string;
    orderTime: string;
    paymentMethod: string;
    shippingLocation: string;
    shippingAddress: string;
}

export interface ILinks {
    href: string;
    title: string;
}