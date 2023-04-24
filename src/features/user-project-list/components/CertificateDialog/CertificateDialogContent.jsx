import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";

import tick from "../../assets/icons/tick.svg";
import download from "../../assets/icons/download.svg";
import convert from "../../assets/icons/convert.svg";

export const CertificateDialogContent = ({ handleDownloadClick }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="absolute -top-[35px]">
        <div className="w-[70px] h-[70px] rounded-full grid place-content-center bg-white shadow-check-icon">
          <img src={tick} alt="tick" />
        </div>
      </div>
      <h1 className="text-6xl font-semibold mx-[10px] mt-16">
        Congratulations 🎉
      </h1>
      <p className="text-lg-line-height text-gray mt-4">
        People like you make the world a better place!
      </p>
      <Separator className="w-5/6 mt-[30px]" />
      <p className="text-[#0A0A0AB8] text-lg-line-height mt-3.5">
        You have offsetted
        <span className="text-dark-green font-bold mx-1">100 tons</span>
        of CO2
      </p>
      <h2 className="text-4xl font-semibold mt-2">Carbon Credits: 1000</h2>
      <div className="w-full mx-14 pt-11 grid grid-cols-2 grid-rows-2 gap-4">
        <CertificateDialogDetail
          title="Transaction Hash"
          value="0x0008c5752257..."
        />
        <CertificateDialogDetail title="Investor Name" value="Antonio Rivera" />
        <CertificateDialogDetail title="Amount Invested" value="$GUC 100,000" />
        <CertificateDialogDetail title="Project Name" value="Food in Lamba" />
      </div>
      <div className="w-full flex justify-between items-center mt-8 mb-14">
        <CertificateDialogButton
          text={"Download Certificate"}
          icon={download}
          onClick={handleDownloadClick}
        />
        <CertificateDialogButton text={"Convert as an NFT"} icon={convert} />
      </div>
      <FooterCirclers />
    </div>
  );
};

const CertificateDialogDetail = ({ title, value }) => {
  return (
    <div className="border-2 p-4 border-green flex flex-col items-start rounded-md">
      <h4 className="text-[#000000B8] text-[15px]">{title}</h4>
      <p className="text-lg font-medium mt-1.5">{value}</p>
    </div>
  );
};

const CertificateDialogButton = ({ text, onClick, icon }) => {
  return (
    <Button
      onClick={onClick}
      className="text-dark px-0"
      variant="ghost"
      size="md"
    >
      <img className="mr-3" src={icon} alt="convert" />
      <p>{text}</p>
    </Button>
  );
};

const FooterCirclers = () => {
  return (
    <div className="absolute flex bottom-[0.25px]">
      {Array.from({ length: 13 }).map((val, index) => (
        <div key={index} className={`bg-dim overflow-hidden w-6 h-3 rounded-t-full mr-2.5`} />
      ))}
    </div>
  );
};
