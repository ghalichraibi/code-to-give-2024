import { Component, OnInit } from '@angular/core';

interface Day {
  date: Date;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[]; // Add this line
}


interface CalendarEvent {
  id: string; // Unique identifier for the event
  title: string; // Title of the event
  date: Date; // Date and time when the event occurs
  description?: string; // Optional description of the event
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  currentMonth: Date = new Date();
  days: Day[] = [];

  events: CalendarEvent[] = [
    { id: '1', title: 'Event 1', date: new Date(), description: 'Description of Event 1' },
    // Add more mock events here
  ];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.days = [];
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
  
    // Adjusted to account for Sunday as the first day of the week
    // `getDay()` returns 0 for Sunday, which fits our new layout directly
    const dayOfWeek = firstDay.getDay();
  
    // No need to adjust the start index for Sunday-based layout
    // If the first day is Sunday (0), we do not prepend any days from the previous month
    for (let i = 0; i < dayOfWeek; i++) {
      this.days.unshift({ date: new Date(firstDay.getFullYear(), firstDay.getMonth(), -i), dayOfMonth: -1, isCurrentMonth: false, isToday: false });
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), i);
      const isToday = date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
      this.days.push({ date: date, dayOfMonth: i, isCurrentMonth: true, isToday: isToday });
    }
  
    // Ensure the calendar displays complete weeks, filling in days from the next month if necessary
    while (this.days.length % 7 !== 0) {
      const lastDate = this.days[this.days.length - 1].date;
      this.days.push({ date: new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1), dayOfMonth: -1, isCurrentMonth: false, isToday: false });
    }
  }
  
  assignEventsToDays(): void {
    this.days.forEach((day:any) => {
      // Filter events that occur on this day
      const eventsToday = this.events.filter(event => 
        event.date.getFullYear() === day.date.getFullYear() &&
        event.date.getMonth() === day.date.getMonth() &&
        event.date.getDate() === day.date.getDate()
      );
      day['events'] = eventsToday; // Add a new property to hold events for each day
    });
  }

  navigate(monthOffset: number): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + monthOffset, 1);
    this.generateCalendar();
  }
}
