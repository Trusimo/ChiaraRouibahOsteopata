import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-recensioni',
  templateUrl: './recensioni.component.html',
  styleUrls: ['./recensioni.component.css']
})
export class RecensioniComponent implements OnInit {
  isReviewVisible: boolean = false;

  reviewsArray = [
    "../assets/images/Review (1).png",
    "../assets/images/Review (2).png",
    "../assets/images/Review (3).png",
    "../assets/images/Review (4).png",
    "../assets/images/Review (5).png"
  ];

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
  
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const reviewSectionOffset = this.el.nativeElement.querySelector('.first-section-3').offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.scrollY;

    if (scrollPosition >= reviewSectionOffset - windowHeight / 2) {
      this.isReviewVisible = true;
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
