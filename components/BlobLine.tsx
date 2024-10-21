import Blob from "./Blob";

export default function BlobLine({ reverse = true }: { reverse?: boolean }) {
  return (
    <div
      className={`${
        reverse ? "rotate-180 translate-y-5" : "translate-y-[3.5rem]"
      } absolute left-0 w-full bottom-0 translate-y-2 max-sm:h-14 `}
    >
      <Blob />
    </div>
  );
}
