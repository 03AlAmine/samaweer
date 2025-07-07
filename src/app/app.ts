import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ important
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ attention au "s"
})

export class App {
  protected title = 'samaweer';
}
