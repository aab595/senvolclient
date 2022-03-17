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
    let list = document.querySelector('#menuList') as HTMLUListElement;
    this.menuType === 'menu'
      ? ((this.menuType = 'close'),
        list.classList.add('top-[200px]'),
        list.classList.add('opacity-100'))
      : ((this.menuType = 'menu'),
        list.classList.remove('top-[200px]'),
        list.classList.remove('opacity-100'));
  }
}
