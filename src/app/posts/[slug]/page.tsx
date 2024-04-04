import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetaData({ params: { slug } }: Props): Promise<Metadata> {
  const { title, description } = await getPostData(slug);
  return {
    title,
    description,
  };
}

export default async function Post({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { next, prev } = post;

  return (
    <article>
      <PostContent post={post} />
      <section className="text-tx flex items-stretch justify-between gap-1 text-sm mt-16 border-t pt-7 border-custom-border">
        {prev && <AdjacentPostCard post={prev} type="prev" />}
        {next && <AdjacentPostCard post={next} type="next" />}
      </section>
    </article>
  );
}
