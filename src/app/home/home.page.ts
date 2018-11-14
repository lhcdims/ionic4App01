import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public homeTitle : string = "1234";
  constructor(private _translate: TranslateService) {
    this._initialiseTranslation();
  }

  /**
   * Translate the page texts to the selected language value
   *
   * @private
   * @method _initialiseTranslation
   * @return {none}
   */
  private _initialiseTranslation() : void
  {
    this.homeTitle = this._translate.instant("home.Title");
    //  setTimeout(() =>
    //  {
        
    //  }, 250);
  }
}

