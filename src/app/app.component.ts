import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isContentVisible: boolean = false;
  isBackgroundVisible: boolean = false;
  isH1Visible: boolean = false;
  isH2Visible: boolean = false;
  isAboutVisible: boolean = false;
  isStudioVisible: boolean = false;
  isContactsVisible: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isBackgroundVisible = true;
    }, 500);

    setTimeout(() => {
      this.isContentVisible = true;
    }, 1000);

    setTimeout(() => {
      this.isH1Visible = true;
    }, 1500);

    setTimeout(() => {
      this.isH2Visible = true;
    }, 2000);
    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // Calcola la posizione della sezione "About" rispetto alla finestra di visualizzazione
    const aboutSectionOffset = this.el.nativeElement.querySelector('.bg-light').offsetTop;
    const studioSectionOffset = this.el.nativeElement.querySelector('.first-section-2').offsetTop;
    const contactsSectionOffset = this.el.nativeElement.querySelector('.bg-light-2').offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Verifica se la sezione "About" è nella visuale
    if (scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isAboutVisible = true;
    }

    if (scrollPosition >= studioSectionOffset - windowHeight / 2) {
      this.isStudioVisible = true;
    }

    if (scrollPosition >= contactsSectionOffset - windowHeight / 2) {
      this.isContactsVisible = true;
    }
  }
}
