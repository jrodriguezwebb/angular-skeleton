
// import { Observable } from 'rxjs/Observable';
// import { TranslateLoader } from '@ngx-translate/core';

// import { Observable } from 'rxjs/internal/Observable';
/* import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/internal/operators/map';
import { zip } from 'rxjs/internal/observable/zip';
import { HttpClient } from '@angular/common/http';

export class TranslationLoader implements TranslateLoader {
  translations: Array<string> = [];

  constructor(
    private http: HttpClient,
    private source: Array<any> = ['./assets/i18n/']
  ) {}

  public getTranslation(lang: string): any {
    if (this.translations[lang]) {
      return of(this.translations[lang]);
    } else {
      return zip(
        ...this.source.map(e => this.http.get(`${e}${lang}.json`).pipe(map(res => res)),
        (...res) => {
          this.translations[lang] = Object.assign({}, ...res);
          return this.translations[lang];
        }
      ));
      //.catch(err => {
      //  if (lang === 'en') {
      //    return Observable.throw(err);
      //  } else {
      //    return Observable.of({}); // use EN
      //  }
      // });
    }
  }

} */
