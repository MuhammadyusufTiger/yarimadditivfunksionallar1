const testdata = [
  {
    question: "Yarim additiv funksional qanday aniqlanadi?",
    options: [
      "Faqat ko‘paytirish qoidalarini qanoatlantiradigan funksional", 
      "Additivlikning faqat qisman bajarilishini talab qiladigan funksional", 
      "Har doim chiziqli bo‘lgan funksional", 
      "Har qanday funksiyalarni chiziqli bog‘lovchi operator"
    ],
    answer: "Additivlikning faqat qisman bajarilishini talab qiladigan funksional"
  },
  {
    question: "Yarim additiv funksionalning asosiy xususiyatlaridan biri nima?",
    options: [
      "Har qanday qiymatda simmetrik bo‘lishi",
      "O‘zgarmas nol nuqtaga ega bo‘lishi",
      "Qisman additivlik shartini bajarishi",
      "Vektorlar yig‘indisi bilan mutlaq bir xil bo‘lishi",
    ],
    answer: "Qisman additivlik shartini bajarishi",
  },
  {
    question: "Quyidagi qaysi ifoda yarim additiv funksionallarga mos keladi?",
    options: [
      "f(x+y)=f(x)+f(y)f(x + y) = f(x) + f(y) har doim to‘g‘ri bo‘ladi", 
      "f(x+y)≤f(x)+f(y)f(x + y) \leq f(x) + f(y)", 
      "f(ax)=af(x)f(ax) = af(x) faqat musbat aa lar uchun", 
      "f(x−y)=f(x)−f(y)f(x - y) = f(x) - f(y)"
    ],
    answer: "f(x+y)≤f(x)+f(y)f(x + y) \leq f(x) + f(y)",
  },
  {
    question:
      "Yarim additiv funksionallar qaysi sohalarda keng qo‘llaniladi?",
    options: [
      "Fazoviy fizika va geometriya", 
      "Chiziqli algebra va funksional analiz", 
      "Faqat sonli hisoblash sohalarida", 
      "Matematika va kimyo"
    ],
    answer: "Chiziqli algebra va funksional analiz",
  },
  {
    question:
      "Yarim additiv funksional uchun asosiy cheklov sharti nima?",
    options: [
      "Funksiyaning har doim chiziqli bo‘lishi",
      "Funksiyaning chegarasi faqat musbat qiymatlarda bo‘lishi",
      "Funksiyaning additivlikni qisman bajarishi",
      "Funksiyaning nolga teng bo‘lmasligi",
    ],
    answer: "Funksiyaning additivlikni qisman bajarishi",
  },
  {
    question:
      "Yarim additiv funksionallar uchun qaysi tenglik har doim bajariladi?",
    options: [
      "f(0)=0f(0) = 0",
      "f(x+x)=2f(x)f(x + x) = 2f(x)",
      "f(x)≥0f(x) \geq 0 barcha xx uchun",
      "f(x⋅y)=f(x)⋅f(y)f(x \cdot y) = f(x) \cdot f(y)",
    ],
    answer: "f(0)=0f(0) = 0",
  },
  {
    question:
      "Quyidagi qaysi funksiyalar yarim additiv funksionallar bo‘lishi mumkin?",
    options: [
      "To‘g‘ri chiziqli operatorlar",
      "Kvadrat ildiz operatorlari",
      "Ikkilangan matritsalar determinantlari",
      "Har qanday funksiyalar",
    ],
    answer: "To‘g‘ri chiziqli operatorlar",
  },
  {
    question:
      "Yarim additiv funksionallarni tahlil qilish uchun qaysi asboblar muhim hisoblanadi?  ",
    options: [
      "Ehtimollar nazariyasi",
      "Cheklangan ketma-ketliklar",
      "Chiziqli operatorlar nazariyasi",
      "Matritsalar determinantlari",
    ],
    answer: "Chiziqli operatorlar nazariyasi",
  },
  {
    question:
      "Yarim additiv funksionallar odatda qaysi sohada ishlatiladi?",
    options: [
      "Fazoviy ma'lumotlar tahlili",
      "Kompleks sonlar nazariyasi",
      "Normallangan chiziqli fazolar",
      "Faqat diskret matematikada",
    ],
    answer: "Normallangan chiziqli fazolar",
  },
  {
    question: "Yarim additiv funksionallar va chiziqli funksionallar o‘rtasidagi asosiy farq nimada?",
    options: [
      "Yarim additiv funksionallar har doim nolga teng bo‘ladi",
      "Yarim additiv funksionallar qisman additivlikni bajaradi, chiziqli funksionallar esa to‘liq bajaradi",
      "Yarim additiv funksionallar faqat musbat qiymatlarga ega bo‘ladi",
      "Chiziqli funksionallar chiziqli bo‘lmaydi",
    ],
    answer: "Yarim additiv funksionallar qisman additivlikni bajaradi, chiziqli funksionallar esa to‘liq bajaradi",
  },
  {
    question:
      "Yarim additiv funksionallar qaysi fazolar bilan ishlaydi?",
    options: [
      "Normallangan chiziqli fazolar",
      "Kvadrat fazolar",
      "Diskret fazolar",
      "Cheklangan ketma-ketliklar fazolari",
    ],
    answer: "Normallangan chiziqli fazolar",
  },
  {
    question:
      "Yarim additiv funksional quyidagi qaysi operatsiyani qanoatlantirishi shart emas?",
    options: [
      "Additivlik",
      "Chiziqlilik",
      "Cheklilik",
      "Uzluksizlik",
    ],
    answer: "Chiziqlilik",
  },
  {
    question:
      "Yarim additiv funksionallarning asosiy amaliy qo‘llanilish sohasi qaysi?",
    options: [
      "Matritsalar nazariyasi",
      "Operatorlar nazariyasi",
      "Fazoviy chiziqli funksiyalar",
      "Kompleks sonlar analizi",
    ],
    answer: "Operatorlar nazariyasi",
  },
  {
    question:
      "Yarim additiv funksional qanday fazolarda yaxshi o‘rganiladi?",
    options: [
      "Cheksiz o‘lchovli fazolarda", 
      "Cheklangan sonli fazolarda", 
      "Kvadrat ildiz fazolarida", 
      "Sonlar chiziqlari fazolarida"
      ],
    answer: "Cheksiz o‘lchovli fazolarda",
  },
  {
    question: "Yarim additiv funksional qaysi xossani har doim bajaradi?",
    options: ["Cheklilik", "Uzluksizlik", "Qisman chiziqlilik", "O‘zgarmas nol nuqta"],
    answer: "Qisman chiziqlilik",
  },
  {
    question:
      "Yarim additiv funksionalni aniqlash uchun qaysi shart bajarilishi kerak?",
    options: [
      "Faqat ijobiy qiymatlar uchun chiziqlilik", 
      "Funksiyaning qisman chiziqlilikni ta'minlashi", 
      "Funksiyaning cheklangan bo‘lishi", 
      "Funksiyaning nolga teng bo‘lishi"
    ],
    answer: "Funksiyaning qisman chiziqlilikni ta'minlashi",
  },
  {
    question:
      "Quyidagi qaysi operator yarim additiv funksional sifatida qabul qilinadi?",
    options: [
      "Laplas operatori", 
      "Normallangan chiziqli operator", 
      "Kvadrat ildiz operatori", 
      "Diskret konvolyutsiya operatori"
    ],
    answer: "Normallangan chiziqli operator",
  },
  {
    question: "Yarim additiv funksionallarni o‘rganishda qaysi asosiy metod ishlatiladi?",
    options: [
      "Variatsion tahlil",
      "Operatorlar cheklanganligi",
      "Integral yondashuvlar",
      "Kompleks tahlil",
    ],
    answer: "Operatorlar cheklanganligi",
  },
  {
    question:
      "Yarim additiv funksional uchun qaysi qoida har doim bajariladi?",
    options: [
      "Additivlik cheklangan holda bo‘lishi mumkin",
      "Normallik har doim bajarilishi kerak",
      "Uzluksizlik har doim talab qilinadi",
      "Har qanday x va y uchun f(x+y)=f(x)+f(y)f(x+y) = f(x) + f(y)",
    ],
    answer: "Additivlik cheklangan holda bo‘lishi mumkin",
  },
  {
    question:
      "Yarim additiv funksionallar uzluksiz bo‘lishi uchun qaysi shart bajarilishi kerak?",
    options: [
      "Funksional normasi cheklangan bo‘lishi", 
      "Funksional sonli bo‘lishi", 
      "Funksional faqat nolga teng bo‘lishi", 
      "Funksionalning simmetrik bo‘lishi"
    ],
    answer: "Funksional normasi cheklangan bo‘lishi",
  },
  {
    question:
      "Yarim additiv funksionallar qanday geometrik ob'ektlarga tegishli bo‘lishi mumkin?",
    options: [
      "To‘g‘ri chiziqlar",
      "Cheksiz o‘lchovli gipertekisliklar",
      "Kvadrat matritsalar",
      "Cheklangan diskret to‘plamlar",
    ],
    answer: "Cheksiz o‘lchovli gipertekisliklar",
  },
  {
    question:
      "Yarim additiv funksionallarni normallangan fazolarda o‘rganishning asosiy maqsadi nima?",
    options: [
      "Funksiyaning o‘zgaruvchanligini aniqlash",
      "Fazoning uzluksizligini ta'minlash",
      "Fazodagi chegarani aniqlash",
      "Fazodagi operatorlarni cheklashi",
    ],
    answer: "Fazodagi operatorlarni cheklash",
  },
  {
    question:
      "Yarim additiv funksionallarning qaysi turi ko‘proq matematik analizda qo‘llaniladi?",
    options: [
      "Vektorli funksiyalar",
      "Uzluksiz operatorlar",
      "Diskret operatorlar",
      "Matritsalar determinantlari",
    ],
    answer: "Uzluksiz operatorlar",
  },
  {
    question:
      "Yarim additiv funksionalni chiziqli funksionaldan farqlovchi asosiy xususiyat nima?",
    options: [
      "Nol nuqtaning mavjudligi",
      "Additivlikni to‘liq qanoatlantirmasligi",
      "Cheklilikni bajarishi",
      "Har qanday qiymatni qabul qilishi",
    ],
    answer: "Additivlikni to‘liq qanoatlantirmasligi",
  },
  {
    question: "Quyidagi qaysi fazo yarim additiv funksionallar uchun to‘g‘ri o‘rganish obyekti hisoblanadi?",
    options: [
      "Hilbert fazolari",
      "Kvadrat matritsalar fazolari",
      "Diskret sonlar fazolari",
      "Fazoviy trigonometrik fazolar",
    ],
    answer: "Hilbert fazolari",
  },
  {
    question:
      "Yarim additiv funksionallar qaysi shartlarni cheklangan holda bajaradi?",
    options: [
      "Normallik va chiziqlilik",
      "Uzluksizlik va nol nuqta mavjudligi",
      "Additivlik va uzluksizlik",
      "Chiziqlilik va simmetriya",
    ],
    answer: "Additivlik va uzluksizlik",
  },
  {
    question: "Yarim additiv funksionallarning asosiy matematik qo‘llanilishi nimani o‘z ichiga oladi?",
    options: [
      "Fazolar cheklanishini o‘rganish",
      "Operatorlarning uzluksizligini ta'minlash",
      "Fazolarni ko‘paytirish nazariyasi",
      "Cheklangan o‘lchamli ma'lumotlar tahlili",
    ],
    answer: "Operatorlarning uzluksizligini ta'minlash",
  }
];
