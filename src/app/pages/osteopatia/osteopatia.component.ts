import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osteopatia',
  templateUrl: './osteopatia.component.html',
  styleUrls: ['./osteopatia.component.css']
})
export class OsteopatiaComponent implements OnInit {
  isOsteoVisible: boolean = false;
  isBackgroundVisible!: boolean;
  isH1OsteoVisible: boolean = false;
  isContent1Visible: boolean = false;
  isContent2Visible: boolean = false;

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
      this.isContent2Visible = true;
    }, 2000)
  }

}
