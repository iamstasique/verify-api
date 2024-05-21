export enum MetaWarningTypes {
  TaxRateMissmatch = 'tax_rate_missmatch',
  ItemCountsMissmatch = 'item_counts_missmatch',
  TotalsMissmatch = 'totals_missmatch',
  LineItemAmountMissmatch = 'line_item_amount_missmatch',
  LineItemRepeats = 'line_item_repeats',
  BarcodeDecodingIssue = 'barcode_decoding_issue',
  BarcodeCodeMissingInOcr = 'barcode_code_missing_in_ocr',
  LogoVendorMissmatch = 'logo_vendor_missmatch',
  Malware = 'malware',
}

export type MetaWarning = {
  /**
   * Possible values:
   * [tax_rate_missmatch, item_counts_missmatch, totals_missmatch, line_item_amount_missmatch, line_item_repeats, barcode_decoding_issue, barcode_code_missing_in_ocr, logo_vendor_missmatch, malware]
   * Type of the warning, e.g. barcode_code_missing_in_ocr. Type is an enumerated field and comes from a defined number of enumerated values.
   */
  type: MetaWarningTypes;

  /**
   * Possible values: non-empty.
   * The detailed message about the warning.
   */
  message: string;
};
