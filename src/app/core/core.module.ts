import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
// import { httpInterceptorProviders } from '../interceptors';
import * as fr from '@angular/common/locales/fr';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    // httpInterceptorProviders,
  ],
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
