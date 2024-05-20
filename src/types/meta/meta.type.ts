import { Fraud } from './fraud/fraud.type';
import { MetaDuplicate } from './meta-duplicate.type';
import { MetaPage } from './meta-page.type';
import { MetaSourceDocument } from './meta-source-document.type';
import { MetaWarning } from './meta-warning.type';

export type Meta = {
  documents_per_page: number;
  page_number: number;
  total_pages: number;
  total_results: number;
};

export type DocumentMeta = {
  /**
   * Possible values: non-empty.
   * The API username for the account that processed the document.
   */
  owner: string;

  /**
   * The total number of pages found in the submitted document.
   */
  total_pages: number;

  /**
   * The number of processed pages for the document.
   * The default limit is 15 pages per document.
   * Use max_processed_pages on the POST request to update the limit.
   */
  processed_pages: number;

  /**
   * An array containing meta info about each extracted page
   */
  pages: MetaPage;

  /**
   * An array containing meta info about originally submitted documents
   */
  source_documents: MetaSourceDocument[];

  /**
   * An object that contains additional information to help check for fraud.
   * Does not work with the parameter boost_mode set to true.
   */
  fraud?: Fraud;

  /**
   * An array of warnings to help catch errors or fraud on the processed document.
   * This is also related to the integrity checks on a document such as subtotal not matching the sum of line item totals.
   * Does not work with the parameter boost_mode set to true.
   */
  warnings?: MetaWarning[];

  /**
   * Possible values: Value must match regular expression ^(total|subtotal|date|line_items\.\d{1,4}\.total)$
   * List of fields which were handwritten. Does not work with the parameter boost_mode set to true.
   */
  handwritten_fields?: string[];

  /**
   * Fingerprint of the device used to process the document.
   */
  device_id?: string;

  /**
   * A list of 10 closest matches.
   */
  duplicates?: MetaDuplicate[];

  /**
   * Possible values: [api.email, api.web, api, lens.bill, lens.invoice, lens.long_receipt, lens.other, lens.receipt, lens.web, lens]
   * Default value: api
   */
  source:
    | 'api.email'
    | 'api.web'
    | 'api'
    | 'lens.bill'
    | 'lens.invoice'
    | 'lens.long_receipt'
    | 'lens.other'
    | 'lens.receipt'
    | 'lens.web'
    | 'lens';

  /**
   * Possible values: non-empty.
   * Document languages in BCP-47 language tag, starting with the most confident prediction
   */
  language: string[];
};
