import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherAppComponent } from './weather-app/weather-app.component';

@Component({
  imports: [RouterModule, WeatherAppComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
}
