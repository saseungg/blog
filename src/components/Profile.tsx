export default function Profile() {
  return (
    <div className="flex w-full flex-col gap-2">
      {/* Title */}
      <h1 className="text-xl font-bold">사승연의 블로그</h1>
      {/* Link */}
      <div className="flex gap-2">
        <a className="text-xs" href="https://github.com/saseungg">
          Github
        </a>
        <a className="text-xs" href="mailto:yeon14766@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}
