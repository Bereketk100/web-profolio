import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public title = 'hello-world';
  public name = 'Bereket';
  public company = 'Microsoft'
  public fail = 'text_fail';
  public hasError = true;
  public clickedOn = false;
  imageSrc = '\Angular\hello-world\src\bkt.png'  
  imageAlt = 'iPhone'

  public firstObject =  {
    "text_success": true,
     "text_fail": false,
     "text_bool": false

  }

  constructor() {}

  checkTruth(value: any){
    if(value != 21){
      console.log("INCORRECT")
    } else {
      console.log("correct")
    }

  }


  clicked(){
    this.clickedOn = true;
    console.log("Button should be highlighted");
  }

  logMessage(value: any) {
    console.log(value);
  }
}
