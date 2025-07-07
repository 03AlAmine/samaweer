import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {
  @Input() sidebarOpen: boolean = true; // ✅ Ajout requis

  @Output() toggleSidebar = new EventEmitter<void>();

  isDropdownOpen = false;

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-profile')) {
      this.isDropdownOpen = false;
    }
  }
}
