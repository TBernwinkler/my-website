import {Video} from '@app/models';
import * as VideoActions from '@app/actions/video.action'
import videosMetal from '@app/data/rock-metal.json';

const initialState: Array<Video> = videosMetal;

export function reducer(state: Video[] = initialState, action: VideoActions.Actions) {
  switch (action.type) {
    case VideoActions.ADD_VIDEO:
      return [...state, action.payload];
    case VideoActions.REMOVE_VIDEO:
      const index = action.payload as number;
      state.splice(index, 1);
      return state;
    case VideoActions.ADD_VIDEOS:
      state = [...state, ...action.payload];
      return state;
    case VideoActions.CLEAR_VIDEOS:
      return [];
    default:
      return state;
  }
}
