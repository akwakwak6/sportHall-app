import { Component, Input, OnInit } from '@angular/core';
import {SportHall} from 'src/app/models/sportHall.model'

@Component({
  selector: 'app-card-sport-hall',
  templateUrl: './card-sport-hall.component.html',
  styleUrls: ['./card-sport-hall.component.scss'],
})
export class CardSportHallComponent implements OnInit {

  @Input() sh:SportHall ;

  constructor() { }

  ngOnInit() {}

}
