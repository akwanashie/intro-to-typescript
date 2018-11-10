type PathValue = string | number
type Path = PathValue[]

function isString (value: any): boolean {
  return typeof value === 'string'
}

function isNumber (value: any): boolean {
  return typeof value === 'number'
}

function isArray (value: any): boolean {
  return Array.isArray(value)
}

function isObject (value: any): boolean {
  return !isArray(value) && typeof value === 'object'
}

export function drill (target: any, path: Path, defaultValue: any = undefined) {
  if (path.length === 0) {
    return target || defaultValue
  }

  if ((isString(target) || isNumber(target) || !target)) {
    return defaultValue
  }

  const pathHead = path.shift()
  if (isString(pathHead) && isArray(target)) {
    return defaultValue
  }

  if (isNumber(pathHead) && isObject(target)) {
    return defaultValue
  }

  return drill(target[pathHead], path) || defaultValue
}