import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-empty',
  templateUrl: './list-empty.component.html',
  styleUrls: ['./list-empty.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListEmptyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
