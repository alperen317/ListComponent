import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-column',
  templateUrl: './list-column.component.html',
  styleUrls: ['./list-column.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListColumnComponent implements OnInit {
  @HostBinding('class') get valid() {
    if (this.width) {
      return 'kt-datatable__column col-' + this.width + ' text-' + this.alignment;
    }
    return 'kt-datatable__column col text-' + this.alignment;

  }

  @Input('width') width: number;
  @Input('align') alignment: 'left' | 'center' | 'right' = 'left';
  constructor() { }

  ngOnInit(): void {
  }

}
