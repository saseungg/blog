import MarkdownViewer from '@/components/MarkdownViewer';
import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function Post({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article>
      <section>
        <div>
          <h1 className='text-4xl font-bold'>{title}</h1>
          <p>{date.toString()}</p>
          <p>{description}</p>
        </div>
        <MarkdownViewer content={content} />
      </section>
    </article>
  );
}
