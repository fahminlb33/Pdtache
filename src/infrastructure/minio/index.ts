import {Client as MinioClient} from "minio";
import toArray from 'stream-to-array';
import config from '../config';

export interface MinioRow {
  id: string,
  url: string
}

export default class MinioWrapper {

  _client: MinioClient = new MinioClient(config.minio);

  public async Save(id: string, buffer: Buffer): Promise<void> {
    await this._client.putObject(config.minio.bucket, id, buffer);
  }

  public async Delete(id: string): Promise<void> {
    await this._client.removeObject(config.minio.bucket, id);
  }

  public async FindAll(): Promise<MinioRow[]> {
    const result = await toArray(this._client.listObjects(config.minio.bucket));
    return result.map(x => { return {id: x.name, url: this.GetUrl(x.name)} });
  }

  public GetUrl(id: string): string {
    return `http://${config.minio.publicEndpoint}:${config.minio.port}/${config.minio.bucket}/${id}`;
  }

}
