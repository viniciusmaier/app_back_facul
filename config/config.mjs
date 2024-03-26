import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const configJson = "./config.mjs";

fs.readFile(configJson, "utf8", (error, data) => {
  if (error) {
    console.error("Erro ao ler o arquivo config.json:", err);
    return;
  }

  let config = JSON.parse(data);
  config.development.username = process.env.DB_USER;
  config.development.password = process.env.DB_PASSWORD;
  config.development.database = process.env.DB_DATABASE;
  config.development.host = process.env.DB_HOST;
  config.development.dialect = process.env.DIALECT;

  const updateConfig = JSON.stringify(config, null, 2);

  fs.writeFile(configJson, updateConfig, "utf8", (err) => {
    if (err) {
      console.error(`ERROR :  ${err}`);
      return;
    }
    console.log("STATUS : CONFIGURACOES ATUALIZADAS");
  });
});
