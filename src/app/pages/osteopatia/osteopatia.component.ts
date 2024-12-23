import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-osteopatia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './osteopatia.component.html',
  styleUrls: ['./osteopatia.component.css']
})
export class OsteopatiaComponent implements OnInit {
  isOsteoVisible: boolean = false;
  isBackgroundVisible!: boolean;
  isH1OsteoVisible: boolean = false;
  isContent1Visible: boolean = false;
  isContent2Visible: boolean = false;
  isH2Visible: boolean = false;
  showBackToTop: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isBackgroundVisible = true;
    }, 200);

    setTimeout(() => {
      this.isH1OsteoVisible = true;
    }, 500);

    setTimeout(() => {
      this.isContent1Visible = true;
    }, 1500);

    setTimeout(() => {
      this.isH2Visible = true;
    }, 2000);

    setTimeout(() => {
      this.isContent2Visible = true;
    }, 2300)
  }

    // Metodo per scrollare verso l'alto
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Scroll liscio verso l'alto
      });
    }
  
    // Ascolta lo scroll della finestra
    @HostListener("window:scroll", [])
    onWindowScroll() {
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      // Il pulsante apparirà quando lo scroll supera i 300px
      this.showBackToTop = scrollPos > 500;
    }

}
