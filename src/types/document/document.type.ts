import { CurrencyCode } from './currency-code.type';
import { DocumentMeta } from '../meta/meta.type';
import { DocumentStatus } from './document-status.type';
import { LineItem } from './line-item.type';
import { Barcode } from '../barcode/barcode.type';
import { BillTo } from '../bill-to/bill-to.type';

export enum AccountingEntryType {
  Debit = 'debit',
  Credit = 'credit',
}

export type Document = {
  /**
   * Possible values: non-empty and <= 2083 characters
   * A signed URL to access the auto-generated PDF created from the submitted document.
   * This URL expires 15 minutes after the response object is returned and is resigned during every GET request.
   */
  pdf_url?: string;

  /**
   * The unique number created to identify the document.
   */
  id: number;

  /**
   * Possible values: [debit, credit]
   */
  accounting_entry_type?: AccountingEntryType;

  /**
   * The date and time the invoice or receipt was first submitted and processed in ISO 8601 format.
   */
  created_date?: string;

  date?: string;

  custom_fields?: Object;

  /**
   * The ID of the first unique Document. This Document has been identified as a duplicate of another Document.
   */
  duplicate_of?: number;

  document_title?: string;

  /**
   * The exchange rate is calculated by dividing the amount of the currency found on the document by your account's default currency.
   * The exchange rate will be 1 if the document's currency matches your account's default currency or Veryfi cannot find a currency on the document.
   */
  exch_rate?: number;

  /**
   * Possible values: non-empty.
   * A custom identification value. Use this if you would like to assign your own ID to documents.
   * This parameter is useful when mapping this document to a service or resource outside Veryfi.
   */
  external_id?: string;

  /**
   * The value indicating whether or not the image taken with the Lens SDK is blurry.
   */
  img_blur?: boolean;

  /**
   * Possible values: non-empty.
   * The filename and extension for the document submitted to Veryfi for processing. This is the filename and extension for the document hosted on Veryfi.
   */
  img_file_name?: string;

  /**
   * Possible values: non-empty and <= 2083 characters.
   * A signed URL to the original submitted image or the PDF generated from multiple images.
   * .The URL expires 15 minutes after the Document Response is returned and is re-assigned on every GET request.
   */
  img_url?: string;

  /**
   * Possible values: non-empty and <= 2083 characters.
   * A signed URL to a thumbnail of the initially submitted image.
   * The URL expires 15 minutes after the Document Response is returned and is re-assigned on every GET request.
   */
  img_thumbnail_url?: string;

  /**
   * A user-defined flag that can be assigned to the Document object. This parameter is helpful in expense management use cases.
   */
  is_approved?: boolean;

  /**
   * An array of boolean values indicating whether each page of the processed document is blurry or not.
   */
  is_blurry?: boolean[];

  /**
   * The value indicating whether or not the image submitted for processing is a receipt, invoice, or another supported document type.
   */
  is_document?: boolean;

  /**
   * The value indicating whether or not this Document has been identified as a duplicate of another Document on your account.
   */
  is_duplicate?: boolean;

  /**
   * A list of the products or services purchased or ordered on the submitted document.
   */
  line_items?: LineItem[];

  /**
   * Possible values: non-empty.
   * The data extraction model version number that was used to process the document.
   */
  model?: string;

  /**
   * Possible values: non-empty.
   * A user-defined text field that can be used to add any additional document-level information.
   */
  notes?: string;

  /**
   * The text returned from converting the document into a machine-readable text format.
   */
  ocr_text?: string;

  /**
   * The value indicating the document's status.
   */
  status?: DocumentStatus;

  /**
   * Possible values: non-empty.
   * A user-defined list of identifiers that help to categorize or flag particular types of documents.
   * The Document object can have multiple tags. You can create tags by API or in Hub.
   */
  tags?: string[];

  /**
   * The date and time when the last update was made to the Document object in ISO 8601 format.
   */
  updated_date?: Date;

  /**
   * Possible values: non-empty.
   * An array of insights that highlight unusual behavior found on a document.
   */
  warnings?: string[];

  meta?: DocumentMeta;

  /**
   * Possible values: non-empty.
   * The unique identifier of the customer assigned by the vendor.
   */
  account_number?: string;

  /**
   * The invoice or bill balance.
   */
  balance?: number;

  /**
   * An array of barcodes extracted from the document if found.
   */
  barcodes?: Barcode[];

  bill_to?: BillTo;

  /**
   * Possible values: non-empty.
   * The amount of cash the customer has withdrawn when making a purchase. Cashback can be found on a receipt but does not appear on invoices.
   */
  cashback?: string;

  /**
   * Possible values: non-empty.
   * A category predicted from sent categories, user categories or default ones.
   */
  category?: string;

  /**
   * The currency code in ISO 4217 format.
   * The exchange_rate field will be enriched if the currency found on the document is different from the account's default currency.
   */
  currency_code: CurrencyCode;
};
