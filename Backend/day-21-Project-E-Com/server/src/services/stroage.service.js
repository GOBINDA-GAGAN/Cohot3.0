
import ImageKit, { toFile } from "@imagekit/nodejs";
import config from "../config/env.config.js";

const client = new ImageKit({
  privateKey: config.imagekit_private_key,
});

export async function uploadFile({ buffer, fileName }) {
  const response = await client.files.upload({
    file: await toFile(buffer, fileName),
    fileName,
    folder:"Stinch"
  });

  return response;
}
