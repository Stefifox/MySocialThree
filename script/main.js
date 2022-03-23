const container = document.getElementById("links");
const apiUrl = "https://api.stefifoxapps.it:5210/v1/getSocial";

container.innerHTML = "<h2>Loading...</h2>";

async function getResult() {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return resolve(data);
      });
  });
}

function loadContent() {
  getResult().then((res) => {
    let html = "";
    res.forEach((e) => {
      if(e.icon != undefined){
          html += `<a class="button" href='${e.link}'><span class="iconify" data-icon='${e.icon}'data-width=30" data-height="30"></span>  ${e.title}</a></br></br>`;
      }else{
        html += `<a href='${e.link}'>${e.title}</a></br></br>`;
      }
      
      container.innerHTML = html;
    });
  });
}
