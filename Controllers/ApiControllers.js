const dbmodel = require("../Models/UrlsModel");
const generateString = require("../utilities/urlgenerator");

const Addurl = async (req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(fullUrl);
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
  }
  //generate random characters for short url
  const randomurl = generateString(5);
  const shorturl = dbmodel.create({
    url: originalUrl,
    shorted: randomurl,
  });

  res.status(400);
  res.send("adding url");
};
const Geturl = (req, res) => {
  res.send("getting url");
};

module.exports = { Addurl, Geturl };
