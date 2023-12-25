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


// Translations 
const translations = {
    en: {
        home: "Home",
        service: "Our Services",
        about: "About Us",
        blog: "Questions",
        contact: "Contact",
        gallary: "Gallary",
        rates: "Our Rates",
        reservationBtn: "Book A Reservation",
        en: "English",
        ar: "Arabic",
        heroSubtitle: "WELCOME TO ZIRA CLINIC",
        heroTitle: "We Are Best Dental Service",
        heroText: "Discover Zira Clinic, where expert care meets warmth. We're dedicated to crafting confident smiles through advanced dentistry. Your journey to a radiant smile starts here, blending technology with compassion.",
        heroCallBtn: "Get Call back",
        serviceSubtitle: "Our Services",
        serviceTitle: "What We Provide ?",
        service1: "Dental implants",
        service2: "Teeth whitening",
        service3: "Orthodontics",
        service4: "Root canal treatment and surgical tooth extraction",
        service5: "Cosmetic dental fillings",
        service6: "Dental restorations",
        service1Text: "Dental implants are a modern technique used to permanently anchor artificial teeth. Synthetic roots are implanted into the jaw to provide an effective solution for tooth loss, ensuring the restoration of function and a natural appearance.",
        service2Text: "Teeth whitening involves using laser and the latest techniques to lighten the color of teeth, remove stains and discolorations, and achieve the desired level of whiteness for each case.",
        service3Text: "Orthodontics diagnoses and treats dental alignment and bite issues, including overcrowding, misalignment, and gaps in children and adults.",
        service4Text: "Root canal treatment involves diagnosing and treating the dental pulp. In most cases, the infected pulp is removed, and the root canal is filled with special materials to preserve the tooth and restore the affected surfaces",
        service5Text: "The dentist cleans the teeth, removes decay, and performs cosmetic fillings to restore the teeth and maintain their cosmetic and functional purposes.",
        service6Text: "Dental restorations involve using specific materials to repair damaged teeth due to decay and restore their natural appearance and function. The dentist removes the affected part and replaces it with the appropriate type of restoration based on the case.",
        aboutSubtitle: "About Us",
        aboutTitle: "We Care For Your Dental Health",
        aboutText: "We take pride in providing high-quality medical care and specialized dental services. Our highly experienced team includes specialized doctors who always strive to achieve the best results and ensure the comfort and confidence of our patients. Our services include teeth whitening, beauty treatments, dental implants, orthodontic treatments, dental implants and many other services that meet your health and aesthetic needs. We are keen to use the latest technologies and equipment to provide optimal care.",
        aboutBtn: "Contact Us Now",
        doctorSubtitle: "Our Doctors",
        doctorTitle: "Best Expert Dentist",
        doctorName1: "Name 1",
        doctorName2: "Name 2",
        doctorName3: "Name 3",
        doctorName4: "Name 4",
        doctorSubname1: "Dentist",
        doctorSubname2: "Dentist",
        doctorSubname3: "Dentist",
        doctorSubname4: "Dentist",
        ctaSubtitle: "Dental Reservation",
        ctaTitle: "We Are Open And Welcoming Patients",
        ctaBtn: "Book A Reservation",
        blogSubtitle: "Common Questions",
        blogTitle: "What are the common Questions ?",
        blogQ1: "When is orthodontic treatment necessary?",
        blogQ2: "Can root canal treatment be done in one session?",
        blogQ3: "Does veneers cause bad breath?",
        blogAns1: "Orthodontic treatment is necessary in cases of speech or eating problems, dental misalignment, and the presence of gaps or crowding.",
        blogAns2: "Root canal treatment can be done in one session unless there are complications or the presence of an abscess.",
        blogAns3: "The occurrence of bad breath with veneers depends on several factors, including the dentist's expertise, the quality of the materials used, and regular dental hygiene practices such as flossing, brushing, and regular check-ups.",
        contactSubtitle: "Contact Us",
        contactTitle: "Make A Reservation",
        fristName: "Frist Name",
        lastName: "Last Name",
        phoneNumber: "Phone Number",
        date: "Choice Your Reservation Date:",
        servicesSelector: "Select A Service:",
        option1: "Dental implants starting from 424 ASR",
        option2: "Immediate dental implants starting from 2024 ASR",
        option3: "Orthodontics for the jaws: 924 ASR for the first payment",
        option4: "Laser teeth whitening in one session: 424 ASR",
        option5: "Teeth cleaning, tartar removal and teeth polishing 124 ASR",
        option6: "Cosmetic fillings of the highest quality starting from 124 ASR",
        textarea: "Leave A Message and we will Contact with you:",
        gallarySubtitle: "Some Of Our Smiles",
        gallaryTitle: "Our Gallary",
        rateSubtitle: "What our Patients say about us ?",
        rateTitle: "Our Rates",
        footerText: "We take pride in providing high-quality medical care and specialized dental services. Our highly experienced team includes specialized doctors who always strive to achieve the best results and ensure the comfort and confidence of our patients. Our services include teeth whitening, beauty treatments, dental implants, orthodontic treatments, dental implants and many other services that meet your health and aesthetic needs. We are keen to use the latest technologies and equipment to provide optimal care.",
        footerTime: "From Saturday to Thursday:  2:00 to 10:00 and Friday: 4:00 to 10:00",
        otherlinks: "Other Links",
        location: "Our Location Here",
        call: "Our Numbers",
        copyright: "2023 All Rights Reserved By | Zira Clinic | Momentum",
    },
    ar: {
        home: "الرئيسية",
        service: "خدماتنا",
        about: "من نحن ؟",
        blog: "أسالتكم",
        contact: "اتصل بنا ",
        gallary : "معرض الصور",
        rates: "اراء العملاء",
        reservationBtn: "احجز معانا",
        en: "الانجليزية",
        ar: "العربية",
        heroSubtitle: "مرحبا بكم في عيادة زيرا",
        heroTitle: "نحن أفضل خدمة طب الأسنان",
        heroText: "اكتشف عيادة زيرا، حيث تلتقي رعاية الخبراء بالدفء. كان مكرسة لصياغة ابتسامات واثقة من خلال المتقدمة طب الأسنان. رحلتك إلى ابتسامة مشرقة تبدأ هنا، بالمزج التكنولوجيا مع الرحمة.",
        heroCallBtn: "ارسل رسالة للتواصل معنا",
        serviceSubtitle:"خدماتنا",
        serviceTitle: "ما هي خدماتنا ؟",
        service1: "زراعة الاسنان",
        service1Text: "زراعة الأسنان هي تقنية حديثة تستخدم لتثبيت أسنان اصطناعية بشكل دائم. يتم زرع جذور صناعية في الفك لحلاً فعّالاً لفقدان الأسنان، مما يضمن استعادة الوظيفة والمظهر الطبيعي.",
        service2: "تبييض الأسنان",
        service3: "تقويم الأسنان",
        service4: "علاج العصب وخلع الأسنان الجراحي",
        service5: " حشوات الأسنان التجميلية",
        service6: "تركيب الاسنان",
        service1Text: "زراعة الأسنان هي تقنية حديثة تستخدم لتثبيت أسنان اصطناعية بشكل دائم. يتم زرع جذور صناعية في الفك لحلاً فعّالاً لفقدان الأسنان، مما يضمن استعادة الوظيفة والمظهر الطبيعي.",
        service2Text: "تفتيح لون الأسنان وإزالة البقع والتصبغات باستخدام الليزر وأحدث التقنيات للوصول لدرجة البياض المناسبة لكل حالة        ",
        service3Text: " استخدام مواد معينة لإصلاح الأسنان المتضررة من التسوس واسترجاع مظهرها ووظيفتها الطبيعية، حيث يقوم الطبيب بإزالة الجزء المتضرر واستبداله بالتركيبة",
        service4Text: "تشخيص وعلاج عصب الأسنان وغالبا يكون ذلك بإزالة العصب المصاب وحشو التجويف العصبي بمواد خاصة للمحافظة على الأسنان وإصلاح الأسطح المصابة فيها",
        service5Text: "يقوم الطبيب بتنظيف الأسنان وإزالة التسوس وتنفيذ حشوات تجميلية تكميلية وترميم السن للحفاظ على وظائفه التجميلية والغذائية",
        service6Text: "استخدام مواد معينة لإصلاح الأسنان المتضررة من التسوس واسترجاع مظهرها ووظيفتها الطبيعية، حيث يقوم الطبيب بإزالة الجزء المتضرر واستبداله بالتركيبة",
        aboutSubtitle: "من نحن ؟",
        aboutTitle: "نحن نهتم بصحة أسنانك",
        aboutText: "نحن نفخر بتقديم رعاية طبية عالية الجودة وخدمات طب الأسنان المتخصصة. يضم فريقنا ذو الخبرة العالية أطباء متخصصين يسعون دائمًا لتحقيق أفضل النتائج وضمان راحة وثقة مرضانا. تشمل خدماتنا تبييض الأسنان، علاجات التجميل، زراعة الأسنان، علاجات تقويم الأسنان، زراعة الأسنان والعديد من الخدمات الأخرى التي تلبي احتياجاتك الصحية والجمالية. نحرص على استخدام أحدث التقنيات والمعدات لتقديم الرعاية المثالية",
        aboutBtn: "اتصل بنا الآن",
        doctorSubtitle: "اطبائنا",
        doctorTitle: "أفضل اطباء خبراء في طب الاسنان",
        doctorName1: "الاسم الاول",
        doctorName2: "الاسم الثاني",
        doctorName3: "الاسم الثالث",
        doctorName4: "الاسم الرابع",
        doctorSubname1: "طبيب اسنان",
        doctorSubname2: "طبيب اسنان",
        doctorSubname3: "طبيب اسنان",
        doctorSubname4: "طبيب اسنان",
        ctaSubtitle: "أحجز معنا الان",
        ctaTitle: "نرحب بكم دائما في عيادة زيرا للأسنان",
        ctaBtn: "أحجز خدمتك معنا الان",
        blogSubtitle: "اسألتكم المشهورة",
        blogTitle: "ما هي أشهر الاسالة ؟",
        blogQ1: "متى يلزم تقويم الأسنان؟",
        blogQ2: "هل يمكن علاج عصب الأسنان بجلسة واحدة؟",
        blogQ3: "هل الفينير يسبب رائحة أسنان كريهة؟",
        blogAns1: "في حال وجود  مشكلة في النطق أو الأكل  وجود مشكلة في إطباق الأسنان  وجود فراغات أو تزاحم بين الأسنان ",
        blogAns2: "يمكن علاج عصب الأسنان بجلسة واحدة إلا إذا كانت الحالة تعاني من وجود صديد أو مضاعفات تؤخر عملية العلاج ",
        blogAns3: "ظهور مشكلة رائحة الأسنان مع الفينير لها عدة عوامل حيث إنها  تعتمد على خبرة الطبيب وجودة المواد المستخدمة ونظافة الأسنان الدورية عن طريق استخدام الخيط والتفريش والمراجعة الدورية ",
        contactSubtitle: "تواصل معنا هنا",
        contactTitle: "أحجز معنا الان",
        fristName: "الاسم الاول",
        lastName: "اسم العائلة",
        phoneNumber: "رقم الهاتف",
        date: "اختر تاريخ الحجز",
        servicesSelector: "اختر العرض او الخدمة",
        option1: "تركيبات الأسنان ابتداء من 424 ريال للسن الواحد .",
        option2: "زراعة فورية مع استشاري زراعة الأسنان ابتداء من 2024 ريال.",
        option3: "تقويم الأسنان للفكين 924 ريال للدفعة الأولى . ",
        option4: "تبييض الأسنان بالليزر بجلسة واحدة  *424 ريال*",
        option5: "تنظيف الأسنان وإزالة الجير وتلميع الأسنان 124 ريال ",
        option6: "الحشوات التجميلية بأعلى جودة تبدأ من 124 ريال",
        textarea: "اترك لنا رسالتك و سوف يتم التواصل معاك",
        gallarySubtitle: "بعض من ابتسامتنا",
        gallaryTitle: "معرض الابتسامات",
        rateSubtitle: "ماذا يقول العملاء عن عنا ؟",
        rateTitle: "أراء العملاء",
        footerText: "نحن نفخر بتقديم رعاية طبية عالية الجودة وخدمات طب الأسنان المتخصصة. يضم فريقنا ذو الخبرة العالية أطباء متخصصين يسعون دائمًا لتحقيق أفضل النتائج وضمان راحة وثقة مرضانا. تشمل خدماتنا تبييض الأسنان، علاجات التجميل، زراعة الأسنان، علاجات تقويم الأسنان، زراعة الأسنان والعديد من الخدمات الأخرى التي تلبي احتياجاتك الصحية والجمالية. نحرص على استخدام أحدث التقنيات والمعدات لتقديم الرعاية المثالية",
        footerTime: "من السبت الي الخميس اساعة 2 الي 10 مساءا و الجمعة من 4 الي 10 مساءا",
        otherlinks: "روابط اخري",
        location: "اضغط للذهاب الي موقعنا",
        call: "أرقامنا هنا",
        copyright: "كل الحقوق محفوظة | عيادة زيرا | شركة مومنتيوم"
    }
}

const langSelector = document.querySelector("select");

langSelector.addEventListener("change",(e) => {
    setlang(e.target.value);
    localStorage.setItem("localLang", e.target.value)
})

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("localLang");
    setlang(lang);
})

const setlang = (lang) => {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const translationkey = element.getAttribute('data-i18n');
        element.textContent = translations[lang][translationkey]
    });
    document.dir = lang === "ar" ? "rtl" : "ltr";
}



