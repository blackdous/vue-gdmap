
import getType from './getType'

interface coordinateObj {
  lng?: number
  lat?: number
  longitude?: number
  latitude?: number
}

/**
 * 通过AMap.LngLat 生成 转换为 AMap可用的经纬度
 */
export const toLngLat = (coordinate: coordinateObj):any => {
  if (!coordinate || ('distance' in coordinate)) {
    return coordinate
  }

  let lng = 0
  let lat = 0
  const posTypeStr:string = getType(coordinate)

  switch(posTypeStr) {
    case 'Array':
      lng = coordinate[0]
      lat = coordinate[1]
      break
    case 'Object':
      if (Object.keys(coordinate).includes['lng'] && Object.keys(coordinate).includes['lat']) {
        lng = coordinate.lng
        lat = coordinate.lat
      } else if (Object.keys(coordinate).includes['longitude'] && Object.keys(coordinate).includes['latitude']) {
        lng = coordinate.longitude
        lat = coordinate.latitude
      }
  }
  return new window.AMap.LngLat(lng, lat)
}

// export const toPixel = (offset:) => {

// }
