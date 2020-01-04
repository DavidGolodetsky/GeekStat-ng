import { Component, OnInit } from '@angular/core';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  title$ = this.navbarService.title;

  constructor(private navbarService: NavbarService) {
  }

  ngOnInit() {
  }

}
