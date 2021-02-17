export interface MapItemModel {
  address: GeoItemModel;
  openingHours: OpeningHours;
  status: {
    name: string;
    modifiedBy: string;
    modificationDate: string
  };
  imagePath?: string;
  name: string;
}

export interface GeoItemModel {
  geo: {
    latitude: string;
    longitude: string;
    coordinates: number[];
    type: string;
  };
  line1: string;
  line2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  countryCode: string;
  formatted: string;
}

export interface OpeningHours {
  sunday: OpeningHoursDay;
  monday: OpeningHoursDay;
  tuesday: OpeningHoursDay;
  wednesday: OpeningHoursDay;
  thursday: OpeningHoursDay;
  friday: OpeningHoursDay;
  saturday: OpeningHoursDay;
  active: boolean;
}

export interface OpeningHoursDay {
  open: string;
  close: string;
  breaks?: any[];
}
