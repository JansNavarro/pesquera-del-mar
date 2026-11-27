import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomInput } from './shared/components/custom-input/custom-input';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-embarcacion');
}
