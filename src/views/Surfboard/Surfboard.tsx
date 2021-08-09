import { useSession } from 'next-auth/client';
import React, { useState } from 'react';
import { Review, Surfboard } from '../../../types/surfboard';
import SignInModal from '../../components/SignIn/SignIn';
import SurfboardDetails from './components/Details/Details';
import ReviewList from './components/ReviewList/ReviewList';
import ReviewModal from './components/ReviewModal/ReviewModal';

type SurfboardViewProps = {
  item: Surfboard;
};

const SurfboardView = ({ item }: SurfboardViewProps) => {
  const [reviews, setReviews] = useState<Review[]>(item.reviews);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [session, loading] = useSession();
  return (
    <div>
      <SurfboardDetails
        item={item}
        reviews={reviews}
        setIsAddReviewOpen={setIsAddReviewOpen}
      />
      <ReviewList reviews={reviews} model={item.model} />
      {session ? (
        <ReviewModal
          isOpen={isAddReviewOpen}
          setIsOpen={setIsAddReviewOpen}
          setReviews={setReviews}
          session={session}
        />
      ) : (
        <SignInModal isOpen={isAddReviewOpen} setIsOpen={setIsAddReviewOpen} />
      )}
    </div>
  );
};

export default SurfboardView;
