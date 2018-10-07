import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  title: string = "Server title";
  allowAddNewServer = false;
  serverName:string="";
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 2000)
  }
  getServerStatus() {
    return "Offline";
  }
  onCreateServer(){
    this.allowAddNewServer = !this.allowAddNewServer;

  }
}
