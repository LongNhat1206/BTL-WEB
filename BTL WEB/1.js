/*đoạn code chạy silde ảnh banner*/
var i = 1;
function trans() {
	var imgs = ["./img/anh1.png","./img/anh3.jpg","./img/anh4.jpg","./img/anh5.jpg"];
	document.querySelector('.banner_slide').src = imgs[i];
	i++;
	if(i==4)
	{
		i=0;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	
              document.querySelector('.banner_slide').onclick = setInterval(trans,2000);
          });
/*end*/

