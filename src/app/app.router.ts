import { AppComponent } from './app.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { AdDisplayBooksComponent } from './Views/ad-display-books/ad-display-books.component';

export const router: Routes =[
    {path : '',component : AdDisplayBooksComponent}
];

export const routes : ModuleWithProviders = RouterModule.forRoot(router);