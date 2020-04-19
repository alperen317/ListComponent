import { Component, OnInit, ContentChildren, QueryList, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import { ListActionComponent } from '../list-action/list-action.component';

@Component({
  selector: 'app-list-row',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListRowComponent implements OnInit {
  @ContentChildren(ListActionComponent) actionList: QueryList<ListActionComponent>;
  @HostBinding('class') get class() {

    return 'kt-datatable__row row';

  }
  @Input('chevron') chevron: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
