import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  isContactsVisible: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const contactsSectionOffset = this.el.nativeElement.querySelector('.first-section-3').offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.scrollY;

    if (scrollPosition >= contactsSectionOffset - windowHeight / 2) {
      this.isContactsVisible = true;
    }
  }

}
