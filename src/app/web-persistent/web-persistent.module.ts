import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [SidebarComponent, PaginationComponent],
  imports: [CommonModule],
  exports: [SidebarComponent],
})
export class WebPersistentModule {}
