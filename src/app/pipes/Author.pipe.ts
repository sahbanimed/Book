import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorPipe'
})
export class AuthorPipe implements PipeTransform {

 
  transform(books: any, term: any): any {
    if (term === undefined || term==="") {
      return books;
    }
    return books.filter(function (book) {
        return book.volumeInfo.authors==term;
    });
  }


}
