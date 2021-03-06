import { StarIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { Rating as RatingType } from '../../../../../types/surfboard';
import { reviewSkillLevels } from '../../../../../constants/surfboard';
import { Dimension, Review } from '../../../../../types/surfboard';
import Spinner from '../../../../components/Spinner/Spinner';
import styles from './ReviewForm.module.css';

type ReviewFormProps = {
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
  session: any;
};

type Values = {
  description: string;
  age?: number;
  weight?: number;
  height?: string;
  skill?: string;
  dimension: Dimension;
  rating: RatingType;
};

const ReviewForm = ({ setReviews, session }: ReviewFormProps) => {
  const {
    query: { slug },
  } = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const submitHandler = (
    values: Values,
    { resetForm, setSubmitting }: FormikHelpers<Values>
  ) => {
    axios
      .post(`/api/surfboards/${slug}/reviews`, values)
      .then((res) => {
        setReviews((prevState) => [...prevState, res.data.data]);
        setSuccessMsg('Review was posted!');
        resetForm();
        setSubmitting(false);
        setTimeout(() => {
          setSuccessMsg(null);
        }, 5000);
      })
      .catch((err) => {
        setErrorMsg(err?.response?.data?.message);
        setSubmitting(false);
        setTimeout(() => {
          setErrorMsg(null);
        }, 5000);
      });
  };
  const initialValues: Values = {
    description: '',
    age: session?.user?.age || null,
    weight: session?.user?.weight || null,
    height: session?.user?.height || '',
    skill: session?.user?.skill || 'beginner',
    dimension: {
      height: '',
      thickness: '',
      width: '',
      volume: null,
    },
    rating: {
      speed: 3,
      turning: 3,
      userFriendly: 3,
      paddling: 3,
      quality: 3,
      overall: 3,
    },
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler}>
      {({ values, isSubmitting, setFieldValue }) => (
        <div className='relative'>
          {errorMsg && (
            <div className='bg-red-500 p-2 my-2 shadow-sm text-white rounded-lg'>
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className='bg-green-500 p-2 my-2 shadow-sm text-white rounded-lg'>
              {successMsg}
            </div>
          )}
          <Form className={`${styles.form} ${isSubmitting ? styles.hide : ''}`}>
            <div className='flex justify-between'>
              <div className='space-y-1 w-36'>
                <label>Age</label>
                <Field
                  className='pl-1 w-full border border-gray-200'
                  type='number'
                  name='age'
                  placeholder={25}
                  required
                />
              </div>
              <div className='space-y-1 w-36'>
                <label>Height</label>
                <Field
                  className='pl-1 w-full border border-gray-200'
                  type='text'
                  name='height'
                  placeholder={`5'9"`}
                  required
                />
              </div>
              <div className='space-y-1 w-36'>
                <label>Weight</label>
                <Field
                  className='pl-1 w-full border border-gray-200'
                  type='number'
                  name='weight'
                  placeholder={160}
                  required
                />
              </div>
              <div className='space-y-1 w-36'>
                <label>Skill Level</label>
                <Field
                  as='select'
                  className='pl-1 w-full border border-gray-200'
                  name='skill'
                >
                  {reviewSkillLevels.map((type, idx) => (
                    <option value={type} key={`${type} + ${idx}`}>
                      {type}
                    </option>
                  ))}
                </Field>
              </div>
            </div>
            <div>
              <h4 className='font-semibold italic'>Dimensions</h4>
              <div className='flex justify-between'>
                <div className='space-y-1 w-36'>
                  <label>Height</label>
                  <Field
                    className='pl-1 w-full border border-gray-200'
                    type='text'
                    name='dimension.height'
                    placeholder={`5'9"`}
                    required
                  />
                </div>
                <div className='space-y-1 w-36'>
                  <label>Width</label>
                  <Field
                    className='pl-1 w-full border border-gray-200'
                    type='text'
                    name='dimension.width'
                    placeholder='18 7/8'
                    required
                  />
                </div>
                <div className='space-y-1 w-36'>
                  <label>Thickness</label>
                  <Field
                    className='pl-1 w-full border border-gray-200'
                    type='text'
                    name='dimension.thickness'
                    placeholder='2 3/8'
                    required
                  />
                </div>
                <div className='space-y-1 w-36'>
                  <label>Volume</label>
                  <Field
                    className='pl-1 w-full border border-gray-200'
                    type='number'
                    name='dimension.volume'
                    placeholder={26.5}
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 className='font-semibold italic'>
                How do you rate this surfboard?
              </h4>
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <label>User Friendly</label>
                  <Rating
                    initialRating={values.rating.userFriendly}
                    onChange={(val) =>
                      setFieldValue('rating.userFriendly', val)
                    }
                    emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                    fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Turning</label>
                  <Rating
                    initialRating={values.rating.turning}
                    onChange={(val) => setFieldValue('rating.turning', val)}
                    emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                    fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Paddling</label>
                  <Rating
                    initialRating={values.rating.paddling}
                    onChange={(val) => setFieldValue('rating.paddling', val)}
                    emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                    fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Speed</label>
                  <Rating
                    initialRating={values.rating.speed}
                    onChange={(val) => setFieldValue('rating.speed', val)}
                    emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                    fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Quality</label>
                  <Rating
                    initialRating={values.rating.quality}
                    onChange={(val) => setFieldValue('rating.quality', val)}
                    emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                    fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                  />
                </div>
                <div className='flex flex-col'>
                  <label>Overall</label>
                  <Rating
                    initialRating={values.rating.overall}
                    onChange={(val) => setFieldValue('rating.overall', val)}
                    emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                    fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                  />
                </div>
              </div>
              <div className='flex'>
                <div className='flex flex-1 flex-col w-auto'>
                  <label>Description</label>
                  <Field
                    as='textarea'
                    name='description'
                    className='pl-1 text-sm w-full h-24 border border-gray-200'
                  />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className={`w-24 h-8 text-center text-xs ${
                isSubmitting ? 'bg-gray-500' : 'bg-teal-500 hover:bg-teal-700'
              } text-white font-bold py-2 px-4 rounded`}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
          {isSubmitting ? <Spinner /> : null}
        </div>
      )}
    </Formik>
  );
};

export default ReviewForm;
