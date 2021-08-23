import {Action} from '@ngrx/store';
import {Video} from '@app/models';

export const ADD_VIDEO     = '[VIDEO] Add';
export const REMOVE_VIDEO  = '[VIDEO] Remove';
export const ADD_VIDEOS    = '[VIDEO] Multi Add';
export const CLEAR_VIDEOS = '[VIDEO] Clear';

export class AddVideo implements Action {
  readonly type = ADD_VIDEO;

  constructor(public payload: Video) {
  }
}

export class RemoveVideo implements Action {
  readonly type = REMOVE_VIDEO;

  constructor(public payload: number) {
  }
}

export class AddVideos implements Action {
  readonly type = ADD_VIDEOS;

  constructor(public payload: Video[]) {
  }
}

export class ClearVideos implements Action {
  readonly type = CLEAR_VIDEOS;

}

export type Actions = AddVideo | RemoveVideo | AddVideos | ClearVideos;
