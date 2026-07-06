export interface MenuItem {
  title: string;
  href: string;
}

export interface MenuColumn {
  heading: string;
  items: MenuItem[];
}

export interface MenuCategory {
  title: string;
  href: string;
  image: string;
  columns: MenuColumn[];
}
