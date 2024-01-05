// import { SkeletonCard } from '@/components';
import { SkeletonCard } from '@/components/molecules/card';
import './CardLists.scss';

export default function CardListsSkeleton() {
  return (
    <div className='card-lists'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
