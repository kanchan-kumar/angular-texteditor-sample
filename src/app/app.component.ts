import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  /**Cheking for git changes. */
  name = 'Angular';
   text:string = '{"query":{"count":10,"created":"2011-06-21T08:10:46Z","lang":"en-US","results":{"photo":[{"farm":"6","id":"5855620975","isfamily":"0","isfriend":"0","ispublic":"1","owner":"32021554@N04","secret":"f1f5e8515d","server":"5110","title":"7087 bandit cat"},{"farm":"4","id":"5856170534","isfamily":"0","isfriend":"0","ispublic":"1","owner":"32021554@N04","secret":"ff1efb2a6f","server":"3217","title":"6975 rusty cat"},{"farm":"6","id":"5856172972","isfamily":"0","isfriend":"0","ispublic":"1","owner":"51249875@N03","secret":"6c6887347c","server":"5192","title":"watermarked-cats"},{"farm":"6","id":"5856168328","isfamily":"0","isfriend":"0","ispublic":"1","owner":"32021554@N04","secret":"0c1cfdf64c","server":"5078","title":"7020 mandy cat"},{"farm":"3","id":"5856171774","isfamily":"0","isfriend":"0","ispublic":"1","owner":"32021554@N04","secret":"7f5a3180ab","server":"2696","title":"7448 bobby cat"}]}}}';
   options:any = {maxLines: 1000, printMargin: false};
   @ViewChild('editor') editor;

    constructor() {

      this.text = JSON.stringify(JSON.parse(this.text), null, 4);
    }

    ngAfterViewInit() {
      console.log("here .........");
      this.editor.setTheme("eclipse");

      this.editor.getEditor().setOptions({
          enableBasicAutocompletion: true
      });
    }
}
