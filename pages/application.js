import Footer from "../components/Footer";


import React, { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import ChurchRelatedInfo2 from "../components/forms/ChurchRelatedInfo2";
import { UseContextProvider } from "../contexts/StepperContext";
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import Final from "../components/forms/Final";
import FormLabels from "../assets/forms_i18n.json";

import Head from "next/head";
import BasicInformation from "../components/forms/BasicInformation";
import ChurchRelatedInfo from "../components/forms/ChurchRelatedInfo";


function Application() {
  const { locale, locales, asPath, defaultLocale } = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  // const steps = [
  //   "Student Info",
  //   "College Students",
  //   "Emergency Contact",
  //   "Info about the Program",
  //   "Done",
  // ];
  const labels = FormLabels.labels.filter((l) => l.locale === locale)[0];
  const steps = labels.steps;

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <BasicInformation
            labels={labels.basicInformation}
            locale={locale}
          />
        );
      case 2:
        return (
          <ChurchRelatedInfo labels={labels.churchRelatedInfo} locale={locale} />
        );
      case 3:
        return (
          <ChurchRelatedInfo2
            labels={labels.churchRelatedInfo2}
            locale={locale}
          />
        );
      case 4:
        return <Final labels={labels.done} locale={locale} />
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="bg-[#f6f9ff]">
      <Head>
        <title>Application - Glorious Life Church</title>
      </Head>

      <div>
        <UseContextProvider>
          <div className="bg-[#f6f9ff] ">
            <div className="bg-[#f6f9ff]  flex items-center">
              <div className="lg:w-4/5 mx-auto md:w-4/5 mt-10 w-[95vw] rounded-2xl bg-white pb-2 shadow-xl font-raleway">
                <div className="horizontal container">
                  <div className="flex items-center justify-evenly my-5">
                    {locales.map((l, i) => {
                      return (
                        <Link key={i} href={asPath} locale={l}>
                          <div
                            className={`flex flex-row text-sm center items-center justify-center border px-7 py-2 hover:bg-[#EE4823] hover:text-white rounded-lg transition duration-200 ease-in-out ${
                              locale === l
                                ? "bg-[#EE4823] text-white cursor-default"
                                : "bg-white text-black cursor-pointer"
                            }`}
                          >
                            <p className="md:text-sm text-xs font-bold">
                              {
                                FormLabels.labels.filter(
                                  (lo) => lo.locale === l
                                )[0].label
                              }
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="">
                    <Stepper steps={steps} currentStep={currentStep} />
                  </div>

                  <div className="my-10 p-10 ">{displayStep(currentStep)}</div>
                </div>

                {currentStep !== steps.length && (
                  <StepperControl
                    handleClick={handleClick}
                    currentStep={currentStep}
                    steps={steps}
                    labels={labels}
                  />
                )}
              </div>
            </div>
          </div>
        </UseContextProvider>
      </div>

      <Footer />
    </div>
  );
}

export default Application;
