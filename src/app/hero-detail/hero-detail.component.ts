import { Component, Input, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {Location} from "@angular/common";
import {HeroService} from "../hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => {this.hero = hero});
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

@Input() hero? : Hero;
}

