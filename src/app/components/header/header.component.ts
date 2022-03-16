import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuType!: string;

  constructor() {}

  ngOnInit(): void {
    this.menuType = 'menu';
  }

  menu(): void {
    let list = document.querySelector('#menuList') as HTMLUListElement;
    this.menuType === 'menu'
      ? ((this.menuType = 'close'),
        list.classList.add('top-[150px]'),
        list.classList.add('opacity-100'))
      : ((this.menuType = 'menu'),
        list.classList.remove('top-[150px]'),
        list.classList.remove('opacity-100'));
  }
}
