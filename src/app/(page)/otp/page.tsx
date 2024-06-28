"use client";
import OtpComponent from "@/components/otp.component";
import React from "react";

const OtpPage = () => {
  const handleOnComplete = (value: string) => {
    console.log("OTP Completed", parseInt(value));
  };

  return (
    <div>
      <OtpComponent onComplete={handleOnComplete} noOfDigits={6} />
    </div>
  );
};

export default OtpPage;
