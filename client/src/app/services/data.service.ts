import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  // Simulate fetching data from backend
  getFormData(): Observable<any> {
    const mockData = {
      inputs: [
        { label: 'First Name', type: 'text' },
        { label: 'Last Name', type: 'text' },
        { label: 'Email', type: 'email' },
        { label: 'Phone', type: 'tel'}
        // TODO: Set inputs based on incoming data from server.
      ]
    };
    return of(mockData);
  }
}