
import fs from "fs";
const configJson = "./config/config.json";

const configConection = [{
  "development": {
    "username": `${process.env.DB_USER}`,
    "password": `${process.env.DB_PASSWORD}`,
    "database": `${process.env.DB_DATABASE}`,
    "host": `${process.env.DB_HOST}`,
    "dialect": `${process.env.DIALECT}`
  }
}
]


fs.writeFileSync(configJson, JSON.stringify(configConection[0]), { encoding: "utf8" });



