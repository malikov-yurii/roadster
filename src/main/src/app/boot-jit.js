//import { NgModule, enableProdMode, LOCALE_ID } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpModule } from '@angular/http';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { App, routes, KeysPipe, SearchPipe, Store } from './index';
//import { OrdersComponent, ProductsComponent, CustomersComponent } from './containers/index';
//import { Header, AutocompleteList, Pagination, PopupComponent, Filter, FilterStatic, NotyComponent } from './ui/index';
//import { HotkeysDirective, Autocomplete, ContenteditableModel } from './directives/index';
//import { environment } from './environment';
//import { ApiService, CustomerService, NotyService, OrderService, ProductService, SearchService, StoreHelper} from './services/index';
//
//@NgModule({
//  declarations: [
//    App,
//    Header,
//    OrdersComponent,
//    ProductsComponent,
//    CustomersComponent,
//    KeysPipe,
//    SearchPipe,
//    HotkeysDirective,
//    Autocomplete,
//    AutocompleteList,
//    ContenteditableModel,
//    Pagination,
//    PopupComponent,
//    Filter,
//    FilterStatic,
//    NotyComponent
//  ],
//  providers: [
//    { provide: LOCALE_ID, useValue: "ru-RU" },
//    Store,
//    ApiService,
//    CustomerService,
//    NotyService,
//    OrderService,
//    ProductService,
//    SearchService
//  ],
//  imports: [
//    BrowserModule,
//    BrowserAnimationsModule,
//    HttpModule,
//    FormsModule,
//    ReactiveFormsModule,
//    routes
//  ],
//  entryComponents: [AutocompleteList, PopupComponent, NotyComponent],
//  bootstrap: [App]
//})
//
//export class AppModule {}
//
//if (environment.production) {
//  enableProdMode();
//}
//platformBrowserDynamic().bootstrapModule(AppModule);