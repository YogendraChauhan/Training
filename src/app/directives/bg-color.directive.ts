import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective implements OnInit {
  @Input() bgColor: string;
  constructor(private elemRef: ElementRef) {

  }

  ngOnInit() {
    this.elemRef.nativeElement.style.backgroundColor = this.bgColor;
  }
}
