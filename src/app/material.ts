import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatCardModule,
        MatButtonModule,
        MatTableModule
    ]
})
export class MaterialModule { }