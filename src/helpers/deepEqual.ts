export default function deepEqual(
  a: Record<string, any>,
  b: Record<string, any>
): boolean {
  if (a === b) {
    return true;
  }

  if (a == null || typeof a != 'object' || b == null || typeof b != 'object') {
    return false;
  }

  let propertiesInA = 0,
    propertiesInB = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ in a) {
    propertiesInA += 1;
  }
  for (const property in b) {
    propertiesInB += 1;
    if (!(property in a) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return propertiesInA == propertiesInB;
}
