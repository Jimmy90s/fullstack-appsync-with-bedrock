import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { createStockExampleAuth } from "./auth/cognito";
import { createAmplifyGraphQLAPI } from "./api/appsync";
import { createAmplifyHosting } from "./hosting/amplify";

export class BackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const appName = "stock-explanations-2";

    const stockAuth = createStockExampleAuth(this, {
      appName,
    });

    const stockAPI = createAmplifyGraphQLAPI(this, {
      appName,
      userpool: stockAuth.userPool,
      identityPoolId: stockAuth.identityPool.identityPoolId,
      authRole: stockAuth.identityPool.authenticatedRole,
      unauthRole: stockAuth.identityPool.unauthenticatedRole,
    });

    const amplifyHosting = createAmplifyHosting(this, {
      account: this.account,
      appName,
      branch: "main",
      ghOwner: "jimmy90s",
      repo: "fullstack-appsync-with-bedrock",
      ghTokenName: "github-token",
    });

    new cdk.CfnOutput(this, "UserPoolId", {
      value: stockAuth.userPool.userPoolId,
    });
    new cdk.CfnOutput(this, "UserPoolClientId", {
      value: stockAuth.userPoolClient.userPoolClientId,
    });
    new cdk.CfnOutput(this, "IdentityPoolId", {
      value: stockAuth.identityPool.identityPoolId,
    });
    new cdk.CfnOutput(this, "AppSyncAPIEndpoint", {
      value: stockAPI.graphqlUrl,
    });
    new cdk.CfnOutput(this, "AppSyncAPIId", {
      value: stockAPI.resources.graphqlApi.apiId,
    });
    new cdk.CfnOutput(this, "AppSyncAuthType", {
      value: stockAPI.resources.cfnResources.cfnGraphqlApi.authenticationType,
    });
    new cdk.CfnOutput(this, "AppRegion", {
      value: this.region,
    });
  }
}
