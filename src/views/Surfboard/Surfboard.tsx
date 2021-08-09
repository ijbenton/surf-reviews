import { useSession } from 'next-auth/client';
import React, { useState } from 'react';

const SurfboardView = ({ item }) => {
  const [reviews, setReviews] = useState(item.reviews);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [session, loading] = useSession();
  return (
    <div>
      <SurfboardDetails
        surfboard={item}
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
