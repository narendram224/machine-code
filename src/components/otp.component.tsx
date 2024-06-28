"use client";
import React, { LegacyRef, useRef } from "react";

interface OtpComponentProps {
  onComplete: (value: string) => void;
  noOfDigits: number;
}

const OtpComponent = ({ onComplete, noOfDigits }: OtpComponentProps) => {
  const inputFieldList = Array.from({ length: noOfDigits }).fill(
    ""
  ) as string[];
  const inputRefFields = new Array(noOfDigits).fill(null);

  const [otp, setOtp] = React.useState(inputFieldList);
  const inputRefList = useRef<HTMLInputElement[]>(inputRefFields);
  console.log("[otp]", otp);

  const handleInputFieldChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValue = [...otp];
    newValue[index] = e.target.value;
    setOtp(newValue);
    if (e.target.value && index < noOfDigits - 1) {
      inputRefList.current[index + 1]?.focus();
    }
    if (!e.target.value && index > 0) {
      inputRefList.current[index - 1]?.focus();
    }
    if (newValue.join("").length === noOfDigits) {
      onComplete(newValue.join(""));
    }
  };

  return (
    <section id="otp-component" className="">
      {inputFieldList?.map((_, index) => {
        return (
          <input
            key={index}
            ref={(ref) =>
              (inputRefList.current[index] = ref as HTMLInputElement)
            }
            type="text"
            maxLength={1}
            value={otp[index]}
            pattern="[0-9]*"
            onChange={(e) => handleInputFieldChanged(e, index)}
            className="w-12 h-10 m-2 text-center text-3xl border-2 border-gray-300 rounded-lg"
          />
        );
      })}
    </section>
  );
};

export default OtpComponent;
