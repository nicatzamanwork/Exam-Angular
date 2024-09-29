import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/student.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './students.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentsComponent {
  student: Student = {
    studentNumber: '',
    firstName: '',
    lastName: '',
    classNumber: '',
  };

  constructor(private dataService: DataService, private router: Router) {}

  addStudent() {
    this.dataService.addStudent({ ...this.student });
    this.student = {
      studentNumber: '',
      firstName: '',
      lastName: '',
      classNumber: '',
    };
    this.router.navigate(['/exams']);
  }
}
