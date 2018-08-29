import { LanguePipe } from './pipes/LanguePipe';
import { AuthorPipe } from './pipes/Author.pipe';
import { Categoriepipe } from './pipes/Categorie.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AdDisplayBooksComponent } from './Views/ad-display-books/ad-display-books.component';
import { BookService } from './Services/book.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { ContentPipe } from "./pipes/content.pipe";
import {ModalModule} from "angular-custom-modal";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AdDisplayBooksComponent,
    ContentPipe,AuthorPipe,
    LanguePipe,Categoriepipe
  ],
  imports: [
    BrowserModule,routes,HttpClientModule,FormsModule,Ng2FilterPipeModule,ModalModule,NgbModule,
    MatAutocompleteModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
