
import { Key } from './store/models/model';
import {createFeatureSelector} from '@ngrx/store';
import * as auth from './store/reducers/reducer';

export interface AppState {
  readonly key: Key;
}

export const reducers = {
  key: auth.reducer
};

export const selectAuthState = createFeatureSelector<AppState>('key');
