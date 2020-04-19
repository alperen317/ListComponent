import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'numberArray'
})
export class NumberArrayPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value)
            return [];
        return Array.from(Array(value), (x, i) => i);
    }

}
