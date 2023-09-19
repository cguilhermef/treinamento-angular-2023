import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import {NgFor} from "@angular/common";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
