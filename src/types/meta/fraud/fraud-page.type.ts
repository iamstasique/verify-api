export type IsLcd = {
  /**
   * Possible values: <= 1.
   * The score shows how confident the model is that the predicted value belongs to the field.
   * See confidence scores explained for more information. Returned with confidence_details: true.
   */
  score?: number;

  /**
   * The extracted value.
   */
  value: boolean;
};

export type FraudPage = {
  is_lcd: IsLcd[];
};
