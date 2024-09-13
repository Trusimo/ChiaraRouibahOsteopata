import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {
  activeFaq: number | null = null;

  ngAfterViewInit() {
    // Add the animation class to the h2
    const header = document.querySelector('h2') as HTMLElement;
    const faqSection = document.querySelector('.faq-section') as HTMLElement;

    // Make header visible
    header.classList.add('visible');

    // Add a delay for each FAQ item
    faqSection.style.opacity = '1';
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, 250 * index);
    });
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }
}
