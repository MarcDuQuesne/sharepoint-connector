#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { Sharepoint2S3Stack } from "../lib/sharepoint";

const app = new cdk.App();
new Sharepoint2S3Stack(app, "Sharepoint2S3Stack", {
  env: {
    account: cdk.Aws.ACCOUNT_ID,
    region: "eu-west-1",
  },
});
