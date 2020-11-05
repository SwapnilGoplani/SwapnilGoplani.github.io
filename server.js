import express from 'express';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
// import countries from "./public/lab_6/countries.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.route('/api')
  .get(async(req, res) => {
    console.log('GET request detected');
    res.send(`Lab 5 for ${process.env.NAME}`);
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    // res.json(countries);     // Lab 6

    // async function callback, lab 7 #4-8
    const data = await fetch(
      'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'
    );
    const json = await data.json();
    for (let i = 0; i < 5; i++) {
      console.log(json[i]);
    }
    // console.log(output);
    res.json(json);
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
