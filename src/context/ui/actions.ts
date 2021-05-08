/* eslint-disable import/prefer-default-export */
import { ActionSetUI } from './types';

export const actionSetUI = (payload: ActionSetUI['payload']): ActionSetUI => ({
  type: 'setUI',
  payload,
})
