import { APP_IMAGES } from "@modules/app/constants";

export default function Img() {
  return (
    <div
      className="rounded-t-[300px] w-full max-w-[440px] h-[600px] lg:block hidden"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(52, 152, 219, 0.3), rgba(52, 152, 219, 0.3)), url(${APP_IMAGES.LANDING.PRESENTATION.src})`,
      }}
    ></div>
  );
}
