import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
/**
 * This class is used to implement the timer of 1 hour with 
 * the reset and start facililty
 */
export class StopwatchComponent implements OnInit {

  started = false;
  time = new Date(2017,1,1,1,0,0)

  constructor() { }
  /**
   * this will call the timer for every one second
   */
  ngOnInit() {
    this.timerTick()
  }
  /**
   * it will either run the timer or reset it
   */
  buttonClicked(){
    if(this.started)
      this.resetTimer()
    else
      this.startTimer()
  }
  /**
   * this is used to subtract a second from the time
   */
  timerTick(){
    if(this.started)
      this.time.setSeconds(this.time.getSeconds(),-1)
    setTimeout(()=> this.timerTick(),1000)
  }
  /**
   * this will change the status of started
   */
  startTimer(){
    this.started =true
  }
  /**
   * this will change the status of started
   */
  resetTimer(){
    this.started = false
    this.time = new Date(2017,1,1,1,0,0)
  }
}
