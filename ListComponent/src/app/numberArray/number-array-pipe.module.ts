import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberArrayPipe } from './number-array.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NumberArrayPipe],
    exports: [NumberArrayPipe]
})
export class NumberArrayPipeModule { }
