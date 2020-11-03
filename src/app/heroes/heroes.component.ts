import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock_heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selected_hero = this.heroes[0];

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSelect(hero : Hero){
	  this.selected_hero = hero;
  }

}
