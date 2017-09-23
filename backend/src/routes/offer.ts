import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";

//models
import { IModel } from "../models/model"; //import IModel


/**
 *
 * @class OfferRoute
 */
export class OfferRoute extends BaseRoute {

  /**
   *
   * @class OfferRoute
   * @method create
   * @static
   */
  public static create(router: Router, model: IModel) {

    console.log("[OfferRoute::create] Creating offer route.");

    router.get("/api/offer", (req: Request, res: Response, next: NextFunction) => {
      new OfferRoute().list(req, res, next, model);
    });

    router.get('/api/offer/:id', (req: Request, res: Response, next: NextFunction) => {
      new OfferRoute().show(req, res, next, model);
    });

    router.post('/api/offer', (req: Request, res: Response, next: NextFunction) => {
      new OfferRoute().create(req, res, next, model);
    });

  }

  /**
   * Constructor
   *
   * @class OfferRoute
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * @class OfferRoute
   * @method list
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public list(req: Request, res: Response, next: NextFunction, model: IModel) {

    model.offer.find({}, function(err, offer) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(offer);

     res.send(offer);
    });
  }


  /**
   * @class OfferRoute
   * @method show
   * @param req {Request} The express Request object.
   * @param res {Response} The express Response object.
   * @next {NextFunction} Execute the next method.
   */
  public show(req: Request, res: Response, next: NextFunction, model: IModel) {

    model.offer.findOne({_id: req.params.id}, function(err, offer) {
      if (err) {
        console.log(err);
        throw err;
      }
     console.log(offer);

     res.send(offer);
    });
  }


    /**
     * @class OfferRoute
     * @method create
     * @param req {Request} The express Request object.
     * @param res {Response} The express Response object.
     * @next {NextFunction} Execute the next method.
     */
    public create(req: Request, res: Response, next: NextFunction, model: IModel) {

      model.offer.create(req.body, function(err, offer) {
        if (err) {
          console.log(err);
          throw err;
        }
       console.log(offer);

       res.json(offer);
      });
    }


}
