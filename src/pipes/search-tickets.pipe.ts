import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTickets'
})
export class SearchTicketsPipe implements PipeTransform {

  transform(value: any[], filterKey:string ) {

    return value.filter(a=>a.Title.toLowerCase().indexOf(filterKey)>-1 );
 
  }
}
