import axios from "axios";

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://some-domain.com/api",
    });
  }

  create({ data }) {
    return this.instance.post("/users", data);
  }
}

export default new Api();
