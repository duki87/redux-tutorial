import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers/index.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-redux';

  constructor(public store: Store<fromRoot.AppState>) {}
}
