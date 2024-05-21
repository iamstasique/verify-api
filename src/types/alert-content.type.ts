import { AlertTypes } from '../enums/alert-types.enum';

export type AlertContent = {
  type: AlertTypes;
  message: string;
};
