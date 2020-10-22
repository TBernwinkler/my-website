import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoManagerService} from '@app/services';
import {Video, VideoProvider} from '@app/models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete-video',
  templateUrl: './delete-video.component.html',
  styleUrls: ['./delete-video.component.scss']
})
export class DeleteVideoComponent implements OnInit, OnDestroy {

  trackList: Array<{name: string, value: string}> = [];
  selectedTracks: Array<string> = [];
  classActive = 'active'; // should be only defined once, currently also in music.component.ts
  private subscription: Subscription;

  constructor(private videoManagerService: VideoManagerService) { }

  ngOnInit(): void {
    this.subscription = this.videoManagerService.getListChangeEmitter()
      .subscribe(suggestions => this.prepareForSelection(suggestions));
    this.prepareForSelection(this.videoManagerService.getActiveVideoList());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Prior to opening the select box, all entries for the potential deletion of videos are lazy loaded
   */
  prepareForSelection(videos: Array<Video>) {
    this.trackList = [];
    if (videos instanceof Array && videos.length > 0) {
      videos.forEach(entry => {
        this.trackList.push({name: entry.artist + ' - ' + entry.track, value: entry.youtube});
      });
    }
  }

  removeVideosFromActiveList() {
    if (this.selectedTracks.length > 0) {
      this.videoManagerService.removeVideosFromGenre(this.selectedTracks);
    }
    this.selectedTracks = [];
  }

  /**
   * This method is currently also existing in music.component.ts
   * todo: figure out who to solve this without the duplicate method, if possible
   * @param index the number of the video... todo
   */
  isSelected(index: number): boolean {
    const selection = VideoProvider.getNthTrackElement(index);
    return !selection || index < 1 ? index === 0 : selection.classList.contains(this.classActive);
  }

}
