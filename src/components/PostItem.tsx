import { Post } from '@/service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostItem({ post: { title, description, date, path } }: Props) {
  return (
    <Link href={`posts/${path}`}>
      <article className='py-4 border-b'>
        <h2 className='text-[19px] font-semibold'>{title}</h2>
        <p className='text-[15px]'>{description}</p>
        <p className='text-[13px]'>{date.toString()}</p>
      </article>
    </Link>
  );
}
