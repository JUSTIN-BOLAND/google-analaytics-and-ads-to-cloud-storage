const bucketName = "liftlytics-10th-april-2020-bucket";

// Imports the Google Cloud client library
const { Storage } = require("@google-cloud/storage");

// Creates a client
const storage = new Storage({
  keyFilename: "credentials/credentials.json",
});

function uploadFile(filename) {
  // Uploads a local file to the bucket
  storage.bucket(bucketName).upload(filename, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: true,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: "no-cache",
    },
  });

  console.log(`${filename} uploaded to ${bucketName}.`);
}

module.exports = uploadFile;
