import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
/**
 * This class is used to display the date and time in a formated way
 * it make use of javascript Date object and then it displays it using the pipe in a particularr format
 */
export class DatetimeComponent implements OnInit {
  date : Date
  constructor() { }

  ngOnInit() {
    this.dateAndTime();
  }
  /**
   * this is used to change the date object with the delay of every second
   */
  dateAndTime(){
    setInterval(()=> {
      this.date = new Date();
      }, 1000);
    }
}
