import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-cloudicon',
  templateUrl: './cloudicon.component.html',
  styleUrls: ['./cloudicon.component.css']
})
export class CloudiconComponent  {
  @Input() temp;
  @Input() iconimg;
  @Input() farenheit;
  @Input() city;
  f =false;
  c=true;
 
  faren() {
    this.f=true;
    this.c=false
   
  }
  celci() { 
   
    this.c=true
    this.f=false;
  }
}
