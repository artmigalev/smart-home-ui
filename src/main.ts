import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

try {
  bootstrapApplication(App, appConfig);
} catch (error) {
  console.error(error);
}
