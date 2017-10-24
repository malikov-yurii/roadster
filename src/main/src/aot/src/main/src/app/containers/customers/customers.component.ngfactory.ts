/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '@angular/common';
import * as i2 from '../../../../../../../app/pipes/keys.pipe';
import * as i3 from '../../../../../../../app/containers/customers/customers.component';
import * as i4 from '@angular/forms';
import * as i5 from '../../ui/pagination/pagination.ngfactory';
import * as i6 from '../../../../../../../app/ui/pagination/pagination';
import * as i7 from '../../../../../../../app/services/customers.service';
import * as i8 from '../../../../../../../app/store';
const styles_CustomersComponent:any[] = ([] as any[]);
export const RenderType_CustomersComponent:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_CustomersComponent,data:{'animation':[{type:7,name:'slideToLeft',
        definitions:[{type:0,name:'void',styles:{type:6,styles:{},offset:(null as any)},
            options:(undefined as any)},{type:1,expr:':enter',animation:[{type:6,styles:{transform:'translateX(100%)',
            position:'fixed',width:'100%'},offset:(null as any)},{type:4,styles:{type:6,
            styles:{transform:'translateX(0%)'},offset:(null as any)},timings:'0.5s ease-in-out'}],
            options:(null as any)},{type:1,expr:':leave',animation:[{type:6,styles:{transform:'translateX(0%)',
            position:'fixed',width:'100%'},offset:(null as any)},{type:4,styles:{type:6,
            styles:{transform:'translateX(-100%)'},offset:(null as any)},timings:'0.5s ease-in-out'}],
            options:(null as any)}],options:{}},{type:7,name:'changeWidth',definitions:[{type:0,
        name:'collapsed',styles:{type:6,styles:{width:'*'},offset:(null as any)},options:(undefined as any)},
        {type:0,name:'expanded',styles:{type:6,styles:{width:'300px'},offset:(null as any)},
            options:(undefined as any)},{type:1,expr:'collapsed <=> expanded',animation:{type:4,
            styles:(null as any),timings:'.3s ease'},options:(null as any)}],options:{}}]}});
function View_CustomersComponent_2(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'td',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n          ','\n        ']))],(null as any),(_ck,_v) => {
    const currVal_0:any = (<any>_v.parent).context.$implicit[_v.context.$implicit];
    _ck(_v,1,0,currVal_0);
  });
}
function View_CustomersComponent_1(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),5,'tr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted((null as any),['\n        '])),(_l()(),i0.ɵand(16777216,(null as any),
      (null as any),2,(null as any),View_CustomersComponent_2)),i0.ɵdid(802816,(null as any),
      0,i1.NgForOf,[i0.ViewContainerRef,i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,
          'ngForOf']},(null as any)),i0.ɵppd(1),(_l()(),i0.ɵted((null as any),['\n      ']))],
      (_ck,_v) => {
        const currVal_0:any = i0.ɵunv(_v,3,0,_ck(_v,4,0,i0.ɵnov((<any>_v.parent),0),
            _v.context.$implicit));
        _ck(_v,3,0,currVal_0);
      },(null as any));
}
export function View_CustomersComponent_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[i0.ɵpid(0,i2.KeysPipe,([] as any[])),(_l()(),i0.ɵeld(0,(null as any),
      (null as any),56,'div',[['class','wrapper customers-page']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),['\n\n  '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),8,'div',[['class','service-block']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          5,'input',[['class','input customers-search pull-right'],['id',''],['name',
              'searchStream'],['placeholder','Search in customers...'],['type','text']],
          [[24,'@changeWidth',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'ngModelChange'],[(null as any),
              'focusin'],[(null as any),'focusout'],[(null as any),'input'],[(null as any),
              'blur'],[(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.CustomersComponent = _v.component;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,6)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,6).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,6)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,6)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            if (('ngModelChange' === en)) {
              const pd_4:any = ((<any>(_co.searchQuery = $event)) !== false);
              ad = (pd_4 && ad);
            }
            if (('focusin' === en)) {
              const pd_5:any = ((<any>_co.toggleAnimState()) !== false);
              ad = (pd_5 && ad);
            }
            if (('focusout' === en)) {
              const pd_6:any = ((<any>_co.toggleAnimState()) !== false);
              ad = (pd_6 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(16384,(null as any),0,i4.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i4.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵprd(1024,(null as any),i4.NG_VALUE_ACCESSOR,(p0_0:any) => {
        return [p0_0];
      },[i4.DefaultValueAccessor]),i0.ɵdid(540672,(null as any),0,i4.FormControlDirective,
          [[8,(null as any)],[8,(null as any)],[2,i4.NG_VALUE_ACCESSOR]],{form:[0,
              'form'],model:[1,'model']},{update:'ngModelChange'}),i0.ɵprd(2048,(null as any),
          i4.NgControl,(null as any),[i4.FormControlDirective]),i0.ɵdid(16384,(null as any),
          0,i4.NgControlStatus,[i4.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted((null as any),['\n  '])),(_l()(),i0.ɵted((null as any),['\n\n  '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),38,'div',[['class','table-container']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),
          35,'table',[['class','table table-customers']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),25,'thead',
          ([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,(null as any),
          (null as any),1,'th',[['class','headcell headcell--id']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['ID'])),(_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),1,'th',[['class','headcell headcell--name']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Name'])),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',[['class','headcell headcell--lastName']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted((null as any),['Last name'])),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',[['class',
          'headcell headcell--phone']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Phone'])),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',[['class',
          'headcell headcell--city']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['City'])),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',[['class',
          'headcell headcell--post']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Post'])),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',[['class',
          'headcell headcell--email']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted((null as any),['Email'])),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'th',[['class',
          'headcell headcell--comment']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i0.ɵted((null as any),['Comment'])),
      (_l()(),i0.ɵted((null as any),['\n      '])),(_l()(),i0.ɵted((null as any),['\n      '])),
      (_l()(),i0.ɵeld(0,(null as any),(null as any),5,'tbody',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵand(16777216,(null as any),(null as any),2,(null as any),
          View_CustomersComponent_1)),i0.ɵdid(802816,(null as any),0,i1.NgForOf,[i0.ViewContainerRef,
          i0.TemplateRef,i0.IterableDiffers],{ngForOf:[0,'ngForOf']},(null as any)),
      i0.ɵpid(131072,i1.AsyncPipe,[i0.ChangeDetectorRef]),(_l()(),i0.ɵted((null as any),
          ['\n      '])),(_l()(),i0.ɵted((null as any),['\n    '])),(_l()(),i0.ɵted((null as any),
          ['\n  '])),(_l()(),i0.ɵted((null as any),['\n\n  '])),(_l()(),i0.ɵeld(0,
          (null as any),(null as any),3,'pagination',([] as any[]),(null as any),[[(null as any),
              'dataChanged']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i3.CustomersComponent = _v.component;
            if (('dataChanged' === en)) {
              const pd_0:any = ((<any>_co.paginationChanged($event)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },i5.View_Pagination_0,i5.RenderType_Pagination)),i0.ɵdid(638976,(null as any),
          0,i6.Pagination,([] as any[]),{totalItems:[0,'totalItems'],pageLength:[1,
              'pageLength'],currentParentPage:[2,'currentParentPage']},{dataChanged:'dataChanged'}),
      i0.ɵpid(131072,i1.AsyncPipe,[i0.ChangeDetectorRef]),(_l()(),i0.ɵted((null as any),
          ['\n  '])),(_l()(),i0.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:i3.CustomersComponent = _v.component;
    const currVal_8:any = _co.searchStream;
    const currVal_9:any = _co.searchQuery;
    _ck(_v,8,0,currVal_8,currVal_9);
    const currVal_10:any = i0.ɵunv(_v,47,0,i0.ɵnov(_v,48).transform(_co.customers$));
    _ck(_v,47,0,currVal_10);
    const currVal_11:any = i0.ɵunv(_v,54,0,i0.ɵnov(_v,55).transform(_co.filteredCustomers$));
    const currVal_12:any = _co.pageLength;
    const currVal_13:any = _co.page;
    _ck(_v,54,0,currVal_11,currVal_12,currVal_13);
  },(_ck,_v) => {
    var _co:i3.CustomersComponent = _v.component;
    const currVal_0:any = _co.searchExpanded;
    const currVal_1:any = i0.ɵnov(_v,10).ngClassUntouched;
    const currVal_2:any = i0.ɵnov(_v,10).ngClassTouched;
    const currVal_3:any = i0.ɵnov(_v,10).ngClassPristine;
    const currVal_4:any = i0.ɵnov(_v,10).ngClassDirty;
    const currVal_5:any = i0.ɵnov(_v,10).ngClassValid;
    const currVal_6:any = i0.ɵnov(_v,10).ngClassInvalid;
    const currVal_7:any = i0.ɵnov(_v,10).ngClassPending;
    _ck(_v,5,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6,
        currVal_7);
  });
}
export function View_CustomersComponent_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,(null as any),(null as any),1,'ng-component',
      ([] as any[]),[[40,'@slideToLeft',0]],(null as any),(null as any),View_CustomersComponent_0,
      RenderType_CustomersComponent)),i0.ɵdid(245760,(null as any),0,i3.CustomersComponent,
      [i7.CustomerService,i8.Store],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(_ck,_v) => {
    const currVal_0:any = (undefined as any);
    _ck(_v,0,0,currVal_0);
  });
}
export const CustomersComponentNgFactory:i0.ComponentFactory<i3.CustomersComponent> = i0.ɵccf('ng-component',
    i3.CustomersComponent,View_CustomersComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvbWFsaWtvdi9JZGVhUHJvamVjdHMvb3Ntcy9zcmMvbWFpbi9zcmMvYXBwL2NvbnRhaW5lcnMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9tYWxpa292L0lkZWFQcm9qZWN0cy9vc21zL3NyYy9tYWluL3NyYy9hcHAvY29udGFpbmVycy9jdXN0b21lcnMvY3VzdG9tZXJzLmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvbWFsaWtvdi9JZGVhUHJvamVjdHMvb3Ntcy9zcmMvbWFpbi9zcmMvYXBwL2NvbnRhaW5lcnMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvbWFsaWtvdi9JZGVhUHJvamVjdHMvb3Ntcy9zcmMvbWFpbi9zcmMvYXBwL2NvbnRhaW5lcnMvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQudHMuQ3VzdG9tZXJzQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cIndyYXBwZXIgY3VzdG9tZXJzLXBhZ2VcIj5cblxuICA8ZGl2IGNsYXNzPVwic2VydmljZS1ibG9ja1wiPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hTdHJlYW1cIiBpZD1cIlwiXG4gICAgICAgICAgIGNsYXNzPVwiaW5wdXQgY3VzdG9tZXJzLXNlYXJjaCBwdWxsLXJpZ2h0XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaW4gY3VzdG9tZXJzLi4uXCJcbiAgICAgICAgICAgW0BjaGFuZ2VXaWR0aF09XCJzZWFyY2hFeHBhbmRlZFwiXG4gICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWFyY2hTdHJlYW1cIlxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlYXJjaFF1ZXJ5XCJcbiAgICAgICAgICAgKGZvY3VzaW4pPVwidG9nZ2xlQW5pbVN0YXRlKClcIlxuICAgICAgICAgICAoZm9jdXNvdXQpPVwidG9nZ2xlQW5pbVN0YXRlKClcIlxuICAgID5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInRhYmxlLWNvbnRhaW5lclwiPlxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWN1c3RvbWVyc1wiPlxuICAgICAgPHRoZWFkPlxuICAgICAgPHRoIGNsYXNzPVwiaGVhZGNlbGwgaGVhZGNlbGwtLWlkXCI+SUQ8L3RoPlxuICAgICAgPHRoIGNsYXNzPVwiaGVhZGNlbGwgaGVhZGNlbGwtLW5hbWVcIj5OYW1lPC90aD5cbiAgICAgIDx0aCBjbGFzcz1cImhlYWRjZWxsIGhlYWRjZWxsLS1sYXN0TmFtZVwiPkxhc3QgbmFtZTwvdGg+XG4gICAgICA8dGggY2xhc3M9XCJoZWFkY2VsbCBoZWFkY2VsbC0tcGhvbmVcIj5QaG9uZTwvdGg+XG4gICAgICA8dGggY2xhc3M9XCJoZWFkY2VsbCBoZWFkY2VsbC0tY2l0eVwiPkNpdHk8L3RoPlxuICAgICAgPHRoIGNsYXNzPVwiaGVhZGNlbGwgaGVhZGNlbGwtLXBvc3RcIj5Qb3N0PC90aD5cbiAgICAgIDx0aCBjbGFzcz1cImhlYWRjZWxsIGhlYWRjZWxsLS1lbWFpbFwiPkVtYWlsPC90aD5cbiAgICAgIDx0aCBjbGFzcz1cImhlYWRjZWxsIGhlYWRjZWxsLS1jb21tZW50XCI+Q29tbWVudDwvdGg+XG4gICAgICA8L3RoZWFkPlxuICAgICAgPHRib2R5PlxuICAgICAgPHRyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjdXN0b21lciBvZiBjdXN0b21lcnMkIHwgYXN5bmNcIlxuICAgICAgPlxuICAgICAgICA8dGRcbiAgICAgICAgICAqbmdGb3I9XCJsZXQga2V5IG9mIGN1c3RvbWVyIHwga2V5c1wiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBjdXN0b21lcltrZXldIH19XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cblxuICA8cGFnaW5hdGlvblxuICAgIFt0b3RhbF09XCJmaWx0ZXJlZEN1c3RvbWVycyQgfCBhc3luY1wiXG4gICAgW2xlbmd0aF09XCJwYWdlTGVuZ3RoXCJcbiAgICBbY3VycmVudF09XCJwYWdlXCJcbiAgICAoZGF0YUNoYW5nZWQpPVwicGFnaW5hdGlvbkNoYW5nZWQoJGV2ZW50KVwiXG4gID5cbiAgPC9wYWdpbmF0aW9uPlxuPC9kaXY+IiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDOEJRO01BQUEsd0VBRUM7YUFBQTtJQUFBO0lBQUE7Ozs7b0JBTEg7TUFBQSx3RUFFQzthQUFBLGdDQUNDO01BQUEsaUVBQUE7TUFBQTtVQUFBLGtDQUNFLElBR0c7O1FBSEg7WUFBQTtRQURGLFdBQ0UsU0FERjs7Ozt5REE5QlI7TUFBQTtNQUFBLDRDQUFvQztNQUVsQztVQUFBO01BQTJCLDJDQUN6QjtVQUFBO2NBQUE7VUFBQTtjQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFLTztjQUFBO2NBQUE7WUFBQTtZQUNBO2NBQUE7Y0FBQTtZQUFBO1lBQ0E7Y0FBQTtjQUFBO1lBQUE7WUFQUDtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtRQUFBO01BQUEsb0NBQUE7VUFBQTtjQUFBLDREQUFBO3VCQUFBLGdEQUFBO1VBQUEsaUVBUUM7aUJBQUEsMEJBQ0c7TUFFTjtVQUFBO01BQTZCLDJDQUMzQjtVQUFBO1VBQUEsNENBQXFDO1VBQUEsZUFDbkM7VUFBQTtNQUFPLDZDQUNQO1VBQUE7VUFBQSw0Q0FBa0M7VUFBQSxTQUFPLDZDQUN6QztVQUFBO1VBQUE7TUFBb0MseUNBQVM7TUFDN0M7VUFBQTtNQUF3Qyw4Q0FBYztVQUFBLGVBQ3REO1VBQUE7VUFBQSxnQkFBcUMsMENBQVU7VUFBQSxlQUMvQztVQUFBO1VBQUEsZ0JBQW9DLHlDQUFTO1VBQUEsZUFDN0M7VUFBQTtVQUFBLGdCQUFvQyx5Q0FBUztVQUFBLGVBQzdDO1VBQUE7VUFBQSxnQkFBcUMsMENBQVU7VUFBQSxlQUMvQztVQUFBO1VBQUEsOEJBQXVDO01BQVksNkNBQzNDO01BQ1I7VUFBQSwwREFBTztVQUFBLGVBQ1A7VUFBQSxtQ0FBQTsyQ0FBQTthQUNFLDZDQU9HO1VBQUEsZUFDRywyQ0FDRjtVQUFBLFdBQ0osMkNBRU47VUFBQTtjQUFBO1lBQUE7WUFBQTtZQUlFO2NBQUE7Y0FBQTtZQUFBO1lBSkY7VUFBQSx5REFBQTtVQUFBO2NBQUE7YUFDRSw2Q0FJRDtVQUFBLFdBQ1k7O0lBdkNKO0lBQ0E7SUFMUCxXQUlPLFVBQ0EsU0FMUDtJQXlCSTtJQURGLFlBQ0UsVUFERjtJQWNGO0lBQ0E7SUFDQTtJQUhGLFlBQ0UsV0FDQSxXQUNBLFVBSEY7OztJQWxDUztJQUhQO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsV0FHTyxVQUhQO1FBQUEsU0FBQTs7OztvQkNISjtNQUFBO21DQUFBLFVBQUE7TUFBQTtJQUFBOztJQUFBO0lBQUEsV0FBQSxTQUFBOzs7OyJ9
