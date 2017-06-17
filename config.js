// Ghost Configuration for Heroku

var path = require('path'),
    config;

config = {

  // Production (Heroku)
  production: {
    url: 'http://www.krystleli.ca',
    mail: {
      transport: 'SMTP',
      options: {
        service: 'Gmail',
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD
        }
      }
    },
    storage: {
        active: 'ghost-cloudinary-store',
        'ghost-cloudinary-store': {
            cloud_name: process.env.CLOUDINARY_CLOUD,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET
        }
    },
    database: {
      client: 'postgres',
      connection: process.env.DATABASE_URL,
      debug: false
    },
    server: {
      host: '0.0.0.0',
      port: process.env.PORT
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  },

  // Development
  development: {
    url: 'http://localhost:2368',
    database: {
      client: 'sqlite3',
      connection: {
        filename: path.join(__dirname, '/content/data/ghost-dev.db')
      },
      debug: false
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: path.join(__dirname, '/content/')
    }
  }

};

// Export config
module.exports = config;
