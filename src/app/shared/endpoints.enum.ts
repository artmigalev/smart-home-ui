export enum Endpoints_GET {
  PROFILE = '/api/user/profile',
  LOGIN = '/api/user/login',
  DASHBOARDS = '/api/dashboards',
  DASHBOARDS_ID = '/api/dashboards/:',
  DEVICES = '/api/devices',
}
export enum Endpoints_POST {
  LOGIN = '/api/user/login',
  DASHBOARDS = '/api/dashboards',
}
export enum Endpoints_PUT {
  DASHBOARDS_ID = '/api/dashboards/:',
}
export enum Endpoints_DELETE {
  DASHBOARDS_ID = '/api/dashboards/:',
}
export enum Endpoints_PATCH {
  DASHBOARDS_ID = '/api/dashboards/:',
  DEVICES_ID = '/api/devices/:',
}
