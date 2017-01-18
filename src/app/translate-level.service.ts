import { Injectable } from '@angular/core';

@Injectable()
export class TranslateLevelService {

  constructor() { }

  translateLevel(level) {
    if (level == "UNKNOWN") {
      return "pas encore avéré";
    } else if (level == "KNOWN") {
      return "avéré";
    } else if (level == "SEVERE") {
      return "grave";
    }
  }
}
