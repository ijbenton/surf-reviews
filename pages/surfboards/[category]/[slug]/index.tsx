import React, { useState } from 'react';
import ReviewModal from '../../../../src/views/Surfboard/components/ReviewModal/ReviewModal';
import ReviewList from '../../../../src/views/Surfboard/components/ReviewList/ReviewList';
import { server } from '../../../../src/lib/config';
import SignInModal from '../../../../src/components/SignIn/SignIn';
import { useSession } from 'next-auth/client';
import SurfboardDetails from '../../../../src/views/Surfboard/components/Details/Details';
const SurfboardPage = ({ surfboard }) => {
  const [reviews, setReviews] = useState(surfboard.reviews);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [session, loading] = useSession();
  return (
    <div>
      <SurfboardDetails
        surfboard={surfboard}
        reviews={reviews}
        setIsAddReviewOpen={setIsAddReviewOpen}
      />
      <ReviewList reviews={reviews} model={surfboard.model} />
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

export const getStaticProps = async (context) => {
  console.log(context);
  const res = await fetch(
    `${server}/api/surfboards/${context.params.category}/${context.params.slug}`
  );

  const surfboard = await res.json();

  return {
    props: {
      surfboard: surfboard.data,
    },
  };
};

export const getStaticPaths = async (context) => {
  console.log(context);
  const res = await fetch(`${server}/api/surfboards`);

  const surfboards = await res.json();

  const slugsAndCategories = surfboards.data.map((surfboard) => ({
    slug: surfboard.slug,
    category: surfboard.category,
  }));
  const paths = slugsAndCategories.map((item) => ({
    params: { slug: item.slug, category: item.category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SurfboardPage;
