// import { LngLatPos } from '@'
interface WHstyleProps {
  width: string
  height: string
  position?: string
  [propName: string]: string
}

interface NativeDynamicProps {
  view: string
  viewMode: string
  zoom: number
  zooms: number[]
  center: string
}

interface NativeStaticProps {
  protocol: string
  v: string
  useAMapUI: boolean
  key: string
}


/**
 * use Amap.setStatus Dynamic setting
 */
interface StatusDynamicProps {
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


