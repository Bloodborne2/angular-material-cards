import { provideRouter} from '@angular/router';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(routes), provideAnimationsAsync()  // Agora pode usar 'routes' porque foi importado antes
  ]
};


