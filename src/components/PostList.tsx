import { getAllPosts } from '@/service/posts';
import PostItem from './PostItem';

export default async function PostList() {
  const posts = await getAllPosts();

  return (
    <div className="bg-slate-100">
      <ul>
        {posts.map((post) => (
          <li key={post.path}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
