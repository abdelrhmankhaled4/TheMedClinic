import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <div class="logo-container" [class.dark-mode]="darkMode">
      <div class="logo-main">
        <span class="logo-top">THE MED</span>
        <span class="logo-bottom">CLINICS</span>
      </div>
    </div>
  `,
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {
  @Input() darkMode: boolean = false;
}
