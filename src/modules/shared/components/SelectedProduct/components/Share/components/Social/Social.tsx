import { SocialMedia } from "../../interfaces";
import { Button } from "./components";

interface Props {
  socials: Array<SocialMedia>;
}

export default function Social({ socials }: Props) {
  return (
    <section className="flex flex-col mb-7 text-center items-center">
      <h1 className="font-fontMedium text-xl mb-2.5">
        Share this with your social Community
      </h1>

      <div className="flex gap-x-4 flex-wrap">
        {socials.map((s, index) => (
          <Button
            key={index}
            color={s.color}
            icon={s.icon}
            name={s.name}
            link={s.link}
          />
        ))}
      </div>
    </section>
  );
}
