interface IHttpError extends Error {
  name: string;
  status: number;
}

export { IHttpError };
