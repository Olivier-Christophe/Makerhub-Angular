import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleIndexComponent } from './pages/sample-index/sample-index.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryIndexComponent } from './pages/category-index/category-index.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategoryAddComponent } from './pages/category/category-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleAddComponent } from './pages/sample-add/sample-add.component';
import { SearchComponent } from './pages/search/search.component';
import { SampleEditionComponent } from './pages/sample-edition/sample-edition.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SurlignerDirective } from './shared/surligner.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleIndexComponent,
    CategoryIndexComponent,
    NavigationComponent,
    CategoryAddComponent,
    SampleAddComponent,
    SearchComponent,
    SampleEditionComponent,
    SurlignerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
