import { Post } from '@/service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostPreviewItem({ post: { title, description, date, path } }: Props) {
  return (
    <Link href={`posts/${path}`}>
      <article className="py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium font-gowun">{title}</h2>
          <p className="text-sm font-gowun">{description}</p>
          <p className="text-xs text-gray-800 font-newsreader">{date.toString()}</p>
        </div>
      </article>
    </Link>
  );
}
