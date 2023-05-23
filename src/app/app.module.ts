import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListTableComponent } from './components/user-list/user-list-table/user-list-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateNewUserFormComponent } from './components/user-list/create-new-user-form/create-new-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRowClickableDirective } from './directives/user-row-clickable.directive';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserListComponent,
    UserListTableComponent,
    CreateNewUserFormComponent,
    UserRowClickableDirective,
    UserDetailsComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
