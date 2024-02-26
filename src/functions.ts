import { HelloProps } from "./types";

export function hello({ name }: HelloProps) {
  console.log("Hello, ", name);
}
