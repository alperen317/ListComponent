import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListModule } from './list/list.module';
import { NumberArrayPipeModule } from './numberArray/number-array-pipe.module';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    ListModule,
    NumberArrayPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
