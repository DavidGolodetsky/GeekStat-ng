import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../nav-bar/services/navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  title$ = this.navbarService.title;

  constructor(private navbarService: NavbarService) { }

  ngOnInit() {
  }

}
