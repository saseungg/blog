import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import PostNavigator from '@/components/PostNavigator';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <article>
      <PostContent post={post} />
      <PostNavigator post={post} />
    </article>
  );
}
