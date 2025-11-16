import React from "react";
import TitleSection from "./TitleSection";
import { membershipFormData } from "../constants/joinus_index";
import Button from "./Button";
const MembershipForm = () => {
  const { titleSection, forms } = membershipFormData;
  return (
    <div className="flex flex-col gap-10 w-full">
      <TitleSection title={titleSection.title} index={titleSection.index} />
      <div className="flex flex-col items-center justify-center w-fit">
        <Button
          href={forms.primaryButton.href}
          variant={forms.primaryButton.variant}
        >
          {forms.primaryButton.name}
        </Button>
      </div>
    </div>
  );
};

export default MembershipForm;
