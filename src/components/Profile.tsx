export default function Profile() {
  return (
    <div className="flex w-full flex-col gap-2 border-b pb-9 border-custom-border">
      {/* Title */}
      <h1 className="text-2xl font-bold font-newsreader">saseungg</h1>
      {/* Link */}
      <div className="flex gap-2">
        <a className="text-xs font-newsreader hover:opacity-50" href="https://github.com/saseungg">
          Github
        </a>
        <a className="text-xs font-newsreader hover:opacity-50" href="mailto:yeon14766@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}
