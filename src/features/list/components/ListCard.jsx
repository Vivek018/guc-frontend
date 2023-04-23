import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatDate, formatDifference } from "@/utils/format";
import { subDays } from "date-fns";

export const ListCard = ({ element, footerButton }) => {

  const {
    id,
    title,
    brief,
    category_id,
    total_donations,
    donation_amount_raised,
    donation_total_amount,
    latest_donation_time,
    published_date,
    thumbnail,
  } = element;

  const formatted_published_date = formatDate(new Date());
  const formatted_donation_time = formatDifference(subDays(new Date(), 3));

  return (
    <div className="w-[330px] max-mobile:w-[330px] max-small-mobile:w-[280px] h-[544px] max-desktop:w-[280px] mx-auto bg-white shadow-card font-dm-sans rounded-b-md">
      <div className="w-full h-52 overflow-hidden z-10">
        <img
          className="h-full z-0 object-fill rounded-t-md"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="flex flex-col px-5 pt-4 pb-6 justify-start">
        <div className="flex justify-between text-md">
          <p className="text-light-gray">{formatted_published_date}</p>
          <p className="text-green">{total_donations} donations</p>
        </div>
        <h1 className="mt-3 font-bold text-2xl font-poppins">{title}</h1>
        <p className="mt-2.5 text-md-line-height text-gray">{brief}</p>
        <p className="mt-6 text-gray text-lg">
          Last donation {formatted_donation_time}
        </p>
        <ProgressBar className="mt-3" value={33} />
        <p className="mt-3 text-lg text-gray">
          <span className="font-bold font-poppins mr-1 text-black">
            ${donation_amount_raised}
          </span>
          <span>raised of ${donation_total_amount}</span>
        </p>
        {footerButton}
      </div>
    </div>
  );
};
