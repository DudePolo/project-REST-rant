const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, require: true },
  pic: String,
  cuisines: { type: String, require: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)
//Get Places
// [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/mcds.jpg',
//     cred: "https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
//     credName: 'Andres',
//     photoLink: ""
//   }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/bk.jpg',
//     cred: "https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
//     credName: 'Andress',
//     photoLink: ""
//   }]
