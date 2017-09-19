import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
/**
 * ServerComponents that is used to make use of several server components
 */
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000)
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
  }

  onUpdateServerName(event){
    this.serverName = event.target.value;
  }
}
