import { Post } from '@/service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostPreviewItem({ post: { title, description, date, path } }: Props) {
  return (
    <Link href={`posts/${path}`}>
      <article className="py-4">
        <h2 className="text-lg font-medium">{title}</h2>
        <p className="text-sm">{description}</p>
        <p className="text-xs text-gray-400">{date.toString()}</p>
      </article>
    </Link>
  );
}
