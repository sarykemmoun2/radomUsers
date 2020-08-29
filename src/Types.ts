interface NAME_TYPE {
  title: 'Mrs' | 'Mr';
  first: string;
  last: string;
}

interface LOCATION_TYPE {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface LOGIN_TYPE {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface REGISTER_TYPE {
  date: Date;
  age: number;
}

export interface USER_TYPE {
  gender: 'female' | 'male';
  name: NAME_TYPE;
  location: LOCATION_TYPE;
  email: string;
  login: LOGIN_TYPE;
  dob: REGISTER_TYPE;
  registered: REGISTER_TYPE;
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}
