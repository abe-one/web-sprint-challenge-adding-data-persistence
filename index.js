const server = require("./api/server");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`\n Tuned in and listening to port ${PORT} \n`);
});
