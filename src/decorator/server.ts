
//
// export function Db() {
//   return <T extends { new(...ares: any[]): {} }>(constructor: T) => {
//     createConnection({
//       type: "mysql",
//       host: "localhost",
//       port: 3306,
//       username: "root",
//       password: "wyswill123",
//       database: "test",
//       entities: [Muser],
//       synchronize: true,
//       logging: false,
//     })
//       .then((connection) => {
//         console.log("连接成功");
//         return new (class extends constructor {
//           db = connection; //注入db属性
//         })();
//       })
//       .catch((error) => console.log(error));
//   };
// }
