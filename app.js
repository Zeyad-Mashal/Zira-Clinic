'use strict';

const addEventOnElem = function(elem, type, callback) {
    if(elem.length > 1) {
        for(let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback)
    }
}
// navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-navbar-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    navbarToggler.classList.toggle("active");
}
addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
    navbar.classList.remove("active");
    navbarToggler.classList.remove("active");
  }
addEventOnElem(navbarLinks, "click", closeNav);


// header

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function () {
    if(window.scrollY >= 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


// const langSelector = document.querySelector("select");
const optionEn = document.getElementById("optionEn"); 
const optionAr = document.getElementById("optionAr"); 

const setlang = (lang) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationkey = element.getAttribute('data-i18n');
        element.textContent = translations[lang][translationkey]
    });
    document.dir = lang === "ar" ? "rtl" : "ltr";
}

optionEn.addEventListener("click",() => {
    localStorage.setItem("localLang", "en")
    setlang("en");
    window.location.reload();
})

optionAr.addEventListener("click",() => {
    localStorage.setItem("localLang", "ar")
    setlang("ar");
    window.location.reload();
})

if(localStorage.getItem("localLang")) {
    if (localStorage.getItem("localLang") == "ar"){
        setlang("ar");
    } else {
        setlang("en");
    }
} else {
    setlang("ar");
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("localLang");
    setlang(lang);
})



// Resestraion Url

const URL = "https://zira.onrender.com";
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const phone = document.getElementById("phone");
const date = document.getElementById("date");
const select = document.getElementById("select");
const textArea = document.getElementById("textArea");
const sendBtn = document.getElementById("sendBtn");
const erroMessage = document.querySelector(".erroMessage");

// offers
const getOffer = async () =>  {
    const response = await fetch(`${URL}/offer/getAllOffer`);
    const offer = await response.json();
    const allOffers = offer.allOffers;
    displayOffers(allOffers)
  }

const displayOffers = (allOffers) => {
    let offersBox = `<option selected> ${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "اختر الخدمة" : "Chioce a service" : "اختر الخدمة" }  </option>`;
    for (let i=0 ; i < allOffers.length ; i++) {
        offersBox += ` 
        <option>
        ${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? allOffers[i].desc_ar : allOffers[i].desc_en : allOffers[i].desc_ar }
      </option>`
    }
    select.innerHTML = offersBox;
}
getOffer();

// Reservation

const reservation = () => {
    const userData = {
        firstName : firstname.value,
        lastName : lastname.value ,
        phoneNumber: phone.value ,
        reservationDate: date.value ,
        services : select.value,
        message : textArea.value,
    }
if(firstname.value == "" || lastname.value == "" || phone.value == "" || date.value == "" || select.value == "اختر الخدمة" || select.value == "Chioce a service") {
    erroMessage.innerText = `${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "برجاء ملئ البيانات كاملة" : "Please fill out the information completely" : "برجاء ملئ البيانات كاملة" }`;
}else {
    postResevation(userData);
}
}

async function postResevation(data) {
    try {
        sendBtn.innerHTML = '<span class="loader"></span>';
      const response = await fetch(`${URL}/reservation/addReservation`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if(result.message == "success") {
        sendBtn.innerText = `${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "ارسال" : "Send" : "ارسال" }`
        erroMessage.innerText = "";
        document.querySelector(".contactPopup").classList.replace('d-none', 'd-flex');
        const popupContent  = `
        <p class="h2 text-center" >${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "بيانات الحجز" : "Reservation Data" : "بيانات الحجز" }</p>
        <p class="popupText"><span>${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "اسم العميل:" : "Client Name:" : "اسم العميل:" }</span> ${result.reservationData.fullName}</p>
        <p class="popupText"><span>${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "رقم الهاتف:" : "Phone Number:" : "رقم الهاتف:" }</span> ${result.reservationData.phoneNumber}</p>
        <p class="popupText"><span>${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "الخدمة المطلوبة:" : "Selected Service:" : "الخدمة المطلوبة:" }</span> ${result.reservationData.services}</p>
        <p class="popupText"><span>${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "رقم الحجز:" : "Number Of Reservation:" : "رقم الحجز:" }</span> ${result.reservationData.numberOfUser}</p>
        <p class="popupTextNot">${(localStorage.getItem("localLang")) ? (localStorage.getItem("localLang") == "ar") ? "برجاء التقاط لقطة شاشة لبيانات الحجز الخاصة بك" : "Please take a screenshot of your reservation information" : "برجاء التقاط لقطة شاشة لبيانات الحجز الخاصة بك" }</p>
        <div onclick="closePopup()" class="closePopup">
                <p>
                  X
                </p>
            </div>
        `
        document.querySelector(".popupContent").innerHTML = popupContent;
      }else {
        erroMessage.innerText = `${result.message}`;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
sendBtn.addEventListener("click", (e) => {
    reservation();
})

// close popup
const closePopup = () => {
    document.querySelector(".contactPopup").classList.replace('d-flex', 'd-none');
}

// get all gallary
const getSmileGallary = async () =>  {
    const response = await fetch(`${URL}/gallery/getGallery`);
    const allGallary = await response.json();
    const allSmiles = allGallary.allImage[0].picURL;
    const allGallaryClinic = allGallary.allImage[0].picPlaceURL;
    displayClinicGallary(allGallaryClinic)
    displaySmileGallary(allSmiles)
}

// display smile gallary
const displaySmileGallary = (allSmiles) => {
    let smileBox = '';
    for (let i=0 ; i < allSmiles.length ; i++) {
        smileBox += ` 
        <a
            href="${allSmiles[i]}"
            data-lightbox="models"
            data-title="Caption1"
        >
            <img src="${allSmiles[i]}" alt="gallary image1" />
        </a>
        `
    }
    document.querySelector(".gallary-container").innerHTML = smileBox;
}
getSmileGallary();

// display clinic gallary
const displayClinicGallary = (allGallaryClinic) => {
    let clinicBox = '';
    for (let i=0 ; i < allGallaryClinic.length ; i++) {
        clinicBox += ` 
        <a
            href="${allGallaryClinic[i]}"
            data-lightbox="models"
            data-title="Caption1"
        >
            <img src="${allGallaryClinic[i]}" alt="gallary image1" />
        </a>
        `
    }
    document.querySelector(".clinic-gallary").innerHTML = clinicBox;
}



