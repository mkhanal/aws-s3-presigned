const config = {
	region: 'ap-southeast-2',
	accessKeyId: 'AKIA2RGY7TGX3ROPSPPC',
	secretAccessKey: '****',
}

const bucket = 'dos-nch-dev-call-recordings';
const fileName = 'RE7580312b632b9f9d1268cca5f54f516f';
const signedUrlExpireSeconds = 600;
const objectIdentities = {
	Bucket: bucket,
    Key: fileName
}

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client(config);
const command = new GetObjectCommand(objectIdentities);
const url = await getSignedUrl(client, command, { expiresIn: signedUrlExpireSeconds });
console.log(url);