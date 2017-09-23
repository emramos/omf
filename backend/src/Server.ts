import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");
import mongoose = require("mongoose"); //import mongoose

var csrf = require('csurf');
var cors = require('cors');

//routes
import { OfferRoute } from "./routes/offer";

//interfaces
import { IOffer } from "./interfaces/offer"; //import IOffer

//models
import { IModel } from "./models/model"; //import IModel
import { IOfferModel } from "./models/offer"; //import IOfferModel

//schemas
import { offerSchema } from "./schemas/offer"; //import userSchema

/**
 * The server.
 *
 * @class Server
 */
export class Server {

  public app: express.Application;

  private model: IModel; //an instance of IModel


  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   * @return {ng.auto.IInjectorService} Returns the newly created injector for this app.
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    this.model = Object(); //initialize this to an empty object

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();


  }

  /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    //empty for now
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {

    const MONGODB_CONNECTION: string = "mongodb://omf_user:omf_user@localhost:27017/omf?authSource=admin";

    //add static paths
    this.app.use(express.static(path.join(__dirname, "public")));

    //use logger middlware
    this.app.use(logger("dev"));




    //use cookie parker middleware middlware
    //this.app.use(cookieParser("SECRET_GOES_HERE"));

    //use override middlware
    this.app.use(methodOverride());

    // Add headers
    this.app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8123');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', 'true');

        // Pass to next layer of middleware
        next();
    });

    //use q promises
    global.Promise = require("q").Promise;
    mongoose.Promise = global.Promise;

    //connect to mongoose
    let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);

    //create models
    this.model.offer = connection.model<IOfferModel>("Offer", offerSchema);


    //catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  /**
   * Create router
   *
   * @class Server
   * @method api
   */
  public routes() {
    let router: express.Router;
    router = express.Router();

    //use query string parser middlware
    this.app.use(bodyParser.urlencoded({
      extended: false
    }));

    //use json form parser middlware
    this.app.use(bodyParser.json());

    const cookieOptions = {
      key: 'XSRF-TOKEN',
      secure: false,
      httpOnly: false,
      maxAge: 3600
    }

    const corsOptions = {
      origin: 'http://localhost:8123',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    };

    const csrfProtection = csrf({ cookie: cookieOptions });

    this.app.use(cors(corsOptions));
    this.app.use(cookieParser());
    this.app.use(csrfProtection);


    //use router middleware
    this.app.use(router);

    router.use(function (req, res, next) {
      res.setHeader('Content-Type', 'application/json');
      next();
    });

    //OfferRoute
    OfferRoute.create(router, this.model);


  }
}
