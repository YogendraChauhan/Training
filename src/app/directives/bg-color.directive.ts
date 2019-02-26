import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective implements OnInit {
  @Input() bgColor: string;
  @HostBinding('style.background-color') backgroundColor: string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.bgColor;
  }
}
