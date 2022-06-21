const { Sequelize } = require('sequelize');
const { tedious } = require ('tedious')
require('tls').DEFAULT_MIN_VERSION = 'TLSv1'





const db = new Sequelize('Gestion', 'sa', 'cerrillos_2013', {
   
    host:'cc3e0cfaac36.sn.mynetname.net',
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



//   const db = new Sequelize('Gestion', 'admin', 'admin04', {
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