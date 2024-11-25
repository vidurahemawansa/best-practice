import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() set appHighlight(index: number) {
    const color = (index + 1) % 5 === 0 ? 'yellow' : '';
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
}
