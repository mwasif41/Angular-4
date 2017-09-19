import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl: './server.component.html'
})
/**
 * a server component with the status as weather online or offline
 */
export class ServerComponent{
    serverStatus: string = "online" 
}