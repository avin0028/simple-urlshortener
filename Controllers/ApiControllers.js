const dbmodel = require("../Models/UrlsModel");
const generateString = require("../utilities/urlgenerator");

const Addurl = async (req, res, next) => {
  const originalUrl = req.query.url;
  // check if user entered the url
  if (!originalUrl) {
    res.status(400);
    res.send("please give us the url");
  }

  //check if url already shorted and database has it
  const rawUrl = await dbmodel.findOne({ url: originalUrl });
  if (rawUrl) {
    res.status(400);
    res.send("url already exists");
  } else {
    //generate random characters for short url
    const randomurl = generateString(5);
    //create and save short url and original one in database
    const shorturl = await dbmodel.create({
      url: originalUrl,
      shorted: randomurl,
    });
    //showing the shorted url to user
    siteurl = req.protocol + "://" + req.get("host");
    res.status(201);
    res.send(`short url created : ${siteurl}/${randomurl} `);
  }
};
const Geturl = async (req, res) => {
  const shortedurl = req.params.url;
  // check if shorted url exists and if it was redirect user
  const shorted = await dbmodel.findOne({ shorted: shortedurl });

  if (!shorted) {
    res.status(404).send("url not found");
  } else {
    res.redirect(shorted.url);
  }
};

module.exports = { Addurl, Geturl };
