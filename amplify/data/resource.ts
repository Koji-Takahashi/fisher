import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  User: a.model({
    name: a.string().required(),
    email: a.string().required(),
    qrCodeUrl: a.string(), // S3のURLなどを保存
  }).authorization((allow) => [allow.authenticated()]),

  ScanRecord: a.model({
    userId: a.string().required(),
    timestamp: a.datetime().required(),
    memo: a.string(),
  }).authorization((allow) => [allow.authenticated()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
