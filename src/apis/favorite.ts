import { FavoriteApi } from "./favoriteApi/index";

export class XuLyFavoriteApi {
  favoriteApi: FavoriteApi;
  constructor() {
    this.favoriteApi = new FavoriteApi();
  }
}
