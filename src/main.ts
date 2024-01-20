// Angular core imports
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// JWT imports
import { JwtModule, JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

// Routes import
import { routes } from './app/app.routes';

// App imports
import { AppComponent } from './app/app.component';
import { jwtOptionsFactory } from './app/helpers/jwt-options.factory';

// Bootstrapping the Angular application
bootstrapApplication(AppComponent, {
  providers: [
    JwtHelperService,
    // Registering application routes
    importProvidersFrom(RouterModule.forRoot(routes)),
    // Registering other required modules
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(BrowserAnimationsModule),
    // JWT configuration
    { provide: JWT_OPTIONS, useFactory: jwtOptionsFactory },
    HttpClientModule,
    JwtModule,
  ],
}).catch((err) => console.error(err));
