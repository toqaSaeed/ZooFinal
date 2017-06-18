import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalSearch'
})
export class AnimalSearchPipe implements PipeTransform {

  transform(value: any[], filterKey:string) {
    return value.filter(a=>a.NickName.toLowerCase().indexOf(filterKey)>-1);
  }

}
