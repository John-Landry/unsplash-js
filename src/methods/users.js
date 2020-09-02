/* @flow */

export default function users(): Object {
  return {
    profile: (username: string) => {
      const url = `/users/${username}`;

      return this.request({
        url,
        method: "GET"
      });
    },

    photos: (
      username,
      page = 1,
      perPage = 10,
      orderBy = "latest",
      options = {}
    ) => {
      const stats = options.stats || false;
      const url = `/users/${username}/photos`;
      const query = {
        page,
        per_page: perPage,
        order_by: orderBy,
        orientation: options.orientation,
        stats
      };

      return this.request({
        url,
        method: "GET",
        query
      });
    },

    likes: (username, page = 1, perPage = 10, orderBy = "latest", options = {}) => {
      const url = `/users/${username}/likes`;
      const query = {
        page,
        per_page: perPage,
        order_by: orderBy,
        orientation: options.orientation
      };

      return this.request({
        url,
        method: "GET",
        query
      });
    },

    collections: (username: string, page: number = 1, perPage: number = 10, orderBy: string = "published") => {
      const url = `/users/${username}/collections`;
      const query = {
        page,
        per_page: perPage,
        order_by: orderBy
      };

      return this.request({
        url,
        method: "GET",
        query
      });
    },

    statistics: (username: string, resolution: string = "days", quantity: number = 30) => {
      const url = `/users/${username}/statistics`;
      const query = {
        resolution,
        quantity
      };

      return this.request({
        url,
        method: "GET",
        query
      });
    }
  };
}
