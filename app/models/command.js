import Model, { attr, hasMany } from '@warp-drive/legacy/model';

export default class CommandModel extends Model {
  @attr name;
  @attr s3Key;
  @attr mediaType;
  @attr url;
}
