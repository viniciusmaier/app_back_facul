import path from "path";

export const SequelizeConfig = {
  config: path.resolve("../app_back_facul/config", "/config.mjs"),
  "models-path": path.resolve("../app_back_facul", "/src/models"),
  "migrations-path": path.resolve("../app_back_facul", "/migrations"),
};
