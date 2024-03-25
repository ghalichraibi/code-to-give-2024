import { Component, OnInit } from '@angular/core';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  description?: string;
}

interface Day {
  date: Date;
  dayOfMonth: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: CalendarEvent[]; // Now includes an array of CalendarEvents
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
    { id: '1', title: '[Zoom] Meeting with Omar', date: new Date(2024, 2, 12), description: 'Description of Event 1' },
    { id: '1', title: '[Zoom] Meeting with Ghali', date: new Date(2024, 2, 26), description: 'Description of Event 2' },
    { id: '1', title: '[Zoom] Meeting with Bob', date: new Date(2024, 2, 17), description: 'Description of Event 3' },

    // Add more mock events as needed
  ];

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.days = [];
    const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
    const lastDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 0);
    const daysInMonth = lastDay.getDate();
    const dayOfWeek = firstDay.getDay();

    // Adjust for Sunday start
    for (let i = 0; i < dayOfWeek; i++) {
      this.days.push({ date: new Date(firstDay.getFullYear(), firstDay.getMonth(), -i), dayOfMonth: -1, isCurrentMonth: false, isToday: false, events: [] });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), i);
      const isToday = date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear();
      this.days.push({ date: date, dayOfMonth: i, isCurrentMonth: true, isToday: isToday, events: [] });
    }

    // Complete the weeks of the month
    while (this.days.length % 7 !== 0) {
      const lastDate = this.days[this.days.length - 1].date;
      this.days.push({ date: new Date(lastDate.getFullYear(), lastDate.getMonth(), lastDate.getDate() + 1), dayOfMonth: -1, isCurrentMonth: false, isToday: false, events: [] });
    }

    this.assignEventsToDays();
  }

  assignEventsToDays(): void {
    this.days.forEach(day => {
      const eventsToday = this.events.filter(event =>
        event.date.getFullYear() === day.date.getFullYear() &&
        event.date.getMonth() === day.date.getMonth() &&
        event.date.getDate() === day.date.getDate());
      day.events = eventsToday;
    });
  }

  navigate(monthOffset: number): void {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + monthOffset, 1);
    this.generateCalendar();
  }
}
