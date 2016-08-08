* I am uploading files to Amazon S3 with Laravel filesystem. The upload process works great, however, when I download the files get corrupted. I have manually downloaded the files from the S3 bucket and that way the files don't get corrupted, so I figured that the problem is not the upload.

* Error: UNABLE_TO_VERIFY_LEAF_SIGNATURE
  Sol: process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';