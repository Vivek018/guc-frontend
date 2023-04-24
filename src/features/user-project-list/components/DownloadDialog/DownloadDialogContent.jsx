import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/Button";
import React from "react";

export const DownloadDialogContent = () => {
  return (
    <div className="w-96 max-mobile:w-80 max-small-mobile:w-72 flex flex-col justify-center items-start">
      <h2 className="mt-16 text-xl font-semibold mx-auto max-small-mobile:text-lg">
        Download Certificate
      </h2>
      <InputField
        label="Enter the name of the certificate"
        labelClassName="mt-16 mx-auto w-[96%] max-mobile:w-[80%] max-small-mobile:text-xs"
        variant="outline"
        placeholder="Your full name"
        className="mx-auto w-[96%] max-mobile:w-[80%] max-small-mobile:text-sm"
      />
      <Button
        className="mt-6 mb-11 mx-auto w-[96%] max-mobile:w-[80%] max-small-mobile:text-md"
        variant="outline"
        size="md"
      >
        Download Now
      </Button>
    </div>
  );
};
