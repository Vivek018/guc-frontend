import { InputField } from "@/components/forms/InputField";
import { Button } from "@/components/ui/Button";

import sendMail from "@/assets/icons/sendMail.svg";
import loginMail from "@/assets/icons/loginMail.svg";
import search from "@/assets/icons/search.svg";

export const Misc = () => {
  return (
    <div className="bg-linear-gradient w-full h-screen flex flex-col gap-4 justify-center items-center">
      <Button>Donate</Button>
      <Button className="bg-white text-black font-normal">Sign In</Button>
      <Button variant="outline" size="md">
        Donate now
      </Button>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          ﹢
        </Button>
        <Button variant="outline" size="md">
          View Certificate
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size="sm">All</Button>
        <Button variant="outline" size="sm">
          Disaster
        </Button>
        <Button size="icon">＋</Button>
      </div>
      <div className="bg-black p-4 flex w-full justify-center gap-4">
        <Button size="hero">Buy GUC Coin</Button>
        <Button variant="ghost" size="sm">
          Watch Video ＋
        </Button>
      </div>
      <InputField
        variant="send-email"
        type="email"
        placeholder="Enter your email address"
        buttonOrIcon={
          <Button size="icon">
            <img src={sendMail} alt="Send Mail" />
          </Button>
        }
      />
      <div className="w-full bg-gray flex flex-col p-4">
        <InputField
          variant="search"
          placeholder="Find projects..."
          buttonOrIcon={<img className="mr-6" src={search} alt="search icon" />}
        />
        <InputField
          labelClassName="mt-10 text-lg"
          placeholder="Enter Amount"
          label="Amount"
        />
        <InputField
          variant="login-email"
          labelClassName="mt-10"
          inputClassName="text-green font-bold"
          placeholder="Enter your email..."
          label="Email(optional)"
          buttonOrIcon={<LoginEmailIcon />}
        />
      </div>
    </div>
  );
};

export const LoginEmailIcon = () => {
  return (
    <div className="bg-[#3F4856] w-10 h-10 grid place-content-center rounded-lg mr-3">
      <img src={loginMail} alt="login mail icon" />
    </div>
  );
};
