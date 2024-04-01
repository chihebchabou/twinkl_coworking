import ResponseError from "./ResponseError.mjs";
import { createHmac } from "node:crypto";

export const slugify = (str) => {
    if (typeof str == 'string' && str.length > 0) {
        return str.toLowerCase().replaceAll(" ", "-");
    } else {
        throw new ResponseError(500, 'Error')
    }
};

export const hash = (str) => {
    if (typeof str == 'string' && str.length > 0) {
        return createHmac('sha256', process.env.HASHING_SECRET).update(str).digest('hex')
    } else {
        throw new ResponseError(500, "Error Hashing Password")
    }
}