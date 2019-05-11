#!/bin/sh

BUCKET_NAME=ci-cd.ga

gsutil -m rsync -rdJ dist gs://$BUCKET_NAME

gsutil -m rsync -rdJ dist gs://www.$BUCKET_NAME

gsutil iam ch allUsers:objectViewer gs://$BUCKET_NAME

gsutil iam ch allUsers:objectViewer gs://www.$BUCKET_NAME

gsutil web set -m index.html -e index.html gs://$BUCKET_NAME

gsutil web set -m index.html -e index.html gs://www.$BUCKET_NAME

gsutil setmeta -h "Content-Type:text/html" \
  -h "Cache-Control:private, max-age=0, no-transform" \
  -h "Content-Disposition: inline" gs://$BUCKET_NAME/**/*.html

gsutil setmeta -h "Content-Type:text/html" \
  -h "Cache-Control:private, max-age=0, no-transform" \
  -h "Content-Disposition: inline" gs://www.$BUCKET_NAME/**/*.html
