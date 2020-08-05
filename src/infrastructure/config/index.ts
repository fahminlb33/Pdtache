import dotenv from "dotenv";
dotenv.config();

export default {
  port: Number(process.env.PORT),
  logging: {
    level: String(process.env.LOGGING_LEVEL)
  },
  minio: {
    useSSL: false,
    endPoint: String(process.env.MINIO_ENDPOINT),
    publicEndpoint: String(process.env.MINIO_PUBLIC_ENDPOINT),
    port: Number(process.env.MINIO_PORT),
    accessKey: String(process.env.MINIO_ACCESS_KEY),
    secretKey: String(process.env.MINIO_SECRET_KEY),
    bucket: String(process.env.MINIO_BUCKET)
  }
};
