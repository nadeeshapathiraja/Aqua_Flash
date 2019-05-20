import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MentorService } from '../../services/mentor.service';
import { Mentor } from '../../entities/mentor';
import { Student } from '../../entities/student';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';
import { User } from '../../entities/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class AdminPanelComponent implements OnInit {

  // UI related variables
  dashboardActive: boolean;
  companiesActive: boolean;
  mentorsActive: boolean;
  studentsActive: boolean;
  notificationsActive: boolean;
  title: string;

  // Object lists
  // companyList: Company[];
  mentorList: Mentor[];
  studentList: Student[];


  constructor(private authService: AuthenticationService,
    private mentorService: MentorService,
    private studentService: StudentService, private userService: UserService,
    private cd: ChangeDetectorRef) { }



  ngOnInit() {
    this.activateDashboard();

    // Get and Update object list from services
    this.mentorService.getMentors();
    this.studentService.getStudents();
    this.mentorList = this.mentorService.mentorsList;
    this.studentList = this.studentService.studentsList;

    // Detect changes on data
    this.cd.detectChanges();
  }



  /* Page contents managing functions */

  activateDashboard() {
    this.dashboardActive = true;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Dashboard";
  }

  // activateCompanies() {
  //   this.dashboardActive = false;
  //   this.companiesActive = true;
  //   this.mentorsActive = false;
  //   this.studentsActive = false;
  //   this.notificationsActive = false;
  //   this.title = "Companies";
  // }

  activateMentors() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = true;
    this.studentsActive = false;
    this.notificationsActive = false;
    this.title = "Mentors";
  }

  activateStudents() {
    this.dashboardActive = false;
    this.companiesActive = false;
    this.mentorsActive = false;
    this.studentsActive = true;
    this.notificationsActive = false;
    this.title = "Students";
  }

  // activateNotifications() {
  //   this.dashboardActive = false;
  //   this.companiesActive = false;
  //   this.mentorsActive = false;
  //   this.studentsActive = false;
  //   this.notificationsActive = true;
  //   this.title = "Notifications";
  // }


  // Delete function for users by id
  deleteUser(userId: string) {

    // Initialise user with user id
    let user = new User();
    user.userId = userId;

    // Delete user from database
    // if (console.log(confirm("Are you sure ?"))) {
    //   this.userService.deleteUser(user);
    // }

    // Get and Update user list from services
    this.mentorService.getMentors();
    this.studentService.getStudents();
    this.mentorList = this.mentorService.mentorsList;
    this.studentList = this.studentService.studentsList;

    // Detect changes on data
    this.cd.detectChanges();
  }


  // Logout funtion
  logout() {
    this.authService.logoutUser();
  }

}
