import React from "react";
import "../../css/General.css";
import {Link} from "react-router-dom"

const BMI = () => {
  return (
    <div className="faq_general">
      <h1>BMI</h1>

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
                    data-target="#general29"
                    aria-expanded="true"
                    aria-controls="general29"
                  >
                    What is Body Mass Index(BMI)?
                  </a>
                </div>

                <div
                  id="general29"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    Measuring your BMI is a great way to check if you are a
                    healthy weight for your height. The calculation divides your
                    weight by your height squared.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general30"
                    aria-expanded="true"
                    aria-controls="general30"
                  >
                    What does BMI tell me?
                  </a>
                </div>

                <div
                  id="general30"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    BMI helps give you an indication as to whether you are at an
                    increased risk of health problems that are associated with
                    overweight and obesity. In general the higher your BMI the
                    greater your risk of health problems. You can use our Free
                    personal profile to check if you are in a healthy BMI range.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general31"
                    aria-expanded="true"
                    aria-controls="general31"
                  >
                    Who should use BMI calculations?
                  </a>
                </div>

                <div
                  id="general31"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    A body mass index calculation is for adults. It uses ranges
                    for each category which takes into consideration that people
                    come in different shapes and sizes.
                  </div>
                  <div class="card-body">
                    <small>
                      *please note there are exceptions to the rule please see
                      'how accurate is BMI'
                    </small>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general32"
                    aria-expanded="true"
                    aria-controls="general32"
                  >
                    What are the BMI ranges?
                  </a>
                </div>

                <div
                  id="general32"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    If you register <strong>below 18.5</strong> this means that
                    you may be underweight.
                    <br />
                    If you are <strong>between 18.5 and 24.9</strong> this puts
                    you in the healthy weight range.
                    <br />
                    If you are <strong>between 25 and 29.9</strong> this means
                    you may be overweight.
                    <br />
                    If your <strong>BMI is 30</strong> or above this is
                    classified as obese.
                    <br />
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general33"
                    aria-expanded="true"
                    aria-controls="general33"
                  >
                    What if I'm not in a healthy range?
                  </a>
                </div>

                <div
                  id="general33"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    If your BMI falls outside of the "healthy" weight range you
                    may want to talk with your GP or Medical Practitioner about
                    how you can best achieve a healthier body weight. If you are
                    over the healthy weight range you can reduce your BMI by
                    losing weight. This is best achieved by following a healthy
                    eating plan and taking regular exercise if possible. If you
                    are classified as underweight it is not recommended you try
                    to lose weight.
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general34"
                    aria-expanded="true"
                    aria-controls="general34"
                  >
                    How can Diet Chef help?
                  </a>
                </div>

                <div
                  id="general34"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                  We offer a calorie-controlled, healthy eating plan delivered direct to your door. <Link to="#"> to learn more about Diet Chef.</Link>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general35"
                    aria-expanded="true"
                    aria-controls="general35"
                  >
                    How accurate is the BMI?
                  </a>
                </div>

                <div
                  id="general35"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                    <dl>
                        <dt>It is a useful measurement for the majority of people however it does have limitations:</dt>
                        <dd>
                      - Athletes or very muscular people could record higher BMI readings – this is because muscle weighs more than fat and BMI cannot account for this.</dd>
                      <dd>
                      - It is a general tool to help people identify people who may be at an increased health risk, it is not a diagnostic tool that determines the overall health of a specific individual.</dd>
                      <dd>
                      - If you are pregnant or breastfeeding BMI does not apply.</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header" id="faqhead3">
                  <a
                    href="#"
                    class="btn btn-header-link collapsed"
                    data-toggle="collapse"
                    data-target="#general36"
                    aria-expanded="true"
                    aria-controls="general36"
                  >
                   Are there other indicators?
                  </a>
                </div>

                <div
                  id="general36"
                  class="collapse"
                  aria-labelledby="faqhead3"
                  data-parent="#faq"
                >
                  <div class="card-body">
                  Waist circumference measurements and waist to hip ratios can also be helpful tools in assessing increased health risks.
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

export default BMI;
