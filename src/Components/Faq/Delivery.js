import React from "react";
import "../../css/General.css";

const Delivery = () => {
  return (
    <div className="faq_general">
      <h1>Delivery</h1>
      <ul>
        <li>
          Orders will be shipped for delivery within 24 hours of your order
          being placed or the first working day if ordered at the weekend.
        </li>
        <li>
          Orders received by 3:30 p.m. are shipped for delivery next working day
          to most areas.
        </li>
        <li>Orders received after 3:30 p.m. will be shipped a day later.</li>
        <li>
          You will be sent an email and/or text message when your hamper is
          shipped with details of the courier online tracking system so you can
          track your hamper through the delivery process.
        </li>
        <li>
          In most parts of the UK you will be texted with a one hour delivery
          window.
        </li>
      </ul>

      <div>
        <div id="faqG_main">
          <div class="container p-0">
            <div class="accordion" id="faq">
              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general26"
                    aria-expanded="true"
                    aria-controls="general26"
                  >
                    How much will delivery cost?
                  </a>
                </div>

                <div
                  id="general26"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    We use a secure courier service to make sure your Diet Chef
                    order reaches you safe and sound.
                  </div>
                  <div class="card-body">
                    <b>Standard delivery = FREE on all Pay monthly plans</b>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general27"
                    aria-expanded="true"
                    aria-controls="general27"
                  >
                    How long will delivery take?
                  </a>
                </div>

                <div
                  id="general27"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    We aim to get your order to you as quickly as possible so
                    that you can start your journey with Diet Chef. Generally
                    delivery is next working day or two working days for remote
                    areas.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general28"
                    aria-expanded="true"
                    aria-controls="general28"
                  >
                    Who will deliver my parcel?
                  </a>
                </div>

                <div
                  id="general28"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    We use UK-Mail for all of our shipping in the UK and other
                    couriers including DHL for orders outside the UK.
                  </div>
                  <div class="card-body">
                    Our couriers offer a swift and secure service, and we'll
                    send you delivery updates by email throughout your order.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
