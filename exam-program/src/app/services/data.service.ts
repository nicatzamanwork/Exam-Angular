
import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson.model';
import { Student } from '../models/student.model';
import { Exam } from '../models/exam.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private lessons: Lesson[] = [];
  private students: Student[] = [];
  private exams: Exam[] = [];


  addLesson(lesson: Lesson) {
    this.lessons.push(lesson);
  }
  getLessons(): Lesson[] {
    return this.lessons;
  }


  addStudent(student: Student) {
    this.students.push(student);
  }
  getStudents(): Student[] {
    return this.students;
  }


  addExam(exam: Exam) {
    this.exams.push(exam);
  }
  getExams(): Exam[] {
    return this.exams;
  }
}
