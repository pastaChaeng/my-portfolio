import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/avatar.png"
        alt="avatar"
        width={737}
        height={678}
        className="translate-z-0 ml-32 mt-10 w-[80%] h-[100%]"
      />
    </div>
  );
};

export default Avatar;

