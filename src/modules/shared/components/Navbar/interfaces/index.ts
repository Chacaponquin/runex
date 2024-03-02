export interface NavbarLink {
  label: string;
  url: string;
  sections: Array<NavbarSubLink>;
}

export interface NavbarSubLink {
  label: string;
  url: string;
}
