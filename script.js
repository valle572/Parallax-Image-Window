const getViewHei = () => window.innerHeight || document.documentElement.clientHeight;
let viewHei      = getViewHei();

window.addEventListener('resize', () => viewHei = getViewHei() );

const buildArray = () => {
   const con     = document.querySelectorAll('.parallax-container');
   const img     = document.querySelectorAll('.parallax-container > img');
   const qty     = img.length;
   const tempArr = [];

   for (let i = 0; i < qty; i++)
      tempArr.push( [con[i], img[i], +con[i].getAttribute('data-rate')] );

   return [tempArr, qty];
}
const [winArr, winQty] = buildArray();


const parallax = () => {
   let i = winQty;
   while (i--) {
      const rec = winArr[i][0].getBoundingClientRect();

      if (rec.bottom > 0 && rec.top < viewHei)
         winArr[i][1].style.transform = `translate3d(0, ${ ~~(rec.top * winArr[i][2]) }px, 0)`;
   }
   requestAnimationFrame(parallax);
}
requestAnimationFrame(parallax);