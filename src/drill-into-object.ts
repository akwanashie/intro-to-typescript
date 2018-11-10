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

export function drill (target: any, path: Path) {
  if (path.length === 0) {
    return target
  }

  if (isString(target) || isNumber(target) || isArray(target) || !target) {
    return undefined
  }

  const pathHead = path.shift()
  return drill(target[pathHead], path)
}
