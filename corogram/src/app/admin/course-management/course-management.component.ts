import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Course} from '../../courses/course';
import {CourseService} from '../../courses/course.service';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css'],
})
export class CourseManagementComponent implements OnInit {
  public form: FormGroup;
  public courses: Course[];

  constructor(public fb: FormBuilder, private courseService: CourseService) {
    this.form = this.fb.group({
      name: [''],
      description: [''],
    });

    this.courseService.getCourses().subscribe((data: Course[]) => this.courses = data);

  }

  public ngOnInit(): void {
  }

  public submitForm() {
    this.courseService.addCourse(this.form.value).subscribe((data) => {
      if (data._id != null) {
        this.courses.push(data);
      }
    });
  }

  public deleteCourse(course: Course) {
    this.courseService.deleteCourse(course).subscribe((data) =>
      { 
     this.courses = this.courses.filter((c) => c !== course) });

  }
}
