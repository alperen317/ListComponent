import { Component, OnInit, ChangeDetectionStrategy, ContentChild, Input } from '@angular/core';
import { ListHeaderComponent } from './list-header/list-header.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @ContentChild(ListHeaderComponent, { static: true }) listHeader: ListHeaderComponent;
  @Input('empty') empty: boolean = false;
  @Input('loading') loading: boolean = false;
  @Input('loadingSize') loadingSize: number = 0;
  @Input('selectedItems') selectedItems: Array<any>;

  constructor() { }

  ngOnInit(): void {


  }
  test() {
    const header = document.getElementsByTagName('app-list-header-item');
    const row = document.getElementsByTagName('app-list-row');
    for (let i = 0; i < header.length; i++) {
      const headerElement = header[i] as HTMLElement;
      if (this.selectedItems.includes(i)) {
        headerElement.style.display = 'none';
      } else {
        headerElement.style.display = 'inline';
      }
    }
    for (let i = 1; i < row.length; i++) {
      let element;
      for (let j = 0; j < header.length; j++) {
        if (this.selectedItems.includes(j)) {
          element = row[i].childNodes[j + 1] as HTMLElement;
          element.style.display = 'none';
        } else {
          element = row[i].childNodes[j + 1] as HTMLElement;
          element.style.display = 'inline';
        }

      }

    }

  }
}
