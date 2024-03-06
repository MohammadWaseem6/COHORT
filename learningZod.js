const zod = require("zod")

const schema = zod.string().email();
const res = schema.parse("dcjscj")
console.log(res.errors);