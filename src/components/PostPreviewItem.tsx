import { Post } from '@/service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostPreviewItem({ post: { title, description, date, path } }: Props) {
  return (
    <Link href={`posts/${path}`}>
      <article className="py-4 flex justify-between items-center">
        <div className="flex flex-col justify-between font-gowun gap-[3px]">
          <h2 className="text-base">{title}</h2>
          <p className="text-[13px] text-custom-textDesc2">{description}</p>
        </div>
        <p className="text-xs font-newsreader text-custom-textDesc1">{date.toString()}</p>
      </article>
    </Link>
  );
}
