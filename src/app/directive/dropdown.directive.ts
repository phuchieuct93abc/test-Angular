import { Directive, ElementRef, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export default class DropdownDirective implements OnInit {
    private isOpen = false;
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit(): void {
    }
    @HostBinding('class.open') get getIsOpen() {
        return this.isOpen;
    }
    @HostListener('click') onclick() {
        console.log('click')
        this.isOpen = true;
    }
}