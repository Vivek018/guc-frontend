import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";

import tick from "@/assets/icons/tick.svg";
import download from "@/assets/icons/download.svg";
import convert from "@/assets/icons/convert.svg";

export const CertificateDialogContent = ({ handleDownloadClick }) => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute -top-[35px] max-mobile:-top-[24px]">
        <div className="w-[70px] max-mobile:w-[48px] max-mobile:h-[48px] h-[70px] rounded-full grid place-content-center bg-white shadow-check-icon">
          <img className="max-mobile:w-[30px]" src={tick} alt="tick" />
        </div>
      </div>
      <h1 className="text-6xl max-mobile:text-[28px] font-semibold mx-auto mt-16 max-mobile:mt-8">
        Congratulations 🎉
      </h1>
      <p className="text-lg-line-height max-mobile:text-sm text-gray mt-2">
        People like you make the world a better place!
      </p>
      <Separator className="w-4/6 mt-[20px]" />
      <p className="text-[#0A0A0AB8] text-lg-line-height max-mobile:text-sm mt-3.5">
        You have offsetted
        <span className="text-dark-green font-bold mx-1">100 tons</span>
        of CO2
      </p>
      <h2 className="text-4xl max-mobile:text-2xl font-semibold mt-2">
        Carbon Credits: 1000
      </h2>
      <div className="mx-14 max-mobile:mx-4 pt-8 grid grid-cols-2 grid-rows-2 gap-4 place-items-center">
        <CertificateDialogDetail
          title="Transaction Hash"
          value="0x0008c5752257..."
        />
        <CertificateDialogDetail title="Investor Name" value="Antonio Rivera" />
        <CertificateDialogDetail title="Amount Invested" value="$GUC 100,000" />
        <CertificateDialogDetail title="Project Name" value="Food in Lamba" />
      </div>
      <div className="w-full flex justify-center items-center mt-8 mb-10">
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
    <div className="max-tablet:w-[180px] max-mobile:w-[150px] max-small-mobile:w-[130px] w-[220px] border-2 p-4 max-mobile:p-[10px] border-green flex flex-col items-start rounded-md">
      <h4 className="text-[#000000B8] text-[15px] max-mobile:text-xs">
        {title}
      </h4>
      <p className="text-lg max-mobile:text-sm font-medium mt-1.5">{value}</p>
    </div>
  );
};

const CertificateDialogButton = ({ text, onClick, icon }) => {
  return (
    <Button
      onClick={onClick}
      className="text-dark px-0 max-mobile:w-[150px] max-mobile:text-sm mx-2"
      variant="ghost"
      size="md"
    >
      <img className="mr-3 max-mobile:w-[15px]" src={icon} alt="convert" />
      <p>{text}</p>
    </Button>
  );
};

const FooterCirclers = () => {
  return (
    <div className="flex">
      {Array.from({ length: 13 }).map((val, index) => (
        <div
          key={index}
          className={`bg-dim z-50 w-6 max-mobile:w-4 max-mobile:h-2 h-3 rounded-t-full mr-3 max-mobile:mr-1.5`}
        />
      ))}
    </div>
  );
};
