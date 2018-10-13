import { Component } from "@angular/core";

@Component({
    templateUrl:"./header.component.html",
    selector:"app-header"
})
export class HeaderComponent{
    title:string="Header here"
    constructor(){

    }
}