import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HIGN';
  options = [
    { path: '/home', title: 'Home'},
    { path: '/mental-state-exams', title: 'Mental State Exams'},
  ]
}
