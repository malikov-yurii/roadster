import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subject } from 'rxjs/Subject';

@Component({
  template: `
    <div class="popup-wrapper">
      <div class="popup-overlay" (click)="close()" [@fadeInOut]="animState"></div>
      <div class="popup" [@flyInOut]="animState">
        <div class="popup__head">
          Update customer
          
          <div class="popup__close" (click)="close()">
            <i class="material-icons">close</i>
          </div>
        </div>
        
        <div class="popup__loading" *ngIf="!hasData">
          <div class="popup__loading-text">Loading...</div>
          <img src="/assets/images/loading.svg" alt="" class="popup__loading-image">
        </div>
        
        <form
          *ngIf="hasData"
          [formGroup]="form"
          (ngSubmit)="onSubmit()"
        >
        
          <div class="popup__content">
            <div class="popup__formgroup">
              <label class="popup__label">ID</label>
              <div class="popup__input">{{ data.id }}</div>
            </div>
          
            <div class="popup__formgroup" *ngFor="let key of data | keys:['id']">
              <label class="popup__label" for="{{ key }}">{{ key }}</label>
              <input rows="1"  class="popup__input" id="{{ key }}" type="text" formControlName="{{ key }}">
            </div>
          </div>
          
          <div class="popup__btns">
            <button class="btn btn--warning popup__btn popup__btn--reset" type="button" (click)="reset()">
              <i class="material-icons">restore</i> Reset
            </button>
            <button class="btn popup__btn popup__btn--submit" type="submit">
              <i class="material-icons">save</i> Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .popup-wrapper,
    .popup-overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: auto;
    }
    
    .popup-overlay {
        background: rgba(0,0,0,.3);
    }
    
    .popup {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 550px;
        max-width: 100%;
        background: #fff;
        border: 1px solid #b9b9b9;
        border-radius: 4px;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.42);
    }
    
    .popup__head {
        position: relative;
        padding: 8px 16px;
        background: #f4f4f4;
        border-bottom: 1px solid #ccc;
        border-top-right-radius: 4px;
        border-top-left-radius: 4px;
        font-size: 22px;
    }
    
    .popup__close {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
    }
    
    .popup__close .material-icons {
        font-size: 19px;
    }
    
    .popup__close:hover {
        color: #555;
    }
    
    .popup__content {
        padding: 8px 16px;
        font-size: 15px;
    }
    
    .popup__formgroup {
        margin: 13px 0;
    }
    
    .popup__label {
        display: inline-block;
        vertical-align: middle;
        width: 36%;
    }
    
    .popup__input {
        display: inline-block;
        vertical-align: middle;
        width: 58%;
        margin: 0 0 0 4%;
        font-size: 15px;
    }
    
    input.popup__input {
        padding: 8px 0;
        border: 0;
        box-shadow: 0 .5px 0 0 #ccc;
        font: inherit;
        resize: none;
        transition: box-shadow .15s linear;
    }
    
    input.popup__input:hover {
        box-shadow: 0 .8px 0 0 #000;
    }
    
    input.popup__input:focus {
        outline: none;
        box-shadow: 0 .8px 0 0 #00bcd4;
    }
    
    .popup__btns {
        padding: 3px 16px 16px;
        display: flex;
        justify-content: space-between;
    }
    
    .popup__btn {
        padding: 7px 10px;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.26);
    }
    
    .popup__btn .material-icons {
        font-size: 17px;
        display: inline-block;
        vertical-align: sub;
        margin: 0 5px 0 0;
    }
    .popup__loading {
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
    }
    
    .popup__loading-text {
        width: 100%;
        font-size: 16px;
        text-align: center;
    }
    
    .popup__loading-image {
        max-width: 70px;
    }
  `],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(100, style({opacity: 1}))
      ]),
      transition('* => destroying', [
        animate(100, style({opacity: 0}))
      ])
    ]),
    trigger('flyInOut', [
      transition(':enter', [
        style({opacity: 0, transform: 'translate(-50%, -60%)'}),
        animate(100)
      ]),
      transition('* => destroying', [
        animate(100, style({transform: 'translate(-50%, -70%)'}))
      ])
    ])
  ],
})
export class PopupComponent {
  private data = {};
  private form: FormGroup;
  private hasData: boolean = false;
  private animState: string = 'displaying';
  public destroyedStream = new Subject();
  public submittedStream = new Subject();

  constructor(private formBuilder: FormBuilder) {}

  provideWithData(data: {any}) {
    this.data = data;
    this.hasData = true;
    this.form = this.formBuilder.group(data);
  }

  onSubmit() {
    this.submittedStream.next(this.form.value);
    this.close();
  }

  close() {
    this.animState = 'destroying';
    this.destroyedStream.next();
  }

  reset() {
    this.form.reset(this.data);
  }
}
