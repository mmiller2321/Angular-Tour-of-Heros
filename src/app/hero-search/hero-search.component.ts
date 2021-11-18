import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {  debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  // The $ is a convention that indicates the heroes$ is an Observable, not an array.
  heroes$!: Observable<Hero[]>;
  /* 
   * The searchTerms property is an RxJS Subject. 
   * A subject is both a source of observable values and an Observable itself.
   * You can subscribe to a subject as you would any observable. 
   * You can also push values into that Observable by calling its next(value) method as the search() method does.
   */
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // NgOnInit() method pipes the searchTerms observable through a sequence of RxJS operators that reduce the number of calls 
  // to the searchHeroes() method, ultimately returning an observable of timely hero search results (each a Hero[]).
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
