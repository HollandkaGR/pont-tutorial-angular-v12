import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicsModule } from './basics/basics.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, BasicsModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
