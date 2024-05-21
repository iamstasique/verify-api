import { FraudPage } from './fraud-page.type';

export enum FraudColors {
  Green = 'green',
  Yellow = 'yellow',
  Red = 'red',
}

export type Fraud = {
  /**
   * Possible values: non-empty.
   * Attribution of Fraud Detector's decision.
   */
  attribution?: string;

  /**
   * Possible values: non-empty.
   * Fraud Detector's decision.
   */
  decision?: string;

  /**
   * Color from Fraud Detector: green means legit, yellow means review needed and red means fraud
   */
  color: FraudColors;

  /**
   * An array containing fraud info about each extracted page
   */
  pages?: FraudPage[];

  /**
   * Possible values: <= 1.
   * Confidence of Fraud Detector in it's prediction
   */
  score?: number;

  /**
   * Possible values: non-empty.
   * The Fraud Detector version.
   * The latest version in action while the document was processed.
   * Different versions may have their own ways of calculating the score and deducing the color string value.
   */
  version: string;

  /**
   * Amount of submissions from specific device id
   */
  submissions: { [key: string]: string };
};
