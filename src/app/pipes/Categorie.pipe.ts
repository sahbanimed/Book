import { VolumeInfo } from './../assets/data/DataSetType';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Categoriepipe'
})
export class Categoriepipe implements PipeTransform {

 
  transform(books: any, term: any): any {
    if (term === undefined || term=="") {
      return books;
    }
    return books.filter(function (book) {
      return book.volumeInfo.categories==term;
    });
  }


}
