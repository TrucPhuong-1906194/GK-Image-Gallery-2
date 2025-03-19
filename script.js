//Khai biến
//Điều khiển bằng chuột hoặc nút bấm (arrow)
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
//Lăn chuột
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();                           //sự kiện bị chặn tránh theo chiều dọc
    scrollContainer.scrollLeft += evt.deltaY;       //gán scrollLeft, cuộn ngang
    scrollContainer.style.scrollBehavior = "auto";  //auto, không hiệu ứng mượt
});
//Lăn chuột bằng nút tiếp theo
nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";//cuộn mượt
    scrollContainer.scrollLeft += 900;              //cuộn sang phải 900px
});

backBtn.addEventListener("click", ()=>{             //ngược lại
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

// Mở rộng

var icon = document.getElementById("icon");         //khai biến
icon.src = "images/icon-theme.jpg"                  //gán ảnh mặc định
icon.onclick = function(){                          //chuyển đổi theme khi bấm icon
    document.body.classList.toggle("dark-theme");   //toggle như công thức, class được bật/tắt (ban đầu); có/chưa thì xóa/thêm class
    if(document.body.classList.contains("dark-theme")){ 
        icon.src = "images/icon-flipped.png";           
    } 
    else {
        icon.src = "images/icon-theme.jpg";
    }
}
