import { UserContext } from "@/app/contexts/UserContext";
import { useContext } from "react";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  const { user } = useContext(UserContext);

  return (
    <div
      className={`${
        user?._id ? "pr-64" : "pr-32"
      } w-full desktop:h-10 laptop:h-8 desktop:text-base laptop:text-sm bg-primary grid place-content-center cursor-default`}
    >
      <Marquee className="text-white" pauseOnHover direction="right" speed={80}>
        <div className="w-[50vw]">
          <p>-20% la mulinete universale</p>
        </div>
        <div className="w-[50vw]">
          <p>-10% la lansete bologneze</p>
        </div>
      </Marquee>
    </div>
  );
};

export default Announcement;
