const { z } = require("zod");

//creating an object schema
const loginschema = z.object({
  email: z
    .string({ required_error: "email is required" }) //mistake: In postman I need to write a valid @gmail.com email address
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "email must be atleast of 3 chars" })
    .max(255, { message: "email must be not more than 255 chars" }),

  password: z
    .string({ required_error: "password is required" })
    .min(4, { message: "password must be atleast of 4 chars" }) //mistake: here earlier written min=7 , but in postman I wrote password qwerty= 6 letters
    .max(1024, { message: "Name must be not more than 1024 chars" }),
});
module.exports = loginschema;
