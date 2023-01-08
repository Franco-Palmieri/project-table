import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {
  subscribeObs: any;

  constructor() { }

  ngOnInit(): void {
    this.subscribeObs = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count)
        count++
      }, 1000)
    }).subscribe(num => {
      console.log(num)
    })
  }
  ngOnDestroy(): void {
    this.subscribeObs.unsubscribe();
  }

}
