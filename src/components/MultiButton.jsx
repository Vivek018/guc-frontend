import { RWebShare } from "react-web-share";
import { Button } from "./ui/Button";
import { cn } from "@/utils/cn";
import share from "@/assets/icons/share.svg";

export const MultiButton = ({ className, onClick = () => {}, buttonText, title, id }) => {
  return (
    <div className={cn("mt-6 flex gap-2", className)}>
      <RWebShare
        data={{
          text: `Project - ${title}`,
          url: `${window?.location}/${id}`,
          title: "Share this project",
        }}
      >
        <Button variant="outline" size="icon">
          <img src={share} alt="share icon" />
        </Button>
      </RWebShare>
      <Button variant="outline" size="md" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};
