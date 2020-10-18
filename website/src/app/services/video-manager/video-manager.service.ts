import { Injectable } from '@angular/core';
import {Video} from '@app/models';
import {VideoProvider} from '@app/models/video-provider';

@Injectable({
  providedIn: 'root'
})
export class VideoManagerService {

  constructor() { }

  private activeVideoList: Array<Video> = [];
  private availableVideoLists: Array<{genre: string, videos: Array<Video>}> = [];

  /**
   * This method initializes the service in case, it has not been used yet.
   * Initialization is expected to happen on initial page load and page refresh (e.g. pressing F5)
   * - Loads available genres and maps them to their video lists respectively
   * - Sets an initially active genre and video list to load videos from on page load
   * @private
   */
  private initialize(): void {
    if (!(this.availableVideoLists instanceof Array) || this.availableVideoLists.length === 0) {
      const genres: string[] = VideoProvider.getGenres();
      for (const genre of genres) {
        const videos = VideoProvider.provideGenreTracks(genre);
        this.availableVideoLists.push({genre, videos});
      }
      this.activeVideoList = VideoProvider.provideGenreTracks('default');
    }
  }

  /**
   * This method provides a list of videos based on the currently active genre
   * In case, genres are not available yet, initialization is triggered and necessary data is loaded
   */
  public getActiveVideoList(): Array<Video> {
    this.initialize(); // relevant conditions are checked in initialize
    return this.activeVideoList;
  }

  /**
   * This video provides the latest list of available genres. This inlcudes
   * - hard coded default genres
   * - overridden genres
   * - additionally added genres
   * All changes are lost on page reload
   */
  public getGenres(): Array<string> {
    this.initialize(); // relevant conditions are checked in initialize
    const genres = [];
    this.availableVideoLists.forEach(entry => genres.push(entry.genre));
    return genres;
  }

  /**
   * This method is used to
   * (a) change the active genre, which includes the active list of videos
   * (b) return the list of videos based on the selected genre
   * @param genre The genre, i.e. video list to switch to
   */
  public changeActiveGenre(genre: string): Array<Video> {
    if (genre) {
      const idx = this.availableVideoLists.findIndex(entry => entry.genre === genre);
      if (idx >= 0) {
        this.activeVideoList = this.availableVideoLists[idx].videos;
      }
    }
    return this.activeVideoList;
  }

  /**
   * This method maintains and/or extends available genres and connected video lists
   * If an existing video list is overridden - based on the genre name - the old list of videos is replaced by the one given
   * If the genre name does not exist in the list/map, a new entry is added. It is then possible to select the active genre
   * from an extended list of genres.
   * @param genre The genre name, which is represented in the select boxes (select genre and override genre)
   * @param videos The list of videos, that is loaded when the above mentioned genre has been selected
   * @param overrideEntry Defines whether an existing genre is to be overridden or if a new entry needs to be created
   */
  public addGenre(genre: string, videos: Array<Video>, overrideEntry: boolean): void {
    if (overrideEntry) {

      const idx = this.availableVideoLists.findIndex(entry => entry.genre === genre);
      if (idx >= 0) {
        this.availableVideoLists.splice(idx, 1, {genre, videos});
      } else {
        this.availableVideoLists.push({genre, videos});
      }
    } else {
      this.availableVideoLists.push({genre, videos});
    }
  }

  /**
   * Adds a new video to an existing genre and returns an existing list, that is mapped to the genre name
   * @param genre The genre the video is expected to be associated with
   * @param video The video, that should be added to an existing list
   */
  public addVideoToGenre(genre: string, video: Video): Array<Video> {
    const idx = this.availableVideoLists.findIndex(entry => entry.genre === genre);
    if (idx >= 0) {
      if (video.duration > 0 && video.artist && video.track && video.youtube) {
        this.availableVideoLists[idx].videos.push(video);
      }
      return this.availableVideoLists[idx].videos;
    }
    return this.getActiveVideoList();
  }
}
