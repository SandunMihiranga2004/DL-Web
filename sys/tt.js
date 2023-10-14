const dBtn = document.getElementById("dbtn");
const rCont = document.getElementById("res-cont");

const download = (url) => {
   let apiU = `https://api.royalprinz.my.id/api/download/tiktok?url=${url}`;
   console.log(apiU);
   fetch(apiU)
      .then((Response) => {
         return Response.json();
      })
      .then((hasil) => {
         let data = hasil.result;
         console.log(data);
         rCont.innerHTML = `
            <div class="card shadow card-res">
               <div class="card-body">
                  <img
                     src="${data.thumb}"
                     alt="res"
                  />
                  <div class="r-title">
                     <h4>${data.desc}</h4>
                  </div>
                  <div class="d-b-c">
                     <button id="d-nowm">no watermark</button>
                     <button id="d-wm">with watermark</button>
                  </div>
               </div>
            </div>
         `;
         document
            .getElementById("d-nowm")
            .addEventListener("click", function () {
               window.location.href = `${data.nowm}`;
            });
         document.getElementById("d-wm").addEventListener("click", function () {
            window.location.href = `${data.wm}`;
         });
      })
      .catch((error) => {
         console.error(error);
      });
};

dBtn.addEventListener("click", function () {
   const input = document.getElementById("ttInput");
   const iUrl = input.value;
   download(iUrl);
});
