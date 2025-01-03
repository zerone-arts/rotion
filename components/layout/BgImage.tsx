import Image from "next/image";
import img from "@/public/assets/image/bg/spider2.png";
export default function BgImage() {
  return (
    <Image
      src={img}
      alt="test"
      sizes="100vw"
      fill
      className="absolute w-full h-screen -z-10 opacity-20 duration-500 ease-out object-cover dark:opacity-5"
      priority
    />
  );
}
