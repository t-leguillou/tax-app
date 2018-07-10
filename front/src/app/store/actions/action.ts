import { Action } from '@ngrx/store';

export const ADD_KEY       = '[KEY] Success';
export const REMOVE_KEY    = '[KEY] Failure';

export class AddKey implements Action {
  readonly type = ADD_KEY;

  constructor(public payload: any) {}
}

export class RemoveKey implements Action {
  readonly type = REMOVE_KEY;

  constructor(public payload: any) {}
}

export type Actions = AddKey | RemoveKey;
