export const injectParamsToPath = (params: object = {}, path: string) => {
  Object.keys(params).forEach((param) => {
    path = path.replace(':' + param, params[param]);
  });
  return path;
}
