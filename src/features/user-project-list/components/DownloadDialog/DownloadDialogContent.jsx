import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/Button";
import React from "react";

export const DownloadDialogContent = () => {
  return (
    <div className="w-96 flex flex-col justify-center items-start">
      <h2 className="mt-16 text-xl font-semibold mx-auto">
        Download Certificate
      </h2>
      <InputField
        label="Enter the name of the certificate"
        labelClassName="mt-16"
        variant="outline"
        placeholder="Your full name"
      />
      <Button className="mt-6 mb-11 w-full" variant="outline" size="md">
        Download Now
      </Button>
    </div>
  );
};
