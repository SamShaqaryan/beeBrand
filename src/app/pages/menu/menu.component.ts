import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  opened: boolean = true
  constructor() { }

  ngOnInit(): void {
  }

  toggleOpened() {
    if (this.opened) {
      this.opened = false;
    }
    else {
      this.opened = true;
    }
  }
}
