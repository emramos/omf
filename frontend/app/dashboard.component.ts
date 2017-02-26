import { Component } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'dashboard',
  templateUrl: 'html/dashboard.component.html',
  styleUrls: [ 'css/dashboard.component.css' ]
})


export class DashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}
