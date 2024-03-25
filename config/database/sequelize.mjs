import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

export default function conexaoBanco() {
  try {
    const sequelize = new Sequelize(process.env.DATA_BASE_URL, {
      dialect: "postgres",
      dialectOptions: {
        connectTimeout: 3000,
        ssl: {
          require: "true",
          rejectUnauthorized: false,
        },
      },
    });
    return sequelize;
  } catch (error) {
    console.log(error);
  }
}

// try {
//   // const conexao = new Sequelize(process.env.DATA_BASE_URL, {
//   //   dialect: process.env.DIALECT,
//   //   dialectOptions: {
//   //     connectTimeout: 3000,
//   //     ssl: {
//   //       require: "true",
//   //       rejectUnauthorized: false,
//   //     },
//   //   },
//   // });

//   const conexao = new Sequelize(
//     process.env.DATABASE != undefined ? process.env.DATABASE : " ",
//     process.env.USERNAME_DB_TEST != undefined
//       ? process.env.USERNAME_DB_TEST
//       : " ",
//     process.env.PASSWORD_DB_TEST != undefined
//       ? process.env.PASSWORD_DB_TEST
//       : " ",
//     {
//       dialect: "postgres",
//       dialectOptions: {
//         connectTimeout: 4000,
//         // ssl: {
//         //   require: "true",
//         //   rejectUnauthorized: false,
//         // },
//       },
//     }
//   );

//   //conexao.authenticate();
// } catch (err) {
//   console.log("deu erro");
// }
