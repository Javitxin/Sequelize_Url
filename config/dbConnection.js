//const  SqliteDialect = require('@sequelize/sqlite3').SqliteDialect;
const  Sequelize = require('sequelize');
//const { substring } = require('sequelize/lib/operators');
const { URL } = require('url');

require('dotenv').config();


async function dbConnection() {
    // URL de conexión
    //const dbUrl = process.env.TURSO_DATABASE_URL;
    const dbUrl = "libsql://mydietdb-javitxin.turso.io";
    console.log('------------DBURL--------', dbUrl)

    // Parsear la URL para obtener los detalles de conexión
    const parsedUrl = new URL(dbUrl);
    const databaseName = parsedUrl.pathname.substring(1)
    //const databaseType = parsedUrl.protocol.replace('libsql:', ''); // Obtener el tipo de base de datos
    
    // Configurar la conexión con Sequelize
    const sequelize = new Sequelize('mydietdb','','', {
      dialect: 'sqlite',
      storage: 'sequelize.sqlite',
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false
        }
      },
      username: 'javitxin',
      password: parsedUrl.password,
      host: parsedUrl.hostname,
      databaseName:databaseName
      
      //dialectModule: require('libsql-client'),
      /*
      dialect: 'sqlite',
      
      host: parsedUrl.hostname,
      port: parsedUrl.port,
      database: parsedUrl.pathname.substring(1), // Eliminar la barra inicial del nombre de la base de datos
      */
    });
    console.log('------------sequelize--------', sequelize)
    

  try {
    // Intentar conectar a la base de datos
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Llamar a la función para conectar la base de datos
module.exports = dbConnection;
