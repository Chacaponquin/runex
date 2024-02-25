import { APP_IMAGES } from "@modules/app/constants";

export default function Image() {
  return (
    <div className="xl:flex h-full justify-center w-full hidden">
      <div
        className="rounded-t-[300px] w-full"
        style={{
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(rgba(52, 152, 219, 0.3), rgba(52, 152, 219, 0.3)), url(${APP_IMAGES.LANDING.PRESENTATION.src})`,
        }}
      ></div>
    </div>
  );
}
