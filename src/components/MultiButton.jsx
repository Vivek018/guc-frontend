import { RWebShare } from "react-web-share";
import { Button } from "./ui/Button";
import { cn } from "@/utils/cn";
import share from "@/assets/icons/share.svg";

export const MultiButton = ({
  className,
  onClick = () => {},
  buttonText,
  title,
  id,
}) => {
  const handleShareClick = async () => {
    console.log(navigator.share);
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Share this project",
          text: `Project - ${title}`,
          url: `${window?.location}/${id}`,
        });
      } else return null;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cn("flex justify-center gap-2", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={handleShareClick}
      >
        <img src={share} alt="share icon" />
      </Button>

      <Button variant="outline" size="md" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};
