export type ArrayLngLat = [number, number];

export interface LngLatPos {
  lng: number
  lat: number
}

export interface FullLngLatPost {
  longitude: number
  latitude: number
}


declare global {
  interface Window {
    AMap: object
    AMapUI: object
    initAMapUI: () => void
  }
}
// export interface
