export class Renditions {

  constructor(mobile: string, tablet: string, tabletLandscape: string, laptop: string, desktop: string, extraLarge: string) {
    this.mobile = mobile;
    this.tablet = tablet;
    this.tabletLandscape = tabletLandscape;
    this.laptop = laptop;
    this.desktop = desktop;
    this.extraLarge = extraLarge;
  }

  mobile: string;
  tablet: string;
  tabletLandscape: string;
  laptop: string;
  desktop: string;
  extraLarge: string;
}
