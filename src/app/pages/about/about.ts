import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import {
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
  MatCard,
  MatCardContent,
} from '@angular/material/card';

@Component({
  selector: 'app-about',
  imports: [
    MatList,
    MatListItem,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatCard,
    MatCardContent,
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
