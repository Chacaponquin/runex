import { UserData } from "@containers/User/interfaces";
import { Data, Img } from "./components";

interface Props {
  userData: Array<UserData>;
}

export default function Info({ userData }: Props) {
  return (
    <div className="px-5 w-full">
      <div className="bg-white rounded-lg flex flex-col -translate-y-8 w-full py-5 items-center">
        <Img />

        <div className="flex gap-x-10 w-full">
          {userData.map((d, index) => (
            <Data title={d.title} key={index} value={d.value} />
          ))}
        </div>
      </div>
    </div>
  );
}
