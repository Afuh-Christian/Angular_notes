import { Injectable } from '@angular/core';

@Injectable()
export class ParentService {
  getBooks() {
    return [
      {
        name: "afuh"
      },
      {
        name: "afuh"
      },
      {
        name: "chris"
      },
      {
        name: "forkoum"
      },
      {
        name: "dele"
      },
      {
        name: "ali"
      },
      {
        name: "osman"
      }
    ]
  }
  constructor() { }
}
