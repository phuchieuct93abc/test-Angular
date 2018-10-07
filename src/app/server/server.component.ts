import { Component, Input } from "@angular/core";

@Component({
    selector:"app-server",
    templateUrl:"./server.component.html"
})
export default class ServerComponent{
    serverId:10
    @Input() value;
}