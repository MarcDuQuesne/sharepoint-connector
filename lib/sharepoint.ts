import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

interface SharepointConnectorProps {}

export class SharepointConnector extends Construct {
  constructor(scope: Construct, id: string, props: SharepointConnectorProps) {
    super(scope, id);
  }
}

interface SchemaMigrationExampleStackProps extends cdk.StackProps {}

export class Sharepoint2S3Stack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: SchemaMigrationExampleStackProps) {
    super(scope, id, props);
  }
}
