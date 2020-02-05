import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App01Component } from './app01.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [App01Component],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [App01Component]
})
export class App01Module {}
