import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRowComponent } from './list-row/list-row.component';
import { ListColumnComponent } from './list-column/list-column.component';
import { ListActionComponent } from './list-action/list-action.component';
import { ListEmptyComponent } from './list-empty/list-empty.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { ListHeaderItemComponent } from './list-header/list-header-item/list-header-item.component';
import { NumberArrayPipeModule } from '../numberArray/number-array-pipe.module';



@NgModule({
  declarations: [
    ListComponent,
    ListRowComponent,
    ListColumnComponent,
    ListActionComponent,
    ListEmptyComponent,
    ListHeaderComponent,
    ListHeaderItemComponent
  ],
  imports: [
    CommonModule,
    NumberArrayPipeModule
  ],
  exports: [
    ListComponent,
    ListRowComponent,
    ListColumnComponent,
    ListActionComponent,
    ListEmptyComponent,
    ListHeaderComponent,
    ListHeaderItemComponent
  ]
})
export class ListModule { }
