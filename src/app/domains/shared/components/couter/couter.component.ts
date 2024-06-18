import {Component, Input, signal, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.css'
})
export class CouterComponent {

  @Input({required:true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef : number | undefined;
  constructor() {
    //NO ASYNC
    // BEFORE RENDER
    // una vez
    console.log("constructor");
    console.log("-".repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during render
    console.log("ngOnChanges");
    console.log("-".repeat(10));
    console.log(changes);

    const duration = changes['duration'];
    if(duration && duration.currentValue !== duration.previousValue){
      this.doSomething();
    }
    console.log(duration);
  }

  ngOnInit(){
    // Iniciardor de componente
    // after render
    // corre una vez
    // ASYNC, then, subs
    console.log('ngOnInit');
    console.log("-".repeat(10));
    console.log('duration =>', this.duration)
    console.log('message =>', this.message);

    this.counterRef = window.setInterval(()=>{
      console.log('run interval');
      this.counter.update(statePrev => statePrev + 1);
    },1000);
  }

  ngAfterViewInit(){
    // after render
    // pregunta si los hijos de este componentes ya fueron pintados
    console.log('ngAfterViewInit');
    console.log("-".repeat(10));
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    console.log("-".repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething(){
    // async podria
    console.log('change duration');
  }

}
