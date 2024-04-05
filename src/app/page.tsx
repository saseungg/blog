import Profile from '@/components/Profile';
import PostPreviewList from '@/components/PostPreviewList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'saseungg',
  description: 'dev blog',
};

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Profile />
      <PostPreviewList />
    </div>
  );
}
