
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stafffilter'
})

export class StaffFilterPipe implements PipeTransform {
    transform(value: any[], filterKey:string): any {
        return value.filter(f=>f.staffType == filterKey);
    }
}