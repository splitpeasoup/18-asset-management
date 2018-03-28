![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 18: Image Uploads w/ AWS S3
===

## Submission Instructions
* Fork this repository & create a new branch for your work
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Push to your repository
* Submit a pull request to this repository
* Submit a link to your PR in canvas
* Write a question and observation on canvas

## Learning Objectives  
* Students will be able to upload static assets to AWS S3
* Students will be able to retrieve a cdn url that contains the previously uploaded static asset
* Students will be able to work with secret and public access keys

## Requirements
#### Configuration
* `package.json`
* `.gitignore`
* `README.md`

#### Description
Create a server that accepts file uploads, stores the file in AWS S3, and stores a
reference to the S3 storage location in a local database.

* Create an AWS account
* Create an AWS Access Key and Secret
  * Add the Access Key and Secret to your `.env` file
* Create a new model that represents a file type that you want to store on AWS S3
  * Examples: `.mp3`, `.mp4`, `.png`, etc
* Create a test that uploads one of these files to your route
* Store a reference to the uploaded file in your database
* Use the `aws-sdk` to assist with uploading
* Use `multer` to parse the file upload request

#### Server Endpoint
* `POST` - `/api/resource`
* Test: `POST` - **200** - test that the upload worked and a resource object is returned
* `GET` - `/api/resource`
* Test: `GET` - **200** - returns a list of all resources that have been
  uploaded
* `GET` - `/api/resource?id`
* Test: `GET` - **200** - returns info on one resource that's been uploaded

#### Stretch Goals
##### Add Auth
* Add Authorization so users can sign up, and log in.
* Restrict the `GET` endpoints to only return resources associated with the
  authorized user account.

##### Allow Deletion
* `DELETE` route - `/api/resource?resourceID`
* Test: `DELETE` - **204** - test to ensure the object was deleted from s3

* Try using the `deleteObject` method provided by the `aws-sdk` to delete an object *(file)* from S3
  * Tou will need to pass in a `params` object that contains the associated Bucket and AWS object key in order to delete the object from s3
  * Example:
  ``` javascript
  var params = {
    Bucket: 's3-bucket-name',
    Key: 'object-filename'
  }
  s3.deleteObject(params)
  ```
* Don't forget to remove the resource from the DB
