import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-header-item',
  templateUrl: './list-header-item.component.html',
  styleUrls: ['./list-header-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListHeaderItemComponent implements OnInit {
  @HostBinding('class') get valid() {
    return 'kt-datatable__header-item col show';
  }
  @Input('width') width: number;

  constructor() { }

  ngOnInit(): void {
  }

}
