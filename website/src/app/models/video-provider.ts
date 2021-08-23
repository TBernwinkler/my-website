import {Video} from './video';
import videosMetal from '@app/data/rock-metal.json';
import videosMainstream from '@app/data/mainstream.json';
import videosElectro from '@app/data/techno.json';
import videosAlbum from '@app/data/mixes.json';
import videosPersonal from '@app/data/personal.json'

export class VideoProvider {
  private static musicSuggestions: Array<Video> = videosMetal;
  private static mainstreamSuggestions: Array<Video> = videosMainstream;
  private static electroSuggetsions: Array<Video> = videosElectro;
  private static albumSuggestions: Array<Video> = videosAlbum;
  private static personalMusic: Array<Video> = videosPersonal;
  private static genres: Array<string> = [ 'Rock & Metal', 'Mainstream & Party', 'Electronic & Techno', 'Albums & Mixes', 'Developer Playlist'];

  constructor() {
  }

  public static provideGenreTracks(genre: string) {
    let selection: Array<Video> = this.musicSuggestions;
    switch (genre) {
      case this.genres[1]:
        selection = this.mainstreamSuggestions;
        break;
      case this.genres[2]:
        selection = this.electroSuggetsions;
        break;
      case this.genres[3]:
        selection = this.albumSuggestions;
        break;
      case this.genres[4]:
        selection = this.personalMusic;
        break;
    }
    return selection;
  }

  public static getGenres() {
    return this.genres;
  }

  public static getNthTrackElement(index: number) {
    return document.querySelector('#cdk-drop-list-0 > div:nth-child(' + (index + 1) + ')');
  }

}
