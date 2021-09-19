export enum HTTPMethod {
  /**
   * the `connect` method establishes a tunnel to the server identified by the
   * target resource.
   */
  connect = 'connect',

  /**
   * the `delete` method deletes the specified resource.
   */
  delete = 'delete',

  /**
   * the `get` method requests a representation of the specified resource.
   * requests using get should only retrieve data.
   */
  get = 'get',

  /**
   * the `head` method asks for a response identical to that of a get request,
   * but without the response body.
   */
  head = 'head',

  /**
   * the `options` method is used to describe the communication options for the
   * target resource.
   */
  options = 'options',

  /**
   * the patch method is used to apply partial modifications to a resource.
   */
  patch = 'patch',

  /**
   * the `post` method is used to submit an entity to the specified resource,
   * often causing a change in state or side effects on the server.
   */
  post = 'post',

  /**
   * the `put` method replaces all current representations of the target
   * resource with the request payload.
   */
  put = 'put',

  /**
   * the `trace` method performs a message loop-back test along the path to the
   * target resource.
   */
  trace = 'trace'
}
