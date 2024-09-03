import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'FAQ-Accordion';

  VisibilityStates: { [key: string]: boolean } = {
    question1: true,
    question2: false,
    question3: false,
    question4: false,
  };

  buttonVisibility: { [key: string]: boolean } = {
    button1: false,
    button2: true,
    button3: false,
    button4: true,
    button5: false,
    button6: true,
    button7: false,
    button8: true,
  };

  toggleVisiblilty(elementkey: string) {
    this.VisibilityStates[elementkey] = !this.VisibilityStates[elementkey];
  }
  toggleButtonVisibility(elementkey1: string, elementkey2: string) {
    this.buttonVisibility[elementkey1] = !this.buttonVisibility[elementkey1];
    this.buttonVisibility[elementkey2] = !this.buttonVisibility[elementkey2];
  }
}
