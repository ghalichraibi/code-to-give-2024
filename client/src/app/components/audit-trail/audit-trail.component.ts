import { Component } from '@angular/core';

interface AuditEvent {
  timestamp: Date;
  message: string;
}

@Component({
  selector: 'app-audit-trail',
  templateUrl: './audit-trail.component.html',
  styleUrls: ['./audit-trail.component.scss']
})
export class AuditTrailComponent {
  events: AuditEvent[] = [
    { timestamp: new Date(2024, 2 - 1, 12, 23, 59, 59), message: 'New resident Alice created by Eleanor' },
    { timestamp: new Date(2024, 2 - 1, 13, 15, 32, 11), message: 'New intervention plan created by Frank' },
    { timestamp: new Date(2024, 2 - 1, 14, 17, 42, 17), message: 'Clara filled a satisfaction survey' },
    { timestamp: new Date(2024, 2 - 1, 15, 19, 12, 12), message: 'New resident Joe created by Eleanor' },
    { timestamp: new Date(2024, 2 - 1, 17, 11, 13, 14), message: 'New resident Yousef created by Eleanor' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
