import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';

appConfig.providers = [
  ...(appConfig.providers || []),
  importProvidersFrom(HttpClientModule),
];

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
