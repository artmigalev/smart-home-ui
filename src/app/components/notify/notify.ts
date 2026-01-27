import { Component, input } from '@angular/core';
import { MatCard, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-notify',
  imports: [MatCard, MatCardTitle],
  templateUrl: './notify.html',
  styleUrl: './notify.scss',
})
export class Notify {
  message = input.required<string>();
}
