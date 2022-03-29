const { Sequelize } = require('sequelize');
const { tedious } = require ('tedious')
require('tls').DEFAULT_MIN_VERSION = 'TLSv1'





const db = new Sequelize('Gestion', 'sa', 'cerrillos_2013', {
   
    host:'201.188.191.76',
    dialect:'mssql',
    dialectModule: tedious,
    define: {
        timestamps: false,
        freezeTableName: true,
      
       
      },
      options:{
        trustedconnection: false,
        enableArithAbort: true,
        encrypt: false,
        instacename:'MSSQLSERVER'
    }
}
  );



//   const db = new Sequelize('Gestion', 'admin', 'admin03', {
//     host:'DESKTOP-KP3L1CM',
//     dialect:'mssql',
//     define: {
//         timestamps: false,
//         freezeTableName: true,
      
       
//       },
//       options:{
//         trustedconnection: false,
//         enableArithAbort: true,
//         encrypt: false,
//         instacename:'MSSQLSERVER'
//     }
//  }
//   );

  module.exports = db;