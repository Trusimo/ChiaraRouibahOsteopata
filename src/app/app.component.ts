import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isContentVisible: boolean = false;
  isBackgroundVisible: boolean = false;
  isH1Visible: boolean = false;
  isH2Visible: boolean = false;
  isNavbarVisible: boolean = false;
  applyTransition: boolean = false;
  isAboutVisible: boolean = false;
  isStudioVisible: boolean = false;
  isImgVisible: boolean = false;
  isText1Visible: boolean = false; // New variable
  isText2Visible: boolean = false;
  isText3Visible: boolean = false;
  isText4Visible: boolean = false;
  isStudioText1Visible: boolean = false;
  isStudioText2Visible: boolean = false;
  isStudioImg1Visible: boolean = false;
  visible: boolean = false;
  home: boolean = true;
  public href: string = "";
  faIg= faInstagram;
  faWa= faWhatsapp;
  showBackToTop: boolean = false;

  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkUrl();
    });

    setTimeout(() => {
      this.isBackgroundVisible = true;
    }, 500);

    setTimeout(() => {
      this.isContentVisible = true;
    }, 1000);

    setTimeout(() => {
      this.isH1Visible = true;
    }, 1500);

    if (window.location.pathname === '/homepage') {
      setTimeout(() => {
        this.isH2Visible = true;
        this.isNavbarVisible = true;
        this.applyTransition = true;
      }, 2000);
    } else {
      // Mostra la navbar senza transizione su altre pagine
      this.isH2Visible = true;
      this.isNavbarVisible = true;
    }

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const aboutSectionOffset = this.el.nativeElement.querySelector('.bg-light-1').offsetTop;
    const studioSectionOffset = this.el.nativeElement.querySelector('.first-section-2').offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.scrollY;

    if (scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isAboutVisible = true;
    }

    if (scrollPosition >= studioSectionOffset - windowHeight / 2) {
      this.isStudioVisible = true;
    }

    if (!this.isImgVisible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isImgVisible = true;
    }

    if (!this.isText1Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isText1Visible = true;
    }

    if (!this.isText2Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isText2Visible = true;
    }

    if (!this.isText3Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isText3Visible = true;
    }

    if (!this.isText4Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isText4Visible = true;
    }

    if (!this.isStudioText1Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isStudioText1Visible = true;
    }

    if (!this.isStudioText2Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isStudioText2Visible = true;
    }

    if (!this.isStudioImg1Visible && scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isStudioImg1Visible = true;
    }
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollPos > 500;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll liscio verso l'alto
    });
  }

  clickEvent() {
    this.visible = !this.visible;
    const icona = document.getElementById("nav-icon3");
    if (icona) {
      icona.classList.toggle("open");
    }
  }

  checkUrl() {
    this.href = this.router.url;
    if (this.href === '/homepage') {
      this.home = false;
    }
  }
}
