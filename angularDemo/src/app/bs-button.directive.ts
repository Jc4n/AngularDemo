import { Directive,ElementRef,OnInit,Renderer,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {
  @Input() appBsButton;
  @Input() mouseDownClass; // 額外的@Input
  constructor(private el: ElementRef, private renderer: Renderer) { }
  ngOnInit() {
    const button = (this.el.nativeElement as HTMLElement);
    this.appBsButton = this.appBsButton || 'primary';
    this.mouseDownClass = this.mouseDownClass || 'danger';
    // button.classList.add('btn');
    // button.classList.add('btn-primary');
    //若不確定傳過來的是什麼，也有一個Renderer輔助類別，來幫助我們設定樣式，這個Renderer一樣需要透過注入的方式來使用
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton || 'primary'}`, true);
  }
  @HostListener('mousedown') onMouseDown() {
    // 移除原來的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, false);
    // 加入mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, true);
  }

  @HostListener('mouseup') onMouseUp() {
    // 移除mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, false);
    // 加入原來的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }
}
