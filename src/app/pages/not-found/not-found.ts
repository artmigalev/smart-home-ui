import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-not-found',
  imports: [MatCard, MatCardContent],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export default class NotFound {}
