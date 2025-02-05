interface PingProps {
  bgColor?: string;
}

export default function Ping({ bgColor = "bg-green" }: Readonly<PingProps>) {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${bgColor}`}
      ></span>
      <span
        className={`relative inline-flex h-3 w-3 rounded-full ${bgColor}`}
      ></span>
    </span>
  );
}
