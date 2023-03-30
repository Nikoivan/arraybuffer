import ArrayBufferConverter from "../src/js/app";
import { getBuffer } from "../src/js/app";

const arr = new ArrayBufferConverter();

arr.load(getBuffer());

test("test for method load of class ArrayBufferConverter", () => {
  const result = arr.code.length;
  expect(result).toBe(53);
});

test("test for method toString of class ArrayBufferConverter", () => {
  const result = arr.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
