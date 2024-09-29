
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { StudentsComponent } from './pages/students/students.component';
import { ExamsComponent } from './pages/exams/exams.component';
import { SummaryComponent } from './pages/summary/summary.component';

export const routes: Routes = [
    { path: 'lessons', component: LessonsComponent, pathMatch: 'full' },
    { path: 'students', component: StudentsComponent },
    { path: 'exams', component: ExamsComponent },
    { path: 'summary', component: SummaryComponent },
    { path: '', redirectTo: '/lessons', pathMatch: 'full' },
    { path: '**', redirectTo: '/lessons' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
