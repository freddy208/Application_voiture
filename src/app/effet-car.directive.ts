import { Directive, ElementRef ,HostListener } from '@angular/core';

@Directive({
  selector: '[voitureEffetCar]' ,
  standalone: true
})
export class EffetCarDirective {

  constructor(private el : ElementRef) {
    //this.setBorder('none')
    //this.setHeight(200)
   }

   @HostListener('mouseenter') onMouseEnter() {
      this.setBorder('#009688')
   }

   @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
   }

  private setBorder(color:string){
    let bordure =  'solid 3px' + color
    this.el.nativeElement.style.border = bordure
  }
  private setHeight(hg : number){
    this.el.nativeElement.style.height = `${hg}px` ;
  }

}
