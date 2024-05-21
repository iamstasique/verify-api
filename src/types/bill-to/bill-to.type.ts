import { ParsedAddress } from './parsed-address.type';

export type BillTo = {
  /**
   * Possible values: non-empty.
   * The name of the individual or business
   */
  name?: string;

  /**
   * Possible values: non-empty.
   * The address of the individual or business.
   */
  address?: string;

  /**
   * Possible values: non-empty.
   * The payer's email address found in the billing section of the document.
   */
  email?: string;

  /**
   * An object representing detailed address-related information on the document, such as the city, state, street address, unit number, etc.
   * Returned if the original POST request had the parameter parse_address set to true and the address is found on the document.
   */
  parsed_address?: ParsedAddress;

  /**
   * Possible values: non-empty.
   * The payer's phone number found in the billing section of the document.
   */
  phone_number?: string;

  /**
   * Possible values: non-empty.
   * The payer's registration number found in the billing section of the document.
   */
  reg_number?: string;

  /**
   * Possible values: non-empty.
   * The value-added tax identification number (VAT) for this vendor and found on the document. VAT numbers can be found on European invoices.
   */
  vat_number?: string;
};
