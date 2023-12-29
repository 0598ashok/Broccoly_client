import React from "react";
import Footersidefields from "./Footersidefields";  
import "../css/security.css";

const Security = () => {
  return (
    <div style={{backgroundColor:"#fff"}} className="security">
      <div className="container ">
        <div className="row">
          <div className="col-md-4">
            <Footersidefields />
          </div>
          <div className="col-md-8">
            <h1>Security</h1>
            <p>
              The information you provide to us is protected by SSL and SSL
              extended verification certificates. This means that people cannot
              listen in as you enter credit card details on our site. You can
              get details of the GeoTrust certificate from your web browser.
            </p>
            <p>
              Your credit card security code is discarded after we use it to
              ensure it cannot fall into the wrong hands.
            </p>
            <p>
              Credit card details are stored at SagePay, one of the largest
              payment processing companies in the world. No card details (other
              than the first four digits, last four digits and expiry date) are
              stored by us.
            </p>
            <p>
              We store the IP address of all orders along with details of the
              web browser and computer that you are using. This can be used by
              the police in the event of a fraudulent transaction.
            </p>
            <p>
              For certain orders we mark boxes with permanent ultra violet (UV)
              of the shipment number so that stolen goods can be recovered. For
              larger orders we may also insist that the courier gets a
              signature.
            </p>
            <p>
              We use 3rd Man fraud & risk managment screening on all
              transactions. This covers value, AVS/CV2 results, country of
              issuing card, history of the card, IP address, billing and
              delivery address, email address, postcode check, electoral roll
              and other parameters.
            </p>
            <p>
              We also use Verified by Visa, MasterCard SecureCode and American
              Express SafeKey which are known as 3D-Secure. This includes
              password verification, IP address and other checks.
            </p>
            <p>
              All fraud is reported to ActionFraud which is the UK's national
              fraud and internet crime reporting centre or the Internet Crime
              Complaint Center (IC3) which is the Federal Bureau of
              Investigation (FBI) reporting center for the USA.
            </p>
            <p>
              Broccoly's security has been assessed by TrustWave as being
              Payment Card Industry (PCI) Data Security Standard (DSS)
              compliant.
            </p>
            <p>
              Other security measures are in place that we do not wish to
              publicise.
            </p>
            <p>
              Please accept our apologies if you are inconvenienced while we
              verify your purchase from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
