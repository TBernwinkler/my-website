import {Component, OnInit, ViewChild} from '@angular/core';
import {DialogLevel, Video} from '@app/models';
import {DialogService, VideoManagerService} from '@app/services';
import {InputGroupComponent} from '@app/components/base-components';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  private regularYouTubeBaseUrl = 'https://www.youtube.com/watch?v=';
  private youTubeShareBaseUrl = 'https://youtu.be/';
  private addVideoErrorDialogHeadline = 'Could not add video'; // translate
  private duration: number = 0;

  @ViewChild('videoIdInput')
  videoIdInput!: InputGroupComponent;
  @ViewChild('interpretInput')
  interpretInput!: InputGroupComponent;
  @ViewChild('trackInput')
  trackInput!: InputGroupComponent;
  @ViewChild('videoLenHourInput')
  videoLenHourInput!: InputGroupComponent;
  @ViewChild('videoLenMinInput')
  videoLenMinInput!: InputGroupComponent;
  @ViewChild('videoLenSecInput')
  videoLenSecInput!: InputGroupComponent;

  constructor(private dialogService: DialogService, private videoManagerService: VideoManagerService) { }

  ngOnInit(): void {
  }

  /**
   * Adds a new video to the currently active list of videos and resets the input fields
   */
  addNewVideo() {
    const inputVideoId = this.videoIdInput.inputValue;
    const inputInterpret = this.interpretInput.inputValue;
    const inputTrack = this.trackInput.inputValue;
    const inputDurationSec: number = +this.videoLenSecInput.inputValue;
    const inputDurationMin: number = +this.videoLenMinInput.inputValue;
    const inputDurationHour: number = +this.videoLenHourInput.inputValue;

    const processedVideoId = this.preprocessInput(inputVideoId, inputInterpret, inputTrack,
      inputDurationSec, inputDurationMin, inputDurationHour);
    if (inputVideoId !== null) {
      const video: Video = {
        artist: inputInterpret,
        track: inputTrack,
        youtube: processedVideoId,
        duration: this.duration
      };
      this.videoManagerService.addVideoToActiveList(video);
      this.interpretInput.inputValue = '';
      this.trackInput.inputValue = '';
      this.videoIdInput.inputValue = '';
      this.videoLenSecInput.inputValue = '0';
      this.videoLenMinInput.inputValue = '0';
      this.videoLenHourInput.inputValue = '0';
    } else {
      this.handleMissingInput(inputVideoId, inputInterpret, inputTrack, inputDurationSec, inputDurationMin, inputDurationHour);
    }
  }

  /**
   * This method validates and preprocesses all input fields, that are related to adding a video to
   * the currently active video list.
   */
  private preprocessInput(inputVideoId: string, inputInterpret: string, inputTrack: string,
                          inputDurationSec: number, inputDurationMin: number, inputDurationHour: number): string {
    if (inputVideoId && inputInterpret && inputTrack && (inputDurationSec > 0 || inputDurationMin > 0 || inputDurationHour > 0)) {
      this.duration = 3600 * inputDurationHour + 60 * inputDurationMin + inputDurationSec;
      if (inputVideoId.startsWith(this.regularYouTubeBaseUrl)) {
        inputVideoId = inputVideoId.replace(this.regularYouTubeBaseUrl, '');
      }
      if (inputVideoId.startsWith(this.youTubeShareBaseUrl)) {
        inputVideoId = inputVideoId.replace(this.youTubeShareBaseUrl, '');
        if (inputVideoId.indexOf('?t=') !== -1) {
          inputVideoId = inputVideoId.replace('?t=', '?start=');
        }
      }
      return inputVideoId;
    }
    return '';
  }

  /**
   * In case one or multiple mandatory input fields have not been filled in, an appropriate error message will
   * show in a new dialog window. Error messages will only complain about fields, that are actually violating
   * input requirements
   * @private
   */
  private handleMissingInput(inputVideoId: string, inputInterpret: string, inputTrack: string,
                             inputDurationSec: number, inputDurationMin: number, inputDurationHour: number): void {
    let dialogMessage = '';
    if (!inputVideoId) {
      dialogMessage = '- Missing video id\n';
    }
    if (!inputInterpret) {
      dialogMessage += '- Missing interpret\n';
    }
    if (!inputTrack) {
      dialogMessage += '- Missing track\n';
    }
    if (!inputDurationSec && !inputDurationMin && !inputDurationHour) {
      dialogMessage += '- Missing video duration';
    }
    this.dialogService.openDialog(this.addVideoErrorDialogHeadline, dialogMessage, DialogLevel.Error);
  }
}
