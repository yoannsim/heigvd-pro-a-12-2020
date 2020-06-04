import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../_service/auth/auth.service';
import {Course} from '../_service/course/course';
import {ForumMessage} from '../_service/forum/forum.message';
import {ModalService} from '../_service/modal/modal-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  public selectedCourse: Course;
  public statu: boolean;
  private GcoursUrl = '/management';
  private GUserUrl = '/user-management';

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.statu = JSON.parse(localStorage.getItem('userInfo')).status  !== 'user';
  }

  public selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  public Gcours() {
    this.router.navigate([this.GcoursUrl]);
  }

  public Guser() {
    this.router.navigate([this.GUserUrl]);
  }

}
