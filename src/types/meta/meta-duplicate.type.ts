export type MetaDuplicate = {
  id: number;

  /**
   * Possible values: non-empty and <= 2083 characters
   */
  url: string;

  /**
   * Possible values: <= 1.
   * How close is the match
   */
  score: number;
};
