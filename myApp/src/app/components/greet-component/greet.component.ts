import {Component} from '@angular/core'
import {UserDataService} from '../../services/userdata.service';

@Component({
    selector:"greet",
    template:"<p>Welcome {{currentUser}}</p>"
})
/**
 * Greet component used the name of user from 
 * the service and then store in its curretnUser variable
 */
export class GreetComponent{
    currentUser
    constructor(user:UserDataService){
        this.currentUser = user.userName
    }
}