// menu-item.model.ts
export interface MenuItem {
  path: string;
  icon: string;
  label: string;
  exact: boolean; // Rendons la propriété obligatoire
  children?: {
    path: string;
    label: string;
  }[];
}
