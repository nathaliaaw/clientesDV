import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup implements OnInit{
  @Input() datepicke;
  constructor    (){}
  ngOnInit(){}
}
