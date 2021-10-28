      var si = document.createElement("script");
      si.src = "https://unpkg.com/sweetalert@2.1.2/dist/sweetalert.min.js", null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si);
      var simple = {
          alert: function(e, t) {
              null == typeof swal ? null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si) : (window.onclick, window.stop(), swal(e).then((function() {
                  t()
              })), document.querySelector(".swal-modal").style = "font-family: Arial, Helvetica, sans-serif; animation: none !important;", document.querySelector(".swal-button-container").style = "position:relative;left:-2%;", document.querySelector(".swal-button").style = "text-align: center;background-color: #333; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important;", document.querySelector(".swal-text").style = "color:#222 !important;")
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
                  })), document.querySelector(".swal-modal").style = "font-family: Arial, Helvetica, sans-serif; animation: none !important;", document.querySelector(".swal-button-container").style = "position:relative;left:-2%;", (function(){for(var i=0;i<document.querySelectorAll('.swal-button').length;i++){document.querySelectorAll(".swal-button")[i].style = "text-align: center !important; background-color: #333 !important; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important; color: #fff;"}})(), document.querySelector(".swal-text").style = "color:#222 !important;")
          },
          prompt: function(e, p, t) {
              null == typeof swal ? null != document.head ? document.head.appendChild(si) : document.documentElement.appendChild(si) : (window.onclick, window.stop(), swal({
                  text: e,
                  content: "input",
                  buttons: ["Cancel", "OK"]
                  }).then((function(r){
                    return t(r);
                  })), (() => { if (p === undefined) { document.querySelector('.swal-content__input').value = '' } else { document.querySelector('.swal-content__input').value = p }})(), document.querySelector('.swal-content__input').style = "position: relative; width: 80% !important; left: 50% !important; margin-left: -40% !important; overflow-y: scroll; border: 1px solid #333 !important; outline: none !important;", document.querySelector(".swal-modal").style = "font-family: Arial, Helvetica, sans-serif; animation: none !important;", document.querySelector(".swal-button-container").style = "position:relative;left:-2%;", (function(){for(var i=0;i<document.querySelectorAll('.swal-button').length;i++){document.querySelectorAll(".swal-button")[i].style = "text-align: center !important; background-color: #333 !important; font-family: Arial, sans-serif !important; box-shadow: none !important; outline: none !important; width: 6em; font-weight: normal; text-shadow: none; animation: none !important; color: #fff;"}})(), document.querySelector(".swal-text").style = "color:#222 !important;")
          }
      };
