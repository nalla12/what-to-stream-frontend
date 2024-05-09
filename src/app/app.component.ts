import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {NavigationComponent} from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MatSlideToggle, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'what-to-stream-frontend';
}
