const express = require("express");
const fs = require("fs");
// External API....
// const axios = require("axios");

// PHOTOS = async () => {
//   try {
//     await axios
//       .get(`https://jsonplaceholder.typicode.com/posts`)
//       .then((res) => res.json())
//       .then((json) => console.log(json));
//   } catch (error) {
//     console.log(error);
//   }
// };
// const getALLPhotos = (req, res, next) => {
//   res.status(200).json({
//     data: JSON.stringify(PHOTOS),
//   });
//   next();
// };

const PHOTOS = JSON.parse(fs.readFileSync(`${__dirname}/../data/data.json`));

getALLPhotos = (req, res) => {
  res.status(200).json({
    data: { PHOTOS },
  });
  console.log(PHOTOS);
};
