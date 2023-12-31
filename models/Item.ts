import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  
  name: { type: String, required: true,  maxlength: 50 },
  catalogNumber: { type: String, required: true },
  itemDescription: String,
  itemType: {type: String,enum: ['fruit', 'vegetable', 'field crop'],required: true},
  date: Date,
});

const Item = mongoose.model('item', itemSchema)

export default Item;
