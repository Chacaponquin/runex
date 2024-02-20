import { APP_IMAGES } from "@modules/app/constants";

export default function Image() {
  return (
    <div
      className="h-full lg:flex hidden w-full"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url("${APP_IMAGES.LOGIN.BG.src}")`,
      }}
    ></div>
  );
}
