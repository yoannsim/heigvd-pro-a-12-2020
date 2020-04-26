import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;
  @Output() selectedCourseChanged = new EventEmitter<Course>();
  constructor(private courseService: CourseService) { 
  this.courses = this.courseService.getCourses();
  }
  ngOnInit(): void {
  
  }
  selectCourse(course: Course) { this.selectedCourse = course;
  this.selectedCourseChanged.emit(course);
  }

}
 