import { Component, Input } from '@angular/core';
//import { Exams } from '../../model/exams.entity';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.css'
})
export class ExamListComponent {
  @Input() mentalStateExams: Array<any> = [];
}
