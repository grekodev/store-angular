import {Component, signal} from '@angular/core';
import {CouterComponent} from "@shared/components/couter/couter.component";

import {WaveAudioComponent} from "../../components/wave-audio/wave-audio.component";
import {HighlightDirective} from "@shared/directives/highlight.directive";
import {HeaderComponent} from "@shared/components/header/header.component";
import {ProductComponent} from "@products/components/product/product.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CouterComponent,
    WaveAudioComponent,
    HighlightDirective,
    HeaderComponent,
    ProductComponent
],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

  duration = signal(1000);
  mensaje = signal("hola");

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessage(event: Event){
    const input = event.target as HTMLInputElement;
    this.mensaje.set(input.value);
  }

}
