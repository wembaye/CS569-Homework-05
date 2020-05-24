import { Component,OnChanges, SimpleChanges, SimpleChange , Input } from '@angular/core';

@Component({
  selector: 'score',
  template: `
    <p>
     Score: Won {{win}}/Lost {{lose}}
     
    </p>
    <p>Computer choice was:{{computerPrev}}
  `,
  styles: ['p {font-size:35px']
})
export class ScoreComponent implements OnChanges {
  public computerPrev:String
@Input() win:number
@Input() lose:number
@Input() computer:String
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let i in changes) {
      let change = changes["computer"];
      let prevouse = change.previousValue
      this.computerPrev=prevouse;
      console.log(change, 'ccccccccccccccc')
      console.log(prevouse, 'pppppppppppppp')


    }
  }
 

}