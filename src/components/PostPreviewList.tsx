import { getAllPosts } from '@/service/posts';
import PostPreviewItem from './PostPreviewItem';

export default async function PostPreviewList() {
  const posts = await getAllPosts();

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.path} className='animate-slide-enter'>
            <PostPreviewItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
