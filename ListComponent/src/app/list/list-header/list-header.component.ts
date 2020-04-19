import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
