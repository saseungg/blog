import Image from 'next/image';
import profileImage from '../../public/images/profile.jpeg';

export default function Hero() {
  return (
    <div className='flex w-full bg-slate-100 items-center'>
      <Image className="rounded-full" src={profileImage} alt="profile" width={70} height={70} />
      <p>사승연</p>
    </div>
  );
}
