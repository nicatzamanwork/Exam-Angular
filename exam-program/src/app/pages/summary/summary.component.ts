import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Lesson } from '../../models/lesson.model';
import { Student } from '../../models/student.model';
import { Exam } from '../../models/exam.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  imports: [CommonModule],
})
export class SummaryComponent implements OnInit {
  lessons: Lesson[] = [];
  students: Student[] = [];
  exams: Exam[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.lessons = this.dataService.getLessons();
    this.students = this.dataService.getStudents();
    this.exams = this.dataService.getExams();
  }
}
