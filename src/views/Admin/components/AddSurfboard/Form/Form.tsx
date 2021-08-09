import React from 'react';
import { Formik, Field, Form, FieldArray } from 'formik';
import {
  Surfboard,
  categories,
  brands,
  waveSize,
  waveBreak,
  wavePower,
  shapeEntryRocker,
  shapeExitRocker,
  shapeNose,
  shapeRails,
  shapeTailWidth,
  performanceApproach,
  performanceSkillLevel,
} from '../../../../../../types/surfboards';
import styles from './Form.module.css';
import { PlusIcon, XCircleIcon } from '@heroicons/react/outline';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import DynamicInput from '../DynamicInput/DynamicInput';
import FormSection from '../FormSection/FormSection';
import axios from 'axios';

const arrayAttrMap = (definedArr, formArr) => {
  let newArr = [];
  for (let i = 0; i < definedArr.length; i++) {
    if (formArr.indexOf(definedArr[i]) !== -1) {
      newArr.push(definedArr[i]);
    } else {
      newArr.push(null);
    }
  }
  return newArr;
};

const AddSurfboardForm = () => {
  const submitHandler = (values, { resetForm, setSubmitting }) => {
    const newObj = {
      ...values,
      wave: {
        size: arrayAttrMap(waveSize, values.wave.size),
        break: arrayAttrMap(waveBreak, values.wave.break),
        power: arrayAttrMap(wavePower, values.wave.power),
      },
      shape: {
        entryRocker: arrayAttrMap(shapeEntryRocker, values.shape.entryRocker),
        exitRocker: arrayAttrMap(shapeExitRocker, values.shape.exitRocker),
        nose: arrayAttrMap(shapeNose, values.shape.nose),
        rails: arrayAttrMap(shapeRails, values.shape.rails),
        tailWidth: arrayAttrMap(shapeTailWidth, values.shape.tailWidth),
      },
      performance: {
        approach: arrayAttrMap(
          performanceApproach,
          values.performance.approach
        ),
        skillLevel: arrayAttrMap(
          performanceSkillLevel,
          values.performance.skillLevel
        ),
      },
    };
    axios.post('/api/surfboards', newObj).then((res) => {
      // console.log(res);
    });

    resetForm();
    setSubmitting(false);
  };

  const initialValues = {
    brand: 'Pyzel',
    category: 'Shortboard / Performance',
    shaperUrl: '',
    description: '',
    model: '',
    price: 0,
    images: [''],
    dimensions: [{ height: '', width: '', thickness: '', volume: 0 }],
    wave: {
      size: [null, null, null],
      break: [null, null, null],
      power: [null, null, null],
    },
    performance: {
      approach: [null, null, null],
      skillLevel: [null, null, null],
    },
    shape: {
      rails: [null, null, null],
      nose: [null, null, null],
      tailWidth: [null, null, null],
      entryRocker: [null, null, null],
      exitRocker: [null, null, null],
    },
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {({ values, isSubmitting }) => (
          <Form className={styles.form}>
            {/* Details */}
            <div className='text-lg font-semibold my-2'>
              <span className='border-b border-gray-500'>DETAILS</span>
            </div>
            <div className='flex mb-2 text-sm'>
              <div className='flex flex-col mr-3'>
                <label>Brand</label>
                <Field as='select' name='brand'>
                  {brands.map((brand, idx) => (
                    <option value={brand} key={`${brand} + ${idx}`}>
                      {brand}
                    </option>
                  ))}
                </Field>
              </div>
              <div className='flex flex-col mr-3'>
                <label>Category</label>
                <Field as='select' name='category'>
                  {categories.map((type, idx) => (
                    <option value={type} key={`${type} + ${idx}`}>
                      {type}
                    </option>
                  ))}
                </Field>
              </div>
              <div className='flex flex-col mr-3'>
                <label>Model</label>
                <Field className='px-2' type='text' name='model' />
              </div>
              <div className='flex flex-col mr-3'>
                <label>Price</label>
                <Field className='px-2' type='number' name='price' />
              </div>
            </div>
            <div className='flex mb-2 text-sm'>
              <div className='flex flex-col mr-3'>
                <label>Shaper URL</label>
                <Field className='px-2' type='url' name='shaperUrl' />
              </div>
              <div className='flex flex-col mr-3'>
                <label>Description</label>
                <Field className='px-2' type='text' name='description' />
              </div>
            </div>
            {/* Images */}
            <div className='my-2'>
              <FieldArray name='images'>
                {(arrayHelpers) => (
                  <>
                    <div className='flex items-center mb-2'>
                      <div className='text-lg font-semibold'>
                        <span className='border-b border-gray-500'>Images</span>
                      </div>
                      <button
                        type='button'
                        className='flex border justify-center items-center p-2 border-gray-500 rounded-lg ml-4 text-xs'
                        onClick={() =>
                          arrayHelpers.insert(values.images.length, '')
                        }
                      >
                        <PlusIcon className='h-3 w-3 text-blue-500 mr-2' />
                        <span>Add Image</span>
                      </button>
                    </div>
                    {values.images && values.images.length > 0
                      ? values.images.map((item, idx) => (
                          <div
                            className='flex items-center mb-2 text-sm'
                            key={idx}
                          >
                            <DynamicInput
                              type='url'
                              title='Image URL'
                              property={`images.${idx}`}
                            />
                            <button
                              className='mt-auto'
                              type='button'
                              onClick={() =>
                                arrayHelpers.remove(values.dimensions.length)
                              }
                            >
                              <XCircleIcon className='h-5 w-5 text-red-500' />
                            </button>
                          </div>
                        ))
                      : null}
                  </>
                )}
              </FieldArray>
            </div>
            {/* Dimensions */}
            <div className='my-2'>
              <FieldArray name='dimensions'>
                {(arrayHelpers) => (
                  <>
                    <div className='flex items-center mb-2'>
                      <div className='text-lg font-semibold'>
                        <span className='border-b border-gray-500'>
                          DIMENSIONS
                        </span>
                      </div>
                      <button
                        type='button'
                        className='flex border justify-center items-center p-2 border-gray-500 rounded-lg ml-4 text-xs'
                        onClick={() =>
                          arrayHelpers.insert(values.dimensions.length, {
                            height: '',
                            width: '',
                            thickness: '',
                            volume: 0,
                          })
                        }
                      >
                        <PlusIcon className='h-3 w-3 text-blue-500 mr-2' />
                        <span>Add Dimension</span>
                      </button>
                    </div>
                    {values.dimensions && values.dimensions.length > 0
                      ? values.dimensions.map((item, idx) => (
                          <div
                            className='flex items-center mb-2 text-sm'
                            key={idx}
                          >
                            <DynamicInput
                              type='text'
                              title='Height'
                              property={`dimensions.${idx}.height`}
                            />
                            <DynamicInput
                              type='text'
                              title='Width'
                              property={`dimensions.${idx}.width`}
                            />
                            <DynamicInput
                              type='text'
                              title='Thickness'
                              property={`dimensions.${idx}.thickness`}
                            />
                            <DynamicInput
                              type='number'
                              title='Volume'
                              property={`dimensions.${idx}.volume`}
                            />
                            <button
                              className='mt-auto'
                              type='button'
                              onClick={() =>
                                arrayHelpers.remove(values.dimensions.length)
                              }
                            >
                              <XCircleIcon className='h-5 w-5 text-red-500' />
                            </button>
                          </div>
                        ))
                      : null}
                  </>
                )}
              </FieldArray>
            </div>
            {/* Wave */}
            <FormSection title='wave'>
              <div className='flex mb-4 text-sm'>
                <CheckboxGroup
                  items={waveSize}
                  title='Size'
                  property='wave.size'
                />
                <CheckboxGroup
                  items={waveBreak}
                  title='Break'
                  property='wave.break'
                />
                <CheckboxGroup
                  items={wavePower}
                  title='Power'
                  property='wave.power'
                />
              </div>
            </FormSection>
            {/* Performance */}
            <FormSection title='performance'>
              <div className='flex mb-4 text-sm'>
                <CheckboxGroup
                  items={performanceApproach}
                  title='Approach'
                  property='performance.approach'
                />
                <CheckboxGroup
                  items={performanceSkillLevel}
                  title='Skill Level'
                  property='performance.skillLevel'
                />
              </div>
            </FormSection>
            {/* Shape */}
            <FormSection title='shape'>
              <div className='flex mb-4 text-sm'>
                <CheckboxGroup
                  items={shapeRails}
                  title='Rails'
                  property='shape.rails'
                />
                <CheckboxGroup
                  items={shapeNose}
                  title='Nose'
                  property='shape.nose'
                />
                <CheckboxGroup
                  items={shapeTailWidth}
                  title='Tail Width'
                  property='shape.tailWidth'
                />
              </div>
            </FormSection>
            <div className='flex mb-4 text-sm'>
              <CheckboxGroup
                items={shapeEntryRocker}
                title='Entry Rocker'
                property='shape.entryRocker'
              />
              <CheckboxGroup
                items={shapeExitRocker}
                title='Exit Rocker'
                property='shape.exitRocker'
              />
            </div>
            {/* Submit */}
            <button
              type='submit'
              className={`w-24 h-8 text-center text-xs ${
                isSubmitting ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
              } text-white font-bold py-2 px-4 rounded`}
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSurfboardForm;
