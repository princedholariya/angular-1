import { Component , ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
   @ViewChild('contentDiv') textcontent!:ElementRef;
   ngAfterViewInit() {
    console.log(this.textcontent);
    // this.changeTextColor();
    // this.changeBackgroundColor();
  }

  changeTextColor() {
    
    
    if (this.textcontent) {
      this. textcontent.nativeElement.style.color = 'blue';
    }
  }

  changeBackgroundColor() {
    
    if (this.textcontent) {
      this. textcontent.nativeElement.style.backgroundColor = 'yellow';
    }
  }

 
}
