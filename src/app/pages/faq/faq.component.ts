import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements AfterViewInit {
  activeFaq: number | null = null;

  ngAfterViewInit() {
    const header = document.querySelector('h2') as HTMLElement;
    const faqSection = document.querySelector('.faq-section') as HTMLElement;

    // Make FAQ section visible immediately
    faqSection.style.opacity = '1';

    // Add a small delay before making the h2 visible to ensure proper animation
    setTimeout(() => {
        header.classList.add('visible');
    }, 100); // 100ms delay to allow the rendering to complete

    // Add a delay for each FAQ item
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
