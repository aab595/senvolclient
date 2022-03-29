import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuType = 'menu';
  }

  menu(): void {
    if (this.menuType === "close") {
      this.menuType = "menu"
    } else {
      this.menuType = "close"
    }
  }
}
