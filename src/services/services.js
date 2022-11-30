import axios from "axios";

class services {
  static user = {};
  static url = "https://horariosdata.herokuapp.com/user";
  static urlClases = "https://horariosdata.herokuapp.com/clases";

  //logearse en la app
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

  //cerrar sesion
  static async logout() {
    this.user = {};
  }

  //enviar asistencia
  static async clases(id, cc, name, tema, hora, fecha) {
    const resp = await axios
      .post(`${this.urlClases}`, {
        id,
        cc,
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

  //activar boton 15min antes y 15min de cada hora
  static horaDeclase(entrada, time) {
    const Hour = entrada.split(":")[0];
    const Minutes = entrada.split(":")[1];
    const afterHour = Hour - 1;
    const afterMinutes = parseInt(Minutes) + 45;
    const class15minLater = Hour + ":" + (parseInt(Minutes) + 15);
    const class15minBefore = Hour + ":" + (Minutes - 15);
    const class1HourBefore = afterHour + ":" + afterMinutes;
    if (Minutes === "00") {
      if (time >= class1HourBefore && time <= class15minLater) {
        return true;
      } else {
        return false;
      }
    } else {
      if (time >= class15minBefore && time <= class15minLater) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export default services;
