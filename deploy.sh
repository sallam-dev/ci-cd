#!/bin/sh

BUCKET_NAME=egyptjs.sallam.dev

gsutil -m rsync -rdJ dist gs://$BUCKET_NAME


gsutil iam ch allUsers:objectViewer gs://$BUCKET_NAME


gsutil web set -m index.html -e index.html gs://$BUCKET_NAME


gsutil setmeta -h "Content-Type:text/html" \
  -h "Cache-Control:private, max-age=0, no-transform" \
  -h "Content-Disposition: inline" gs://$BUCKET_NAME/**/*.html
