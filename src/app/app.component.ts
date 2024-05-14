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
  isNavbarVisible: boolean = false;
  isAboutVisible: boolean = false;
  isStudioVisible: boolean = false;
  isContactsVisible: boolean = false;
  isOsteoVisible: boolean = false;
  isReviewVisible: boolean = false;
  isImgVisible: boolean = false;
  isText1Visible: boolean = false; // New variable
  isText2Visible: boolean = false;
  isText3Visible: boolean = false;
  isText4Visible: boolean = false;
  isStudioText1Visible: boolean = false;
  isStudioText2Visible: boolean = false;
  isStudioImg1Visible: boolean = false;
  visible: boolean = false;
  reviewsArray = [
    "../assets/images/Review (1).png",
    "../assets/images/Review (2).png",
    "../assets/images/Review (3).png",
    "../assets/images/Review (4).png",
    "../assets/images/Review (5).png"
  ];

  constructor(private el: ElementRef) { }

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
      this.isNavbarVisible = true;
    }, 2000)

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const aboutSectionOffset = this.el.nativeElement.querySelector('.bg-light-1').offsetTop;
    const studioSectionOffset = this.el.nativeElement.querySelector('.first-section-2').offsetTop;
    const osteoSectionOffset = this.el.nativeElement.querySelector('.bg-light-2').offsetTop;
    const contactsSectionOffset = this.el.nativeElement.querySelector('.first-section-3').offsetTop;
    const reviewSectionOffset = this.el.nativeElement.querySelector('.bg-light-3').offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.scrollY;

    if (scrollPosition >= aboutSectionOffset - windowHeight / 2) {
      this.isAboutVisible = true;
    }

    if (scrollPosition >= studioSectionOffset - windowHeight / 2) {
      this.isStudioVisible = true;
    }

    if (scrollPosition >= contactsSectionOffset - windowHeight / 2) {
      this.isContactsVisible = true;
    }

    if (scrollPosition >= osteoSectionOffset - windowHeight / 2) {
      this.isOsteoVisible = true;
    }

    if (scrollPosition >= reviewSectionOffset - windowHeight / 2) {
      this.isReviewVisible = true;
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
  }

  clickEvent() {
    this.visible = !this.visible;
    const icona = document.getElementById("nav-icon3");
    if (icona) {
      icona.classList.toggle("open");
    }
  }

  activeIndex = 0; // Indice dell'elemento attivo nel carosello

  setActiveIndex(index: number) {
    this.activeIndex = index;
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.reviewsArray.length) % this.reviewsArray.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.reviewsArray.length;
  }
}
