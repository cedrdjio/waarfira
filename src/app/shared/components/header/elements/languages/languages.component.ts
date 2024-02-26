import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../../../services/nav.service';
export interface Language {
   code?: string;
   language?: string;
   type?: string;
   icon?: string;
}
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
  standalone: true,
})
export class LanguagesComponent implements OnInit {

  public language: boolean = false;

  public languages:Language[]= [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'pt'
  }]

  public selectedLanguage :Language ={
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  constructor(public navServices: NavService, private translate: TranslateService) { }
  //
  ngOnInit() {
  }

  changeLanguage(lang:Language) {
    this.translate.use(lang.code as string)
    this.selectedLanguage = lang;
  }

}
