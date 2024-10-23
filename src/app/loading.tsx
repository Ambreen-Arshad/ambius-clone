import Image from "next/image";
import Loading from "./public/loading.png";
export default function LoadingorSuspense() {
  return (
    <div>
     <div className="flex justify-center items-center my-60 text-gray-500">
        <Image
          src={Loading}
          alt="Loading..."
          width={100}
          height={100}
          priority
          className="m-20"
        />
      </div>
    </div>
  );
}
