import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/posts';
import { Metadata } from 'next';
import PostNavigator from '@/components/\bPostNavigator';

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

  return (
    <article>
      <PostContent post={post} />
      <PostNavigator post={post} />
    </article>
  );
}
