// Create static variables related to api
export const DOMAIN_DEVELOPMENT = "http://localhost:3000";

export enum HTTP_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const HTTP_HEADER = {
  JSON: { "Content-Type": "application/json" },
};

// Define domain url and method below this line

export const BUSSINESS = {
  GET_DATA: {
    url: `${DOMAIN_DEVELOPMENT}/getListAuthor`,
    method: HTTP_METHOD.GET,
  },
};

export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
}

export enum EndPoint {
  status = "/status",
  user= 'user',
  auth='auth',
  trademark='trademark',
  product='product',
  cart='cart',
}
