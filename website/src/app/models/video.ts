export class Video {

  constructor(artist: string, track: string, youtube: string, duration: number) {
    this.artist = artist;
    this.track = track;
    this.youtube = youtube;
    this.duration = duration;
  }

  artist: string;
  track: string;
  youtube: string;
  duration: number; // in seconds
}
