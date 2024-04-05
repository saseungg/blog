import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';
import { GoArrowUpLeft } from 'react-icons/go';
import Link from 'next/link';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section>
      {/* 상단 영역 */}
      <Link className="flex items-center gap-[3px] mb-6 w-fit hover:opacity-50" href="/">
        <GoArrowUpLeft fill="var(--text-default)" />
        <p className="text-[17px] font-newsreader text-custom-textDefault ">home</p>
      </Link>
      {/* 타이틀, 설명, 날짜 */}
      <div className="mb-12 flex flex-col gap-2 font-gowun">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-[15px] text-gray-1000 text-custom-textDesc2">{description}</p>

        <div className="flex gap-2 text-custom-textDesc2">
          <a
            className="text-sm font-medium border-b border-custom-border hover:opacity-50"
            href="https://github.com/saseungg"
          >
            사승연
          </a>
          <p className="text-sm text-gray-1000">·</p>
          <p className="text-sm text-gray-1000">{date.toString()}</p>
        </div>
      </div>
      {/* Content 영역 */}
      <MarkdownViewer content={content} />
    </section>
  );
}
