import { getAllPosts } from '@/service/posts';
import Link from 'next/link';

export default async function PostPreviewList() {
  const posts = await getAllPosts();

  return (
    <div>
      <ul className="group">
        {posts.map(({ title, description, date, path }) => (
          <li key={path} className="animate-slide-enter ">
            <Link href={`posts/${path}`}>
              <article className="py-4 flex justify-between items-center group-hover:opacity-40 hover:!opacity-100">
                <div className="flex flex-col justify-between font-gowun gap-[3px]">
                  <h2 className="text-base text-custom-textHead">{title}</h2>
                  <p className="text-[13px] text-custom-textDesc2">{description}</p>
                </div>
                <p className="text-xs font-newsreader text-custom-textDesc1">{date.toString()}</p>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
