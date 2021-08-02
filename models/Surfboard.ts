import mongoose from 'mongoose';
import slugify from 'slugify';
import { Surfboard } from '../data/surfboards';

const SurfboardSchema = new mongoose.Schema({
  brand: {
    type: String,
    require: [true, 'Please add a brand'],
  },
  model: {
    type: String,
    require: [true, 'Please add a model'],
  },
  description: {
    type: String,
    require: [true, 'Please add a description'],
  },
  shaperUrl: {
    type: String,
    require: [true, "Please add a URL to the shaper's website"],
  },
  category: {
    type: String,
    require: [true, 'Please add a surfboard category'],
  },
  slug: String,
  price: {
    type: Number,
    require: [true, 'Please add a price in cents'],
  },
  images: {
    type: Array,
    require: [true, 'Please add images'],
  },
  dimensions: {
    type: Array,
    require: [true, 'Please add dimensions'],
  },
  wave: {
    type: Object,
    require: [true, 'Please add wave attributes'],
  },
  performance: {
    type: Object,
    require: [true, 'Please add performance attributes'],
  },
  shape: {
    type: Object,
    require: [true, 'Please add shape attributes'],
  },
  reviews: {
    type: Array,
    default: [],
  },
});

// Create slug from the model and brand
SurfboardSchema.pre('save', function (next) {
  this.slug = slugify(`${this.brand} ${this.model}`, { lower: true });
  next();
});

const SurfboardModel =
  mongoose.models.Surfboard || mongoose.model('Surfboard', SurfboardSchema);

export default SurfboardModel;
