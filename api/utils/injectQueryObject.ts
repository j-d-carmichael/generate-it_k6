export const injectQueryObject = (query: Record<string, any> = {}, path: string) => {
  let qs = '?'
  Object.keys(query).forEach((param) => {
    qs += param + '=' + query[param] + '&'
  });
  qs = qs.slice(0, -1)
  return path + qs;
}
