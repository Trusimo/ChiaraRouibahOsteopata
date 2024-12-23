import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.css']
})
export class ContattiComponent implements OnInit {
  isContactsVisible: boolean = false;
  faWa = faWhatsapp;
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faCalendar = faCalendar;
  userForm: FormGroup;


  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nome: [''],
      cognome: [''],
      email: [''],
      tel: [''],
      messaggio: ['']
    });
  }

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

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.sendEmail(this.userForm.value);
    }
  }

  sendEmail(formData: any) {
    const emailBody = `
      Nome paziente: ${formData.nome}
      Cognome paziente: ${formData.cognome}
      Email: ${formData.email}
      Telefono: ${formData.tel}
      Richiesta: ${formData.messaggio}
    `;
    window.location.href = `mailto:chiara.rouibah98@gmail.com?subject=Richiesta Informazioni&body=${encodeURIComponent(emailBody)}`;
  }

}
