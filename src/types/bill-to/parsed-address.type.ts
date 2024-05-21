export type ParsedAddress = {
  /**
   * The settlement including cities, towns, villages, hamlets, localities, etc.
   */
  city?: string;

  /**
   * The sovereign nations and their dependent territories, anything with an ISO-3166 code.
   */
  country?: string;

  /**
   * The detected ISO 3166-1 alpha-2 code for a given country.
   */
  country_alpha_2?: string;

  /**
   * The postal code used for mail sorting.
   */
  postcode?: string;

  /**
   * A first-level administrative division.
   * Scotland, Northern Ireland, Wales, and England in the UK are mapped to "state" as well.
   */
  state?: string;

  /**
   * A sum of house_number road, building, unit.
   */
  street_address?: string;

  /**
   * The venue name e.g. "Brooklyn Academy of Music", and building names e.g. "Empire State Building".
   */
  house?: string;

  /**
   * Usually refers to the external (street-facing) building number.
   * In some countries this may be a compound, hyphenated number, which also includes an apartment number, or a block number (a la Japan).
   */
  house_number?: string;

  /**
   * Street name(s)
   */
  road?: string;

  /**
   * An apartment, unit, office, lot, or other secondary unit designator.
   */
  unit?: string;

  /**
   * The expressions indicating a floor number e.g. "3rd Floor", "Ground Floor", etc.
   */
  level?: string;

  /**
   * Numbered/lettered staircase.
   */
  staircase?: string;

  /**
   * Numbered/lettered entrance.
   */
  entrance?: string;

  /**
   * The post office box, typically found in non-physical (mail-only) addresses.
   */
  po_box?: string;

  /**
   * An unofficial neighborhood name like "Harlem", "South Bronx", or "Crown Heights".
   */
  suburb?: string;

  /**
   * The boroughs or districts within a city that serve some official purpose e.g. "Brooklyn" or "Hackney" or "Bratislava IV".
   */
  city_district?: string;

  /**
   * Named islands e.g. "Maui".
   */
  island?: string;

  /**
   * Usually a second-level administrative division or county.
   */
  state_district?: string;

  /**
   * Informal subdivision of a country without any political status.
   */
  country_region?: string;

  /**
   * Only used for appending "West Indies" after the country name, a pattern frequently used in the English-speaking Caribbean e.g. "Jamaica, West Indies".
   */
  world_region?: string;
};
