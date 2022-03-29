import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType!: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.menuType = 'menu';
  }

  menu(): void {
    if (this.menuType === 'close') {
      this.menuType = 'menu';
    } else {
      this.menuType = 'close';
    }
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  loggedOut() {
    this.authService.logout();
    this.router.navigateByUrl('/')
  }
}
