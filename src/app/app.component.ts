import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {NavigationComponent} from './components/navigation/navigation.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {SearchComponent} from './components/search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MatSlideToggle, NavigationComponent, DashboardComponent, ToolbarComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'what-to-stream-frontend';
}
