/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
    static URL = "/user";
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
    static setCurrent(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    /**
  * Возвращает текущего авторизованного пользователя
  * из локального хранилища
  * */
    static current() {
        return localStorage.getItem("user");
    }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
      localStorage.removeItem("user");
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
    static fetch(callback) {
      //if (callback.success == false) {
      //    User.unsetCurrent();
      //} else {
      //    let user = {
      //        id: callback.user.id,
      //        name: callback.user.name,
      //    }
      //    User.setCurrent(user);
      //    createRequest({
      //        url: this.URL,
      //        method: "GET",
      //        data: {
      //            email: callback.user.email,
      //        },
      //    });
      //}
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
    static login(data, callback) {
        createRequest(
            {
            url: this.URL + '/login',
            method: 'POST',
            responseType: 'json',
            data,
            callback: (err, response) => {
                if (response && response.user) {
                    User.setCurrent(response.user);
                } else {

                }
            }
        });
    }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
      createRequest({
          url: this.URL + '/register',
          method: 'POST',
          responseType: 'json',
          data,
          callback: (err, response) => {
              if (response && response.user) {
                  this.setCurrent(response.user);
              }
              callback(err, response);
          }
      });
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {

  }
}
