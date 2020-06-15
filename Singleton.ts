
/**
 * Patron Singleton
 * Para evitar que la clase de vulva a quedar en caso de que tenga multiples instancias
 * 
 * Ejemplo 1 Typescript
 * 
 * Plazi * Curso Profesional de JavaScript
 */
class Singleton {

    private static instance: Singleton

    private constructor() {
        // inicializacion
    }

    static getInstance() {

        if ( !Singleton.instance ) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }
}

export default Singleton

// Como usar 
import Singleton from './'
const a = Singleton.getInstance();


/**
 * Patron Singleton
 * Para evitar que la clase de vulva a quedar en caso de que tenga multiples instancias
 * 
 * Ejemplo 2 Typescript
 * 
 * SNG * Proyecto backend.facturaexpert.sng
 */
interface CNN {host: string, user: string, password: string, database: string}

export default class Global {
    private static _instance: Global;

    host: string;
    user: string;
    password: string;
    database: string;

    constructor () {

      this.host = ''
      this.user = ''
      this.password = ''
      this.database = ''
    }

    public static set setConnection ({ host, user, password, database }: CNN) {
      this.instance.host = host
      this.instance.user = user
      this.instance.password = password
      this.instance.database = database
    }

    public static get getConnection () {
      const access: CNN = {
        host: this.instance.host,
        user: this.instance.user,
        password: this.instance.password,
        database: this.instance.database
      }

      return access
    }

    public static get instance () {
      return this._instance || (this._instance = new this())
    }
}

// Como usar 
import Global from './'

Global.setConnection = {
    host: '',
    user: '',
    password: '',
    database: ''
}

console.log(Global.getConnection);



/**
 * Patron Singleton
 * Para evitar que la clase de vulva a quedar en caso de que tenga multiples instancias
 * 
 * Ejemplo 3 Javascript
 * 
 * U-Payments * Proyecto PM - Switch -> Repositorio: u-pay-switch-geolocation -> Rama: Sequelize
 */
const Sequelize = require('sequelize');

class SequelizeClass {

    cnn;

    constructor() {
        this.cnn = new Sequelize('pm_switch', 'developer', 'dev123', {
            host: 'localhost',
            port: 2233,
            dialect: 'mssql'
        });
    }

    static get instance() {
		return this._instance || ( this._instance = new this() );
    }
    
    static testConection () {

        this.instance.cnn.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    static get appInstance() {
        return this.instance.cnn;
    }
}

module.exports = SequelizeClass;

// Como usar
const Sequelize = require('./'); 
const User = Sequelize.appInstance.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
});