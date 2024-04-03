import Profile from '@/components/Profile';
import PostPreviewList from '@/components/PostPreviewList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '블로그 입니다',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Profile />
      <PostPreviewList />
    </div>
  );
}
