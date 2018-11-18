import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appHightLight]'
})
export class HightLightDirective implements OnInit {
    constructor(private elmRef: ElementRef, private renderer: Renderer2) { }
    ngOnInit(): void {
    }
    @HostListener('mouseenter') mouseEnter(event: Event) {
        this.renderer.setStyle(this.elmRef.nativeElement, 'color', 'red');
    }
    @HostListener('mouseleave') mouseLeave(event: Event) {
        this.renderer.setStyle(this.elmRef.nativeElement, 'color', 'yellow');
    }
}