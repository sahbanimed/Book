import { VolumeInfo } from './../../assets/data/DataSetType';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BookService } from '../../Services/book.service';
import { DataJSON } from '../../assets/data/DataSetType';
import { Item } from '../../assets/data/DataSetType';
import { ContentPipe } from '../../pipes/content.pipe';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ad-display-books',
  templateUrl: './ad-display-books.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./ad-display-books.component.css']
})
export class AdDisplayBooksComponent implements OnInit {

  //Book 
  public dataSet: DataJSON;
  public books: Item[] = [];
  public booksLanguage: Item[] = [];

  //Collapse
  public isCollapsed = true;
  public isCollapsedCategorie = true;

  //Filter
  volumeInfo = new VolumeInfo()
  bookFilter: any = { language: '', title: '', categories: '', authors: '', publisher: '' };

  constructor(private bookService: BookService, private modalService: NgbModal) {
    this.dataSet = new DataJSON();
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(
      response => {
      this.dataSet = response;
        for (const control of this.dataSet.items) {
          this.books.push(control);
        }
      }
    );
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  testinput() {
    this.books = [];
    this.bookService.getAllBooks().subscribe(
      response => {
      this.dataSet = response;
        for (const control of this.dataSet.items) {
          this.books.push(control);
        }
      }
    );
    var inputSearch = (<HTMLInputElement>document.getElementById("searchInput")).value;
    var list = this.books.filter(option => (option.volumeInfo.title.toLowerCase().includes(inputSearch.toLowerCase())) || (option.volumeInfo.language.toLowerCase().includes(inputSearch.toLowerCase())));
    this.books = [];
    for (const l of list) {
      this.books.push(l);
    } 
  }

}
