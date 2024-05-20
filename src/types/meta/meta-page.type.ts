type Screenshot = {
  /**
   * Possible values: <= 1
   */
  score?: number;

  /**
   * Possible values: [mobile_screenshot, desktop_screenshot].
   * The predicted value.
   */
  type: 'mobile_screenshot' | 'desktop_screenshot';
};

export type MetaPage = {
  height: number;
  width: number;

  /**
   * Possible values: non-empty.
   * Page languages in BCP-47 language tag, starting with the most confident prediction.
   */
  language: string[];

  screenshot: Screenshot;
};
