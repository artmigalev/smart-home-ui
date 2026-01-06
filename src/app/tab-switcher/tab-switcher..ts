import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-tab-switcher',
  imports: [MatButtonModule],
  standalone: true,
  templateUrl: './tab-switcher.html',
  styleUrl: './tab-switcher.scss',
})
export default class TabSwitcherComponent {}
