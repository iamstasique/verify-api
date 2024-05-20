export type Barcode = {
  /**
   * Possible values: non-empty.
   * The machine-readable representation of the barcode found on the document.
   */
  data: string;

  /**
   * Possible values: non-empty.
   * The name of the encoding for the barcode. Supported types include: QR Code, PDF417, EAN, UPC, Code128, Code39, I25
   */
  type: string;

  /**
   * Possible values: >= 8, <= 8.
   * An array of normalized (x, y) coordinates used to represent the boundary of the barcode found on the document.
   */
  bounding_region?: number[];
};
