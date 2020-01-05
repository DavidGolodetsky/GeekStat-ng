import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatRippleModule,
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatRippleModule,
    ]
})
export class MaterialModule { }