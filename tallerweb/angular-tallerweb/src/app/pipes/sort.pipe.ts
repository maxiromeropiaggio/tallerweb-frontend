import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(transactions: any[], tag: string, order: string): any[] {

    if (tag === 'source')
      if (order == 'asc') {
        transactions = transactions.sort((a, b) => a['ipn_response'][tag] > b['ipn_response'][tag] ? 1 : -1)
      } else {
        transactions = transactions.sort((a, b) => a['ipn_response'][tag] < b['ipn_response'][tag] ? 1 : -1)

      }
    else
      if (order == 'asc') {
        transactions = transactions.sort((a, b) => a[tag] > b[tag] ? 1 : -1)
      } else {
        transactions = transactions.sort((a, b) => a[tag] < b[tag] ? 1 : -1)

      }

    return transactions;

  }

}
