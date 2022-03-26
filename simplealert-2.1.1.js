var si = document.createElement("script");
si.src = "https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js", null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si);
var simple = {
    alert: function(e, t) {
        null == typeof swal ? null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si) : (window.onclick, window.stop(), swal(e).then((function() {
            t()
        })), document.querySelector(".swal-modal").style = "font-family: Arial, Helvetica, sans-serif; animation: none !important; background: #" + (simple.alert.defaults.mode == "dark" ? "333" : "fff") + ";", document.querySelector(".swal-button-container").style = "position:relative;left:-2%;", document.querySelector(".swal-button").style = "text-align: center;background-color: #" + (simple.alert.defaults.mode == "dark" ? "444; color: #555" : "333; color: #fff") + "; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;", document.querySelector(".swal-text").style = "color: #" + (simple.alert.defaults.mode == "dark" ? "555" : "333") + " !important;")
    },
    confirm: function(e, t) {
        null == typeof swal ? null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si) : (window.onclick, window.stop(), swal({
            text: e,
            buttons: ["Cancel", "OK"]
            }).then(((r) => {
              if (r) {
                t();
              } else {
                swal.close();
              }
            })), document.querySelector(".swal-modal").style = "font-family: Arial, Helvetica, sans-serif; animation: none !important; background: #" + (simple.alert.defaults.mode == "dark" ? "333" : "fff") + ";", document.querySelector(".swal-button-container").style = "position:relative;left:-2%;", document.querySelector(".swal-button").style = "text-align: center;background-color: #" + (simple.alert.defaults.mode == "dark" ? "444; color: #555" : "333; color: #fff") + "; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;", document.querySelector(".swal-button--confirm").style = "text-align: center;background-color: #" + (simple.alert.defaults.mode == "dark" ? "444; color: #555" : "333; color: #fff") + "; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;", document.querySelector(".swal-text").style = "color: #" + (simple.alert.defaults.mode == "dark" ? "555" : "333") + " !important;");
    },
    prompt: function(e, p, t) {
        null == typeof swal ? null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si) : (window.onclick, window.stop(), swal({
            text: e,
            content: "input",
            buttons: ["Cancel", "OK"]
            }).then((function(r){
              return t(r);
            })), (() => { if (p === undefined) { document.querySelector('.swal-content__input').value = '' } else { document.querySelector('.swal-content__input').value = p }})(), document.querySelector('.swal-content__input').style = "position: relative; width: 80% !important; left: 50% !important; margin-left: -40% !important; overflow-y: scroll; border: 1px solid #333 !important; outline: none !important;" + (simple.alert.defaults.mode == "dark" ? " background: #555;" : void(0)), document.querySelector(".swal-modal").style = "font-family: Arial, Helvetica, sans-serif; animation: none !important; background: #" + (simple.alert.defaults.mode == "dark" ? "333" : "fff") + ";", document.querySelector(".swal-button-container").style = "position:relative;left:-2%;", document.querySelector(".swal-button").style = "text-align: center;background-color: #" + (simple.alert.defaults.mode == "dark" ? "444; color: #555" : "333; color: #fff") + "; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;", document.querySelector(".swal-button--confirm").style = "text-align: center;background-color: #" + (simple.alert.defaults.mode == "dark" ? "444; color: #555" : "333; color: #fff") + "; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;", document.querySelector(".swal-text").style = "color: #" + (simple.alert.defaults.mode == "dark" ? "555" : "333") + " !important;");
    },
    premium: function() {
      const use_defaults = arguments[0];
      const type = arguments[1];
      const style = arguments[2];
      const title = arguments[3];
      const text = arguments[4];
      const callback = arguments[5];
      if (use_defaults) {
        return (() => {
          if (type == "prompt") {
            swal({
              content: "input",
              title: title,
              text: text
            }).then(value => {
              callback(value || null);
            });
          } else if (type == "confirm") {
            swal({
              title: title,
              text: text,
              buttons: ["Cancel", "OK"]
            }).then((e) => {
              if (e) {
                return callback();
              }
              return void(0);
            });
          } else if (type == "alert") {
            swal({
              title: title,
              text: text
            }).then(() => {
              callback();
            });
          }
        })();
      } else {
        if (!simple[type]) { throw new ReferenceError("Simple-Alert premium function received \"undefined\" as second argument value") };
        simple[type](text);
        document.querySelector(".swal-modal").innerHTML = ("<div class=\"swal-title\">" + title + "</div>" + document.querySelector(".swal-modal").innerHTML);
        document.querySelector(".swal-title").style.color = "#333";
        if (style) {
          if (style.language == "classic") {
            const allStyles = style.styles.split(",");
            for (let i = 0; i < allStyles.length; i++) {
              document.querySelector(".swal-" + (style.selector || "modal")).style[allStyles[i].split("=")[0]] = allStyles[i].split("=").splice(1).join("");
            }
          } else if (style.language == "css") {
            const allStyles = style.styles.split(";");
            for (let i = 0; i < allStyles.length; i++) {
              document.querySelector(".swal-" + (style.selector || "modal")).style[allStyles[i].split(":")[0]] = allStyles[i].split(":").splice(1).join("");
            }
          }
        }
      }
    }
};
simple.alert.defaults = {
  mode: "light"
};
