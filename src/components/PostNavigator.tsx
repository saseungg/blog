import Link from 'next/link';
import { PostData } from '@/service/posts';

type Props = {
  post: PostData;
};

export default function PostNavigator({ post: { prev, next } }: Props) {
  return (
    <div className="flex items-stretch justify-between gap-1 mt-16 border-t pt-7 border-custom-border">
      <div>
        {prev && (
          <Link className="hover:opacity-50" href={`/posts/${prev.path}`}>
            <p className="text-sm mb-1 font-newsreader text-custom-textDesc1">Previous</p>
            <p className="text-sm font-gowun text-custom-textHead">{prev.title}</p>
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link className="hover:opacity-50" href={`/posts/${next.path}`}>
            <p className="text-sm mb-1 font-newsreader text-custom-textDesc1">Next</p>
            <p className="text-sm font-gowun text-custom-textHead">{next.title}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
