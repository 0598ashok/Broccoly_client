import React from "react";
import "../css/Deliveryreturns.css";
import Footersidefields from "./Footersidefields";
import { Link } from "react-router-dom";
import { FaBus } from "react-icons/fa6";
import { IoReturnDownBackOutline } from "react-icons/io5";

const Deliveryreturns = () => {
  return (
    <div style={{backgroundColor:"#fff"}} className="delivery_returns">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Footersidefields />
          </div>
          <div className="col-md-8">
            <h1>Free standard delivery on orders over £40</h1>
            <p>
              Once your order is handed over to our Couriers your items will be
              delivered on a next day service. Saturday delivery is also
              available for an extra fee of £1.95
            </p>
            <p>
              You will be sent an email when your order is shipped with details
              of the courier online tracking system so you can track your order
              through the delivery process. Alternatively you can{" "}
              <Link>log into your Diet Chef account </Link>and access the status
              of your order from here.
            </p>

            <hr />

            <div className="d-flex">
              <div>
                <h5>
                  <FaBus />
                </h5>
              </div>
              <div>
                <h4>Delivery</h4>
                <p>
                  Standard delivery is FREE (Mon-Fri) on orders over £40. For
                  orders under £40 a fee of £3.95 applies.
                </p>
                <p>
                  Named day delivery is also FREE on orders over £40 (Mon-Fri).
                  Saturday delivery is available for an extra £1.95.
                </p>
                <p>
                  Delivery times exclude public holidays.
                  <ul className="delivery_returns_lists">
                    <li>Full tracking so you know where your parcel is.</li>
                    <li>
                      {" "}
                      In most parts of the UK you will be texted with a one hour
                      delivery window.
                    </li>
                  </ul>
                </p>
                <p>
                  We aim to ship orders received by 3:30 p.m. for delivery the
                  next working day. Orders received after 3:30 p.m. will be
                  shipped a day later.
                </p>
                <p>
                  You can also arrange delivery to your workplace, or to a
                  neighbour or friend if it's more convenient, at no extra
                  charge.
                </p>

                <p>
                  Where we deliver
                  <ul className="delivery_returns_lists">
                    <li>United Kingdom</li>
                    <li>Guernsey</li>
                    <li> Isle of Man</li>
                    <li>Jersey</li>
                  </ul>
                </p>
                <p>We can't deliver to any other country or BFPO address.</p>
                <Link>
                  <p>See our Delivery FAQs</p>
                </Link>
              </div>
            </div>

            <hr />

            <div className="d-flex">
              <div>
                <h5>
                  <IoReturnDownBackOutline />
                </h5>
              </div>
              <div>
                <h4>Returns</h4>
                <p>
                  If you are returning products then they should be sent to:
                </p>
                <address>
                  Diet Chef Ltd <br/> 
                  2 Rennie Square,<br/>
                   Brucefield Industrial Estate,<br/>
                  Livingston, EH54 9DF
                </address>
                <p>Please include a note detailing items returned, and your name and address.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliveryreturns;
