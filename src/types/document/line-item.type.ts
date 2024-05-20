import { CountryOfOrigin } from './country-of-origin.type';

export type LineItem = {
  /**
   * The unique number created to identify the Line Item object.
   */
  id: number;

  /**
   * The value indicating the position of where the line item appears on the document.
   */
  order: number;

  /**
   * Possible values: non-empty.
   * A user-defined list of identifiers that help to categorize or flag particular types of line items.
   */
  tags: string[];

  /**
   * Possible values: non-empty.
   * The complete text returned for the line item, including prices, dates, etc.
   */
  text: string;

  /**
   * Possible values: [room, tax, parking, service, fee, delivery, product, food, alcohol, tobacco, transportation, fuel, refund, discount, payment, giftcard].
   * The classification of the product. The line type predicted by Veryfi, e.g. food.
   */
  type: string;

  /**
   * The date found on the document and associated with the line item in ISO 8601 format.
   */
  date: Date;

  /**
   * Possible values: non-empty.
   * The product or service's extracted name or description excluding date and price.
   */
  description: string;

  /**
   * Possible values: non-empty.
   * The item text including dates, weight, etc.
   */
  full_description?: string;

  /**
   * Possible values: non-empty.
   * The line item description with expanded words
   */
  normalized_description?: string;

  /**
   * The lower price after discount.
   */
  discount_price?: number;

  /**
   * The discount percentage that was applied to the line item.
   */
  discount_rate: number;

  /**
   * The date found on the document and associated with the line item in ISO 8601 format.
   */
  discount: number;

  /**
   * The unit price for the line item.
   */
  price: number;

  /**
   * The amount or number of units for the line item. This value is computable.
   */
  quantity: number;

  /**
   * Possible values: non-empty
   */
  reference: string;

  /**
   * Possible values: non-empty.
   * A grouping indicated by formatted text on the receipt or invoice.
   */
  section: string;

  /**
   * Possible values: non-empty.
   * The Stock Keeping Unit (SKU) is the unique code associated with the product for the line item.
   */
  sku: string;

  /**
   * The percent at which the individual or corporation is taxed.
   */
  tax_rate: number;

  /**
   * The amount at which the individual or corporation is taxed for the product on this line item.
   */
  tax: number;

  /**
   * The total price for this line item. This value is computable.
   */
  total: number;

  /**
   * New, added 2023-07-10. The total of a set of numbers that will later be added to another set of numbers, such as tip and tax. This value is computable.
   */
  subtotal?: number;

  /**
   * Possible values: non-empty.
   * The unit of measurement for this line item.
   */
  unit_of_measure: string;

  /**
   * Possible values: non-empty.
   * The category is taken from the line item with the same SKU and/or description. Otherwise from the root category field.
   */
  category?: string;

  /**
   * The country of manufacture, production, design, or brand origin where the product comes from.
   */
  country_of_origin?: CountryOfOrigin;

  custom_fields?: Object;

  product_details?: Object[];

  /**
   * A service end date identified for the line item. An end date could be a flight arrival date or hotel departure date in ISO 8601 format.
   */
  end_date?: Date;

  /**
   * The line item total before deductions.
   */
  gross_total?: number;

  /**
   * Possible values: non-empty
   * The Harmonized System Nomenclature (HSN) found for the line item.
   */
  hsn?: string;

  /**
   * Possible values: non-empty
   * The batch or lot number for the line item.
   */
  lot?: string;

  /**
   * A service start date identified for the line item. A start date could be a flight departure date or hotel arrival date in ISO 8601 format.
   */
  start_date?: Date;

  /**
   * Possible values: non-empty.
   * The classification of goods and services for tax purposes for the line item.
   */
  tax_code?: string;

  /**
   * Possible values: non-empty.
   * The name of the manufacturer of the product for the line item.
   */
  manufacturer?: string;

  /**
   * The line item total after deductions.
   */
  net_total?: number;

  /**
   * Possible values: non-empty.
   * The Universal Product Code (UPC), European Article Number (EAN), or Global Trade Item Number (GTIN) found for the line item on this document will be placed in this field.
   */
  upc?: string;

  /**
   * Possible values: non-empty.
   * The weight of the item for the line item. Usually found on logistic invoices.
   */
  weight?: string;
};
