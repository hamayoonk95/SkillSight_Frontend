export interface NavbarLink {
  label: string;
  route?: string;
  isVisible?: boolean;
  requiresAuthentication?: boolean;
  isLogout?: boolean;
}
