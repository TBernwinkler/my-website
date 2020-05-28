export class Renditions {

  constructor(mobile: string, tablet: string, tabletLandscape: string, desktop: string, extraLarge: string) {
    this.mobile = mobile;
    this.tablet = tablet;
    this.tabletLandscape = tabletLandscape;
    this.desktop = desktop;
    this.extraLarge = extraLarge;
  }

  mobile: string;
  tablet: string;
  tabletLandscape: string;
  desktop: string;
  extraLarge: string;
}
