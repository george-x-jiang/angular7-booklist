import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatListModule, MatCardModule, MatButtonModule, MatTableModule, MatSelectModule, MatInputModule
} from '@angular/material';


@NgModule({
  imports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
  ]
})

export class MaterialModule {
}
