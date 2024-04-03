import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/service/posts';

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section>
      {/* 상단 영역 */}
      <div className="mb-12 flex flex-col gap-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-[15px]">{description}</p>

        <div className="flex gap-2">
          <a className="text-sm font-medium" href="https://github.com/saseungg">
            사승연
          </a>
          <p className="text-sm">·</p>
          <p className="text-sm">{date.toString()}</p>
        </div>
      </div>
      {/* Content 영역 */}
      <MarkdownViewer content={content} />
    </section>
  );
}
