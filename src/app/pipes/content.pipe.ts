import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentPipe'
})
export class ContentPipe implements PipeTransform {

  transform(books: any, term: any): any {
    if (term === undefined || term==="") {
      return books;
    }
    return books.filter(function (book) {
      return book.volumeInfo.title.toLowerCase().includes(term.toLowerCase());
    });
  }

}
