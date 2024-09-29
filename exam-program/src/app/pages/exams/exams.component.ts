import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Exam } from '../../models/exam.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exams',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exams.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamsComponent {
  exam: Exam = {
    lessonCode: '',
    studentNumber: '',
    examDate: '',
    price: 0,
  };

  constructor(private dataService: DataService, private router: Router) {}

  addExam() {
    this.dataService.addExam({ ...this.exam });
    this.exam = {
      lessonCode: '',
      studentNumber: '',
      examDate: '',
      price: 0,
    };
    this.router.navigate(['/summary']);
  }
}
