import axios from "axios";

class services {
  static user = {};
  static url = "https://horariosdata.herokuapp.com/user";
  static urlClases = "https://horariosdata.herokuapp.com/clases";
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

  static async clases(id, name, tema, hora, fecha) {
    const resp = await axios
      .post(`${this.urlClases}`, {
        id,
        name,
        tema,
        hora,
        fecha,
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return resp;
  }
}

export default services;
