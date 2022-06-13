import { Component, ElementRef } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profolio';
  constructor(private elementRef: ElementRef, private router: Router) {
    this.router.navigate(['/home']);
  }


  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'Black';
}


}
