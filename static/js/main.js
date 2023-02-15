// Client to client
var foodAPI = [
  {
    id: 1,
    img: "/img/012.Thịt-Luộc-Cà-Pháo.jpg",
    name: "Thịt luộc cà pháo",
    coin: 55000,
  },
  {
    id: 2,
    img: "/img/Rectangle 31.png",
    name: "Thịt nướng úp niêu đất",
    coin: 900000,
  },
  { id: 3, img: "/img/Rectangle 310.png", name: "Cơm niêu xá xíu", coin: 20000 },
  {
    id: 4,
    img: "/img/Rectangle 32.png",
    name: "Cơm niêu việt với cá sống",
    coin: 20000,
  },
  {
    id: 5,
    img: "/img/Rectangle 3122222.png",
    name: "Cá Thoèn kho niêu đất",
    coin: 20000,
  },
  {
    id: 6,
    img: "/img/23432532532.jpg",
    name: "Cá hố kho niêu đất",
    coin: 25000,
  },
  { id: 7, img: "/img/Component 7.png", name: "Gà Ô Cốt", coin: 23000 },
  {
    id: 8,
    img: "/img/Rectangle 3112134.png",
    name: "Thịt đông cơm niêu",
    coin: 30000,
  },
];

startMenu(foodAPI);
function startMenu(value) {
  let arr = "";
  let arrAPI = value;
  let i = value.slice(0, 6);
  if (arrAPI.length <= 6) {
    document.querySelector(".b-button").style.display = "none";
  } else {
    //show item còn thiếu trong api vào đó
    //  let i2 = 0;
    //  for(let i=6;i<value.length;i++)
    //   {
    //     i2 += -1;
    //   }
    //  let arr= value.slice(i2)
    //  console.log(arr)

    // document.querySelector('.b-button').style.display ='none';
    document.getElementById("show-all-item").onclick = function () {
      handleModal("flex", "none");
      closeModal();
      // document.querySelector('.header').style.display = 'none';
    };
  }
  i.forEach(function (value, index) {
    arr += `<div class="mn-litem mxy-auto-m ">
    <div class="mn-block-img">
    <img src="${
      value.img
    }" alt="" srcset="">
    </div>
    
  <figcaption class="text-c order">
      <p class="nm-item-text">${value.name}</p>
      <div class="item-price"><p> Giá: ${value.coin.toLocaleString(
        "en-US"
      )} VND</p></div>
  </figcaption>
</div>`;
  });
  reMenuToDom(arr);
}
function handleModal(add, remove) {
  document.querySelector(".Layout-add").style.display = add;
  document.querySelector(".slideshow-container").style.display = remove;
  document.querySelector(".nav-item").style.display = remove;
}
function reMenuToDom(data) {
  let i = document.querySelector(".mn-list");
  i.innerHTML = data;
  selectItem();
}
function selectItem() {
  const $ = document.querySelectorAll.bind(document);
  const buyItem = $(".order");
  buyItem.forEach((item) => {
    item.onclick = () => {
      let i = item.innerText;
      convertData(i);
      loadLayout(checkData(arrList));
    };
    function convertData(value) {
      let i = value;
      let a = i.split("\n\n");
      checkAPI(a);
    }
    function checkAPI(value) {
      let a = foodAPI[0];

      let i = a.find((a) => {
        return a.name === value[0];
      });
      arrList.push(i);
    }
  });
}

// ---Người dùng tương tác với Dom Lấy ra element

/*--------------------------Dom-to-giỏ hàng-------------------------- */

const $ = document.querySelectorAll.bind(document);
const buyItem = $(".order");
buyItem.forEach((item) => {
  item.onclick = () => {
    let i = item.innerText;
    console.log(i);
    convertData(i);
    loadLayout(checkData(arrList));
  };
});
// chuyển nodelist -> arr
// Lấy ra 2 value tên món và giá
function convertData(value) {
  let i = value;
  let a = i.split("\n\n");
  checkAPI(a);
}
// Kiểm tra món ăn
function checkAPI(value) {
  let a = foodAPI;
  let i = a.find((a) => {
    return a.name === value[0];
  });
  arrList.push(i);
}
///Biến lưu trữ
var arrList = [];
function loadLayout(value) {
  let loadItem = document.querySelector(".mLayout");
  loadItem.innerHTML = value;
}
// ----------------Check item-----
function checkData(data) {
  // data==''? return data ='không có gì trong giỏ hàng':data;
  if (data == "") {
    return (data = `<div class="no-item"><p>Bạn chưa order món ăn !!</p> </div>`);
  } else {
    return startList(data);
  }
  //check thành công
}
function startList(value) {
  let arr = "";

  value.forEach(function (value, index) {
    // arr += `<ul class='ul-item'><li id="item-ls"><div class="nav-img"><img src="${value.img}"></div><div class="nav-name">${value.name}</div><div class="nav-money"><p>Tiền:${value.coin}</p></div></li></ul>`;
    arr += `<div class="ls-item data-id"><div class="nav-img"><img src="${
      value.img
    }"></div><div class="nav-name">${
      value.name
    }</div><div class="nav-money"><p>Giá: ${value.coin.toLocaleString(
      "en-US"
    )}</p></div><div onclick="removeItem(${index})" class="nav-delete ${index}" id="update"><p>Xoá</p></div></div>`;
  });
  var total = value.reduce(function (total, value) {
    return total + value.coin;
  }, 0);
  // let sumArr =
  //   arr +
  //   `<div class="ls-item" id="ls-total"><div class="nav-total-t"><p>Thanh toán</p></div><div class="nav-total-n"><p>Tông: ${total.toLocaleString(
  //     "en-US"
  //   )}</p></div><div class="nav-total-b"></div><button><p>Đặt bàn ngay</p></button></div>`;
  let sumArr =
    arr +
    `<div class="ls-item" id="ls-total">
      <div class="nav-total-t">
      Tông:
    </div>
    <div class="nav-total-n">
    <p>${total.toLocaleString("en-US")}</p>
    </div>
    <div class="nav-total-b"></div><button><p>Đặt bàn ngay</p></button></div>`;
  return sumArr;
}
// showList();
function showList() {
  let display = document.getElementById("show");
  let displaySetting = display.style.display;
  if (displaySetting == "block") {
    display.style.animation = "closeList   1s";
    setTimeout(function () {
      display.style.display = "none";
    }, 800);
  } else {
    display.style.display = "block";
    loadLayout(checkData(arrList));
    display.style.animation = "openList 1s";
  }
}
// Xoá Item dựa trên item
function removeItem(id) {
  // console.log(id)
  let i = document.querySelectorAll(".data-id");
  // delete arrList[id]
  // i[id].remove()
  i.forEach((e, index) => {
    e.onclick = function () {
      if (index >= 0) {
        arrList.splice(index, 1);
      }
      e.remove();
      loadLayout(checkData(arrList));
    };
  });
}
function closeModal() {
  let i = document.getElementById("handle-close-modal");
  i.onclick = function () {
    handleModal("none", "block");
  };
}
slideShow();
function slideShow() {
  let slideIndex = 1;
  showSlides(slideIndex);
  document.getElementById("slice-next").onclick = () => {
    showSlides((slideIndex += 1));
  };
  document.getElementById("slice-back").onclick = () => {
    showSlides((slideIndex -= 1));
  };
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex-1].className += " active";
  }
}
formInput();
function formInput() {
  let input = document.querySelectorAll("input");
  input.forEach((e) => {
    console.log(
      (e.placeholder =
        ".............................................................................................................................................................................................................")
    );
  });
}
