import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmpleados } from './features/empleados/pages/list-empleados/list-empleados';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListEmpleados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-embarcacion');
}
