import { Component, OnInit } from '@angular/core';
import {DialogLevel, Video} from '@app/models';
import {DialogService, VideoManagerService} from '@app/services';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  private regularYouTubeBaseUrl = 'https://www.youtube.com/watch?v=';
  private youTubeShareBaseUrl = 'https://youtu.be/';

  public inputVideoId = '';
  public inputInterpret = '';
  public inputTrack = '';
  public inputDurationMin = 0;
  public inputDurationSec = 90;
  private addVideoErrorDialogHeadline = 'Could not add video'; // translate
  private duration: number;

  constructor(private dialogService: DialogService, private videoManagerService: VideoManagerService) { }

  ngOnInit(): void {
  }

  /**
   * Adds a new video to the currently active list of videos and resets the input fields
   */
  addNewVideo() {
   if (this.preprocessInput()) {
     const video: Video = {
        artist: this.inputInterpret,
        track: this.inputTrack,
        youtube: this.inputVideoId,
        duration: this.duration
      };
      this.videoManagerService.addVideoToActiveList(video);
      this.inputInterpret = '';
      this.inputTrack = '';
      this.inputVideoId = '';
      this.inputDurationSec = 0;
      this.inputDurationMin = 0;
    } else {
      this.handleMissingInput();
    }
  }

  /**
   * This method validates and preprocesses all input fields, that are related to adding a video to
   * the currently active video list.
   */
  private preprocessInput(): boolean {
    if (this.inputVideoId && this.inputInterpret && this.inputTrack && (this.inputDurationSec > 0 || this.inputDurationMin > 0)) {
      if (this.inputDurationMin <= 0) {
        this.inputDurationMin = 0;
      }
      this.duration = 60 * this.inputDurationMin + this.inputDurationSec;
      if (this.inputVideoId.startsWith(this.regularYouTubeBaseUrl)) {
        this.inputVideoId = this.inputVideoId.replace(this.regularYouTubeBaseUrl, '');
      }
      if (this.inputVideoId.startsWith(this.youTubeShareBaseUrl)) {
        this.inputVideoId = this.inputVideoId.replace(this.youTubeShareBaseUrl, '');
        if (this.inputVideoId.indexOf('?t=') !== -1) {
          this.inputVideoId = this.inputVideoId.replace('?t=', '?start=');
        }
      }
      return true;
    }
    return false;
  }

  /**
   * In case one or multiple mandatory input fields have not been filled in, an appropriate error message will
   * show in a new dialog window. Error messages will only complain about fields, that are actually violating
   * input requirements
   * @private
   */
  private handleMissingInput(): void {
    let dialogMessage = '';
    if (!this.inputVideoId) {
      dialogMessage = '- Missing video id\n';
    }
    if (!this.inputInterpret) {
      dialogMessage += '- Missing interpret\n';
    }
    if (!this.inputTrack) {
      dialogMessage += '- Missing track\n';
    }
    if (!this.inputDurationSec) {
      dialogMessage += '- Missing video duration';
    }
    this.dialogService.openDialog(this.addVideoErrorDialogHeadline, dialogMessage, DialogLevel.Error);
  }
}
