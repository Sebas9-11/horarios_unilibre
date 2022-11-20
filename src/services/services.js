import axios from "axios";

class services {
  static user = {};
  static url = "https://horariosdata.herokuapp.com/user";
  static async login(id, pass) {
    const resp = await axios
      .get(`${this.url}/${id}`)
      .then((res) => {
        if (res.data.pass === pass) {
          this.user = res.data;
          return true;
        } else {
          return false;
        }
      })
      .catch((err) => {
        return err;
      });
    return resp;
  }

  static async logout() {
    this.user = {};
  }
}

export default services;
