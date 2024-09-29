import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { DataService } from '../../services/data.service';
import { Lesson } from '../../models/lesson.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
  lesson: Lesson = {
    lessonCode: '',
    lessonName: '',
    classLevel: '',
    teacherFirstName: '',
    teacherLastName: '',
  };

  constructor(private dataService: DataService, private router: Router) {}  

  addLesson() {
    this.dataService.addLesson({ ...this.lesson });
    this.lesson = {
      lessonCode: '',
      lessonName: '',
      classLevel: '',
      teacherFirstName: '',
      teacherLastName: '',
    };
    this.router.navigate(['/students']);
  }
}
