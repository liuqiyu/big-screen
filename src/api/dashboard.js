import $axios from './index'

export function getMainInfo(data) {
  const url = '/getMainInfo.action'
  return $axios.post(url, data)
}
export function getAlarmInfo(data) {
  const url = '/getAlarmInfo.action'
  return $axios.post(url, data)
}
export function getCellInfo(data) {
  const url = '/getCellInfo.action'
  return $axios.post(url, data)
}
export function getSleepInfo(data) {
  const url = '/getSleepInfo.action'
  return $axios.post(url, data)
}
export function getSaveelectric(data) {
  const url = '/getSaveelectric.action'
  return $axios.post(url, data)
}
export function getOperateprogress(data) {
  const url = '/getOperateprogress.action'
  return $axios.post(url, data)
}

