import { Coordinate } from '@vue-map/utils/typings'
export interface WHstyleProps {
  width: string
  height: string
  position?: string
  [propName: string]: string
}

export interface NativeDynamicProps {
  view: string
  viewMode: string
  zoom: number
  zooms: number[]
  center: Coordinate
}

export interface NativeStaticProps {
  protocol: string
  v: string
  useAMapUI: boolean
  key: string
}


/**
 * use Amap.setStatus Dynamic setting
 */
export interface StatusDynamicProps {
  animateEnable: boolean
  doubleClickZoom: boolean
  dragEnable: boolean
  isHotspot: boolean
  jogEnable: boolean
  keyboardEnable: boolean
  resizeEnable: boolean
  rotateEnable: boolean
  scrollWheel: boolean
  touchZoom: boolean
  zoomEnable: boolean
  touchZoomCenter: boolean
}
