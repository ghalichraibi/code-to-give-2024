import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})

export class CalendarComponent implements OnInit {

  ngOnInit(): void {
    this.getNumOfDaysInMonth();
  }
  
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  displayDate = new Date();

  displayMonth = this.monthNames[this.displayDate.getMonth()];
  displayYear = this.displayDate.getFullYear();
  
  numDays: number[] = [];
  
  currentDay = this.weekdayNames[this.displayDate.getDate()];
  currentDayIndex = this.displayDate.getDate();
  
  navigateNextMonth(){
    if (this.displayDate.getMonth() === 11){
      this.displayYear++;
    }
    this.getNumOfDaysInMonth();
    this.displayDate.setMonth(this.displayDate.getMonth() + 1);
    return this.displayMonth = this.monthNames[this.displayDate.getMonth()];
  }

  navigatePreviousMonth(){
    if (this.displayDate.getMonth() === 0){
      this.displayYear--;
    }
    this.getNumOfDaysInMonth();
    this.displayDate.setMonth(this.displayDate.getMonth() - 1);
    return this.displayMonth = this.monthNames[this.displayDate.getMonth()];
  }
  
  getNumOfDaysInMonth(){
    this.numDays = [];
    let temp = new Date(this.displayYear, this.displayDate.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= temp; i++){
      this.numDays.push(i);
    }
  }

}
