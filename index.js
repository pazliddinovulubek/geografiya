// Birinchi savol uchun o'zgaruvchilar

let button1 = document.getElementsByClassName('a')[0];
let button2 = document.getElementsByClassName('b')[0];
let button3 = document.getElementsByClassName('c')[0];
let button4 = document.getElementsByClassName('d')[0];
let button5 = document.getElementsByClassName('e')[0];
let button6 = document.getElementsByClassName('f')[0];
let button7 = document.getElementsByClassName('g')[0];
let button8 = document.getElementsByClassName('h')[0];
let button9 = document.getElementsByClassName('i')[0];
let button10 = document.getElementsByClassName('j')[0];
let button11 = document.getElementsByClassName('k')[0];
let button12 = document.getElementsByClassName('l')[0];
let button13 = document.getElementsByClassName('m')[0];
let button14 = document.getElementsByClassName('n')[0];
let button15 = document.getElementsByClassName('o')[0];
let button16 = document.getElementsByClassName('p')[0];


button1.style.display = 'none';
button2.style.display = 'none';
button3.style.display = 'none';
button4.style.display = 'none';
button5.style.display = 'none';
button6.style.display = 'none';
button7.style.display = 'none';
button8.style.display = 'none';
button9.style.display = 'none';
button10.style.display = 'none';
button11.style.display = 'none';
button12.style.display = 'none';
button13.style.display = 'none';
button14.style.display = 'none';
button15.style.display = 'none';
button16.style.display = 'none';



let box3 = document.getElementsByClassName('div3')[0];
let box4 = document.getElementsByClassName('div4')[0];
let box5 = document.getElementsByClassName('div5')[0];
let box6 = document.getElementsByClassName('div6')[0];
let box7 = document.getElementsByClassName('div7')[0];
let box8 = document.getElementsByClassName('div8')[0];
let box9 = document.getElementsByClassName('div9')[0];
let box10 = document.getElementsByClassName('div10')[0];
let box11 = document.getElementsByClassName('div11')[0];
let box12 = document.getElementsByClassName('div12')[0];
let box13 = document.getElementsByClassName('div13')[0];
let box14 = document.getElementsByClassName('div14')[0];
let box15 = document.getElementsByClassName('div15')[0];
let box16 = document.getElementsByClassName('div16')[0];













let choisea = document.getElementById('javob1');
let choiseb = document.getElementById('javob2');
let choisec = document.getElementById('javob3');
let javob = document.getElementById('check1');
javob.style.display = 'none'
let isAnswered1 = false;

let x = 1;
function choosea() {
  if (isAnswered1) return;
  x = Number(x) + 1;
  if (x % 2 === 0) {
    choisea.style.cssText = `background-color:rgb(137, 137, 137);`;
    choiseb.style.cssText = `background-color:rgb(255, 255, 255);`;
    choisec.style.cssText = `background-color:rgb(255, 255, 255);`;
    button1.style.display = 'block'

  }
}

let y = 1;
function chooseb() {
  if (isAnswered1) return;
  y = Number(y) + 1;
  if (y % 2 === 0) {
    choiseb.style.cssText = `background-color:rgb(137, 137, 137);`;
    choisea.style.cssText = `background-color:rgb(255, 255, 255);`;
    choisec.style.cssText = `background-color:rgb(255, 255, 255);`;
    button1.style.display = 'block'
  }
}

let a = 1;
function choosec() {
  if (isAnswered1) return;

  a = Number(a) + 1;
  if (a % 2 === 0) {
    choisec.style.cssText = `background-color:rgb(137, 137, 137);`;
    choiseb.style.cssText = `background-color:rgb(255, 255, 255);`;
    choisea.style.cssText = `background-color:rgb(255, 255, 255);`;
    button1.style.display = 'block'

  }
}
let divr = document.getElementsByClassName('div1')[0]
let vid1 = 1
function checkAnswer1() {
  vid1 = Number(vid1) + 1
  console.log(vid1);
  if (isAnswered1) return;



  const computedStyle = getComputedStyle(choisec);
  const computeStyle = getComputedStyle(choiseb);
  const computdStyle = getComputedStyle(choisea);

  if (computdStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    divr.style.backgroundColor = 'rgb(0, 255, 0)'
  } else if (computeStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    divr.style.backgroundColor = 'red'
  } else if (computedStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    divr.style.backgroundColor = 'red'
  } else if (computedStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    computeStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    computdStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnswered1 = true;

  choisea.setAttribute('disabled', 'true');
  choiseb.setAttribute('disabled', 'true');
  choisec.setAttribute('disabled', 'true');
  javob.setAttribute('disabled', 'true');
}

































let box2 = document.getElementsByClassName('div2')[0];
// Ikkinchi savol uchun o'zgaruvchilar
let choised = document.getElementById('javob4');
let choisee = document.getElementById('javob5');
let choisef = document.getElementById('javob6');
let chek = document.getElementById('check2');

let isAnswered2 = false;

let xa = 1;
function choosed() {
  if (isAnswered2) return;
  xa = Number(xa) + 1;
  if (xa % 2 === 0) {
    choised.style.cssText = `background-color:rgb(137, 137, 137);`;
    choisee.style.cssText = `background-color:rgb(255, 255, 255);`;
    choisef.style.cssText = `background-color:rgb(255, 255, 255);`;
    button2.style.display = 'block'
  }
}

let ya = 1;
function choosee() {
  if (isAnswered2) return;
  ya = Number(ya) + 1;
  if (ya % 2 === 0) {
    choisee.style.cssText = `background-color:rgb(137, 137, 137);`;
    choised.style.cssText = `background-color:rgb(255, 255, 255);`;
    choisef.style.cssText = `background-color:rgb(255, 255, 255);`;
    button2.style.display = 'block'

  }
}

let ad = 1;
function choosef() {
  if (isAnswered2) return;
  ad = Number(ad) + 1;
  if (ad % 2 === 0) {
    choisef.style.cssText = `background-color:rgb(137, 137, 137);`;
    choised.style.cssText = `background-color:rgb(255, 255, 255);`;
    choisee.style.cssText = `background-color:rgb(255, 255, 255);`;
    button2.style.display = 'block'

  }
}

function checkAnswer2() {
  if (isAnswered2) return;

  const css = getComputedStyle(choisee);
  const cdd = getComputedStyle(choisef);
  const cff = getComputedStyle(choised);

  if (cdd.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box2.style.backgroundColor = 'rgb(0, 255, 0)'
  } else if (cff.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box2.style.backgroundColor = 'red'

  } else if (css.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box2.style.backgroundColor = 'red'

  } else if (css.backgroundColor === 'rgb(255, 255, 255)' &&
    cdd.backgroundColor === 'rgb(255, 255, 255)' &&
    cff.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnswered2 = true;
  choised.setAttribute('disabled', 'true');
  choisee.setAttribute('disabled', 'true');
  choisef.setAttribute('disabled', 'true');
  chek.setAttribute('disabled', 'true');
}
































// O'zgaruvchilar
// O'zgaruvchilar

let choseh = document.getElementById('javob7');
let choseee = document.getElementById('javob8');
let choiseff = document.getElementById('javob9');
let gf = document.getElementById('check3');

let isAnsewere3 = false; // Javob berilganmi yoki yo'qmi

let xado = 1; // Birinchi javob uchun
function choosedr() {
  if (isAnsewere3) return;
  xado = Number(xado) + 1;
  if (xado % 2 === 0) {
    choseh.style.cssText = `background-color:rgb(137, 137, 137);`;
    choseee.style.cssText = `background-color:rgb(255, 255, 255);`;
    choiseff.style.cssText = `background-color:rgb(255, 255, 255);`;
    button3.style.display = 'block'

  }
}

let yani = 1; // Ikkinchi javob uchun
function chooseer() {
  if (isAnsewere3) return;
  yani = Number(yani) + 1;
  if (yani % 2 === 0) {
    choseee.style.cssText = `background-color:rgb(137, 137, 137);`;
    choseh.style.cssText = `background-color:rgb(255, 255, 255);`;
    choiseff.style.cssText = `background-color:rgb(255, 255, 255);`;
    button3.style.display = 'block'
  }
}

let ado = 1; // Uchinchisi uchun
function choosefyt() {
  if (isAnsewere3) return;
  ado = Number(ado) + 1;
  if (ado % 2 === 0) {
    choiseff.style.cssText = `background-color:rgb(137, 137, 137);`;
    choseh.style.cssText = `background-color:rgb(255, 255, 255);`;
    choseee.style.cssText = `background-color:rgb(255, 255, 255);`;
    button3.style.display = 'block'

  }
}

// Javobni tekshirish
function chekAnswere3() {
  if (isAnsewere3) return;

  const tyur = getComputedStyle(choseh);
  const ruyt = getComputedStyle(choseee);
  const gtur = getComputedStyle(choiseff);

  if (ruyt.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box3.style.backgroundColor = 'rgb(0,225,0)'
  } else if (tyur.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box3.style.backgroundColor = 'red'

  } else if (gtur.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box3.style.backgroundColor = 'red'

  } else if (tyur.backgroundColor === 'rgb(255, 255, 255)' &&
    ruyt.backgroundColor === 'rgb(255, 255, 255)' &&
    gtur.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnsewere3 = true;
  choseh.setAttribute('disabled', 'true');
  choseee.setAttribute('disabled', 'true');
  choiseff.setAttribute('disabled', 'true');
  gf.setAttribute('disabled', 'true');
}




























// O'zgaruvchilar
let chosehp = document.getElementById('javob10');
let choseeep = document.getElementById('javob11');
let choiseffp = document.getElementById('javob12');
let qif = document.getElementById('check4');

let isAnsewere4 = false; // Javob berilganmi yoki yo'qmi

let xadop = 1; // Birinchi javob uchun
function choosedrp() {
  if (isAnsewere4) return;
  xadop = Number(xadop) + 1;
  if (xadop % 2 === 0) {
    chosehp.style.cssText = `background-color:rgb(137, 137, 137);`;
    choseeep.style.cssText = `background-color:rgb(255, 255, 255);`;
    choiseffp.style.cssText = `background-color:rgb(255, 255, 255);`;
    button4.style.display = 'block'
  }
}

let yanip = 1; // Ikkinchi javob uchun
function chooseerp() {
  if (isAnsewere4) return;
  yanip = Number(yanip) + 1;
  if (yanip % 2 === 0) {
    choseeep.style.cssText = `background-color:rgb(137, 137, 137);`;
    chosehp.style.cssText = `background-color:rgb(255, 255, 255);`;
    choiseffp.style.cssText = `background-color:rgb(255, 255, 255);`;
    button4.style.display = 'block'

  }
}

let adop = 1; // Uchinchisi uchun
function choosefytp() {
  if (isAnsewere4) return;
  adop = Number(adop) + 1;
  if (adop % 2 === 0) {
    choiseffp.style.cssText = `background-color:rgb(137, 137, 137);`;
    chosehp.style.cssText = `background-color:rgb(255, 255, 255);`;
    choseeep.style.cssText = `background-color:rgb(255, 255, 255);`;
    button4.style.display = 'block'

  }
}

// Javobni tekshirish
function chekAnswere4() {
  if (isAnsewere4) return;

  const tyurp = getComputedStyle(chosehp);
  const ruytp = getComputedStyle(choseeep);
  const gturp = getComputedStyle(choiseffp);

  if (tyurp.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box4.style.backgroundColor = 'rgb(0,225,0)'

  } else if (ruytp.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box4.style.backgroundColor = 'red'

  } else if (gturp.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box4.style.backgroundColor = 'red'

  } else if (tyurp.backgroundColor === 'rgb(255, 255, 255)' &&
    ruytp.backgroundColor === 'rgb(255, 255, 255)' &&
    gturp.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnsewere4 = true;
  chosehp.setAttribute('disabled', 'true');
  choseeep.setAttribute('disabled', 'true');
  choiseffp.setAttribute('disabled', 'true');
  gf.setAttribute('disabled', 'true');
}




































// beshinchi savol

let fgrt = document.getElementById('javob13');
let rtg = document.getElementById('javob14');
let frty = document.getElementById('javob15');
let drt = document.getElementById('check5');

let isAnswered5 = false;

let qwe = 1;
function choosedu() {
  if (isAnswered5) return;
  qwe = Number(qwe) + 1;
  if (qwe % 2 === 0) {
    fgrt.style.cssText = `background-color:rgb(137, 137, 137);`;
    rtg.style.cssText = `background-color:rgb(255, 255, 255);`;
    frty.style.cssText = `background-color:rgb(255, 255, 255);`;
    button5.style.display = 'block'
  }
}

let yaya = 1;
function chooseeu() {
  if (isAnswered5) return;
  yaya = Number(yaya) + 1;
  if (yaya % 2 === 0) {
    rtg.style.cssText = `background-color:rgb(137, 137, 137);`;
    fgrt.style.cssText = `background-color:rgb(255, 255, 255);`;
    frty.style.cssText = `background-color:rgb(255, 255, 255);`;
    button5.style.display = 'block'

  }
}

let fgtyu = 1;
function choosefu() {
  if (isAnswered5) return;
  fgtyu = Number(fgtyu) + 1;
  if (fgtyu % 2 === 0) {
    frty.style.cssText = `background-color:rgb(137, 137, 137);`;
    fgrt.style.cssText = `background-color:rgb(255, 255, 255);`;
    rtg.style.cssText = `background-color:rgb(255, 255, 255);`;
    button5.style.display = 'block'

  }
}

function checkAnswer5() {
  if (isAnswered5) return;

  const poi = getComputedStyle(fgrt);
  const dfer = getComputedStyle(rtg);
  const dret = getComputedStyle(frty);

  if (dfer.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box5.style.backgroundColor = 'rgb(0,225,0)'

  } else if (poi.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box5.style.backgroundColor = 'red'

  } else if (dret.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box5.style.backgroundColor = 'red'
  } else if (poi.backgroundColor === 'rgb(255, 255, 255)' &&
    dfer.backgroundColor === 'rgb(255, 255, 255)' &&
    dret.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnswered5 = true;
  fgrt.setAttribute('disabled', 'true');
  rtg.setAttribute('disabled', 'true');
  frty.setAttribute('disabled', 'true');
  drt.setAttribute('disabled', 'true');
}

































// oltinchi savol

let sgrt = document.getElementById('javob16');
let rtyui = document.getElementById('javob17');
let der = document.getElementById('javob18');
let serty = document.getElementById('check6');

let isAnswered6 = false;

let hert = 1;
function choosedut() {
  if (isAnswered6) return;
  hert = Number(hert) + 1;
  if (hert % 2 === 0) {
    sgrt.style.cssText = `background-color:rgb(137, 137, 137);`;
    rtyui.style.cssText = `background-color:rgb(255, 255, 255);`;
    der.style.cssText = `background-color:rgb(255, 255, 255);`;
    button6.style.display = 'block'
  }
}

let yayaya = 1;
function chooseeut() {
  if (isAnswered6) return;
  yayaya = Number(yayaya) + 1;
  if (yayaya % 2 === 0) {
    rtyui.style.cssText = `background-color:rgb(137, 137, 137);`;
    sgrt.style.cssText = `background-color:rgb(255, 255, 255);`;
    der.style.cssText = `background-color:rgb(255, 255, 255);`;
    button6.style.display = 'block'

  }
}

let poert = 1;
function choosefut() {
  if (isAnswered6) return;
  poert = Number(poert) + 1;
  if (poert % 2 === 0) {
    der.style.cssText = `background-color:rgb(137, 137, 137);`;
    sgrt.style.cssText = `background-color:rgb(255, 255, 255);`;
    rtyui.style.cssText = `background-color:rgb(255, 255, 255);`;
    button6.style.display = 'block'

  }
}

function checkAnswer6() {
  if (isAnswered6) return;

  const dertuy = getComputedStyle(sgrt);
  const derttyyu = getComputedStyle(rtyui);
  const frytiuuy = getComputedStyle(der);

  if (dertuy.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box6.style.backgroundColor = 'rgb(0,225,0)'

  } else if (derttyyu.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box6.style.backgroundColor = 'red'

  } else if (frytiuuy.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box6.style.backgroundColor = 'red'

  } else if (dertuy.backgroundColor === 'rgb(255, 255, 255)' &&
    derttyyu.backgroundColor === 'rgb(255, 255, 255)' &&
    frytiuuy.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnswered6 = true;
  sgrt.setAttribute('disabled', 'true');
  rtyui.setAttribute('disabled', 'true');
  der.setAttribute('disabled', 'true');
  serty.setAttribute('disabled', 'true');
}


































// 7 - savol

let optionA = document.getElementById('option1');
let optionB = document.getElementById('option2');
let optionC = document.getElementById('option3');
let checkButton = document.getElementById('check7');

let isAnswered = false;

let counterA = 1;
function chooseOptionA() {
  if (isAnswered) return;
  counterA = Number(counterA) + 1;
  if (counterA % 2 === 0) {
    optionA.style.cssText = `background-color:rgb(137, 137, 137);`;
    optionB.style.cssText = `background-color:rgb(255, 255, 255);`;
    optionC.style.cssText = `background-color:rgb(255, 255, 255);`;
    button7.style.display = 'block'
  }
}

let counterB = 1;
function chooseOptionB() {
  if (isAnswered) return;
  counterB = Number(counterB) + 1;
  if (counterB % 2 === 0) {
    optionB.style.cssText = `background-color:rgb(137, 137, 137);`;
    optionA.style.cssText = `background-color:rgb(255, 255, 255);`;
    optionC.style.cssText = `background-color:rgb(255, 255, 255);`;
    button7.style.display = 'block'

  }
}

let counterC = 1;
function chooseOptionC() {
  if (isAnswered) return;
  counterC = Number(counterC) + 1;
  if (counterC % 2 === 0) {
    optionC.style.cssText = `background-color:rgb(137, 137, 137);`;
    optionA.style.cssText = `background-color:rgb(255, 255, 255);`;
    optionB.style.cssText = `background-color:rgb(255, 255, 255);`;
    button7.style.display = 'block'

  }
}

function checkAnswer7() {
  if (isAnswered) return;

  const styleA = getComputedStyle(optionA);
  const styleB = getComputedStyle(optionB);
  const styleC = getComputedStyle(optionC);

  if (styleC.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box7.style.backgroundColor = 'rgb(0,225,0)'

  } else if (styleB.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box7.style.backgroundColor = 'red'

  } else if (styleA.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box7.style.backgroundColor = 'red'
  } else if (styleA.backgroundColor === 'rgb(255, 255, 255)' &&
    styleB.backgroundColor === 'rgb(255, 255, 255)' &&
    styleC.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isAnswered = true;
  optionA.setAttribute('disabled', 'true');
  optionB.setAttribute('disabled', 'true');
  optionC.setAttribute('disabled', 'true');
  checkButton.setAttribute('disabled', 'true');
}






















// 8-savol

let answerX = document.getElementById('answerX');
let answerY = document.getElementById('answerY');
let answerZ = document.getElementById('answerZ');
let validateButton = document.getElementById('check9');

let hasAnswered = false;

let countX = 1;
function selectAnswerX() {
  if (hasAnswered) return;
  countX = Number(countX) + 1;
  if (countX % 2 === 0) {
    answerX.style.cssText = `background-color:rgb(137, 137, 137);`;
    answerY.style.cssText = `background-color:rgb(255, 255, 255);`;
    answerZ.style.cssText = `background-color:rgb(255, 255, 255);`;
    button8.style.display = 'block'

  }
}

let countY = 1;
function selectAnswerY() {
  if (hasAnswered) return;
  countY = Number(countY) + 1;
  if (countY % 2 === 0) {
    answerY.style.cssText = `background-color:rgb(137, 137, 137);`;
    answerX.style.cssText = `background-color:rgb(255, 255, 255);`;
    answerZ.style.cssText = `background-color:rgb(255, 255, 255);`;
    button8.style.display = 'block'

  }
}

let countZ = 1;
function selectAnswerZ() {
  if (hasAnswered) return;
  countZ = Number(countZ) + 1;
  if (countZ % 2 === 0) {
    answerZ.style.cssText = `background-color:rgb(137, 137, 137);`;
    answerX.style.cssText = `background-color:rgb(255, 255, 255);`;
    answerY.style.cssText = `background-color:rgb(255, 255, 255);`;
    button8.style.display = 'block'

  }
}

function validateAnswer7() {
  if (hasAnswered) return;

  const styleX = getComputedStyle(answerX);
  const styleY = getComputedStyle(answerY);
  const styleZ = getComputedStyle(answerZ);

  if (styleX.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box8.style.backgroundColor = 'rgb(0,225,0)'

  } else if (styleY.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box8.style.backgroundColor = 'red'

  } else if (styleZ.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box8.style.backgroundColor = 'red'
  } else if (styleX.backgroundColor === 'rgb(255, 255, 255)' &&
    styleY.backgroundColor === 'rgb(255, 255, 255)' &&
    styleZ.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  hasAnswered = true;
  answerX.setAttribute('disabled', 'true');
  answerY.setAttribute('disabled', 'true');
  answerZ.setAttribute('disabled', 'true');
  validateButton.setAttribute('disabled', 'true');
}

// 9-savol






















let optionOne = document.getElementById('option5');
let optionTwo = document.getElementById('option6');
let optionThree = document.getElementById('option7');
let submitButton = document.getElementById('submit7');

let alreadyAnswered = false;

let selectCountOne = 1;
function chooseOptionOne() {
  if (alreadyAnswered) return;
  selectCountOne = Number(selectCountOne) + 1;
  if (selectCountOne % 2 === 0) {
    optionOne.style.cssText = `background-color:rgb(137, 137, 137);`;
    optionTwo.style.cssText = `background-color:rgb(255, 255, 255);`;
    optionThree.style.cssText = `background-color:rgb(255, 255, 255);`;
    button9.style.display = 'block'

  }
}

let selectCountTwo = 1;
function chooseOptionTwo() {
  if (alreadyAnswered) return;
  selectCountTwo = Number(selectCountTwo) + 1;
  if (selectCountTwo % 2 === 0) {
    optionTwo.style.cssText = `background-color:rgb(137, 137, 137);`;
    optionOne.style.cssText = `background-color:rgb(255, 255, 255);`;
    optionThree.style.cssText = `background-color:rgb(255, 255, 255);`;
    button9.style.display = 'block'

  }
}

let selectCountThree = 1;
function chooseOptionThree() {
  if (alreadyAnswered) return;
  selectCountThree = Number(selectCountThree) + 1;
  if (selectCountThree % 2 === 0) {
    optionThree.style.cssText = `background-color:rgb(137, 137, 137);`;
    optionOne.style.cssText = `background-color:rgb(255, 255, 255);`;
    optionTwo.style.cssText = `background-color:rgb(255, 255, 255);`;
    button9.style.display = 'block'

  }
}

function validateSelection() {
  if (alreadyAnswered) return;

  const styleOne = getComputedStyle(optionOne);
  const styleTwo = getComputedStyle(optionTwo);
  const styleThree = getComputedStyle(optionThree);

  if (styleTwo.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box9.style.backgroundColor = 'rgb(0,225,0)'

  } else if (styleThree.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box9.style.backgroundColor = 'red'

  } else if (styleOne.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box9.style.backgroundColor = 'red'
  } else if (styleOne.backgroundColor === 'rgb(255, 255, 255)' &&
    styleTwo.backgroundColor === 'rgb(255, 255, 255)' &&
    styleThree.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  alreadyAnswered = true;
  optionOne.setAttribute('disabled', 'true');
  optionTwo.setAttribute('disabled', 'true');
  optionThree.setAttribute('disabled', 'true');
  submitButton.setAttribute('disabled', 'true');
}
































// 10-savol

let barcelona = document.getElementById('barcelonaChoice');
let realMadrid = document.getElementById('realMadridChoice');
let juventus = document.getElementById('juventusChoice');
let finalizeButton = document.getElementById('finalizeMatch');

let hasChosen = false;

let barcelonaClickCount = 1;
function selectBarcelona() {
  if (hasChosen) return;
  barcelonaClickCount = Number(barcelonaClickCount) + 1;
  if (barcelonaClickCount % 2 === 0) {
    barcelona.style.cssText = `background-color:rgb(137, 137, 137);`;
    realMadrid.style.cssText = `background-color:rgb(255, 255, 255);`;
    juventus.style.cssText = `background-color:rgb(255, 255, 255);`;
    button10.style.display = 'block'

  }
}

let realMadridClickCount = 1;
function selectRealMadrid() {
  if (hasChosen) return;
  realMadridClickCount = Number(realMadridClickCount) + 1;
  if (realMadridClickCount % 2 === 0) {
    realMadrid.style.cssText = `background-color:rgb(137, 137, 137);`;
    barcelona.style.cssText = `background-color:rgb(255, 255, 255);`;
    juventus.style.cssText = `background-color:rgb(255, 255, 255);`;
    button10.style.display = 'block'

  }
}

let juventusClickCount = 1;
function selectJuventus() {
  if (hasChosen) return;
  juventusClickCount = Number(juventusClickCount) + 1;
  if (juventusClickCount % 2 === 0) {
    juventus.style.cssText = `background-color:rgb(137, 137, 137);`;
    barcelona.style.cssText = `background-color:rgb(255, 255, 255);`;
    realMadrid.style.cssText = `background-color:rgb(255, 255, 255);`;
    button10.style.display = 'block'

  }
}

function checkMatchAnswer() {
  if (hasChosen) return;

  const barcelonaStyle = getComputedStyle(barcelona);
  const realMadridStyle = getComputedStyle(realMadrid);
  const juventusStyle = getComputedStyle(juventus);

  if (juventusStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob ');
    box10.style.backgroundColor = 'rgb(0,225,0)'

  } else if (realMadridStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri  javob');
    box10.style.backgroundColor = 'red'

  } else if (barcelonaStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob ');
    box10.style.backgroundColor = 'red'
  } else if (barcelonaStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    realMadridStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    juventusStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  hasChosen = true;
  barcelona.setAttribute('disabled', 'true');
  realMadrid.setAttribute('disabled', 'true');
  juventus.setAttribute('disabled', 'true');
  finalizeButton.setAttribute('disabled', 'true');
}








































// 11-savol

let manCity = document.getElementById('manCityChoice');
let liverpool = document.getElementById('liverpoolChoice');
let psg = document.getElementById('psgChoice');
let finishButton = document.getElementById('finishMatch');

let isMatchFinalized = false;

let manCityClickCount = 1;
function selectManCity() {
  if (isMatchFinalized) return;
  manCityClickCount = Number(manCityClickCount) + 1;
  if (manCityClickCount % 2 === 0) {
    manCity.style.cssText = `background-color:rgb(137, 137, 137);`;
    liverpool.style.cssText = `background-color:rgb(255, 255, 255);`;
    psg.style.cssText = `background-color:rgb(255, 255, 255);`;
    button11.style.display = 'block'

  }
}

let liverpoolClickCount = 1;
function selectLiverpool() {
  if (isMatchFinalized) return;
  liverpoolClickCount = Number(liverpoolClickCount) + 1;
  if (liverpoolClickCount % 2 === 0) {
    liverpool.style.cssText = `background-color:rgb(137, 137, 137);`;
    manCity.style.cssText = `background-color:rgb(255, 255, 255);`;
    psg.style.cssText = `background-color:rgb(255, 255, 255);`;
    button11.style.display = 'block'

  }
}

let psgClickCount = 1;
function selectPSG() {
  if (isMatchFinalized) return;
  psgClickCount = Number(psgClickCount) + 1;
  if (psgClickCount % 2 === 0) {
    psg.style.cssText = `background-color:rgb(137, 137, 137);`;
    manCity.style.cssText = `background-color:rgb(255, 255, 255);`;
    liverpool.style.cssText = `background-color:rgb(255, 255, 255);`;
    button11.style.display = 'block'

  }
}

function validateMatchResult() {
  if (isMatchFinalized) return;

  const manCityStyle = getComputedStyle(manCity);
  const liverpoolStyle = getComputedStyle(liverpool);
  const psgStyle = getComputedStyle(psg);

  if (manCityStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box11.style.backgroundColor = 'rgb(0,225,0)'

  } else if (psgStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box11.style.backgroundColor = 'red'

  } else if (liverpoolStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box11.style.backgroundColor = 'red'
  } else if (manCityStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    liverpoolStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    psgStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isMatchFinalized = true;
  manCity.setAttribute('disabled', 'true');
  liverpool.setAttribute('disabled', 'true');
  psg.setAttribute('disabled', 'true');
  finishButton.setAttribute('disabled', 'true');
}








































// 12---savol

let uzbekistan = document.getElementById('uzbekistanChoice');
let usa = document.getElementById('usaChoice');
let france = document.getElementById('franceChoice');
let japanButton = document.getElementById('japanChoice');

let isSelectionFinalized = false;

let uzbekistanClickCount = 1;
function selectUzbekistan() {
  if (isSelectionFinalized) return;
  uzbekistanClickCount = Number(uzbekistanClickCount) + 1;
  if (uzbekistanClickCount % 2 === 0) {
    uzbekistan.style.cssText = `background-color:rgb(137, 137, 137);`;
    usa.style.cssText = `background-color:rgb(255, 255, 255);`;
    france.style.cssText = `background-color:rgb(255, 255, 255);`;
    button13.style.display = 'block'


  }
}

let usaClickCount = 1;
function selectUSA() {
  if (isSelectionFinalized) return;
  usaClickCount = Number(usaClickCount) + 1;
  if (usaClickCount % 2 === 0) {
    usa.style.cssText = `background-color:rgb(137, 137, 137);`;
    uzbekistan.style.cssText = `background-color:rgb(255, 255, 255);`;
    france.style.cssText = `background-color:rgb(255, 255, 255);`;
    button13.style.display = 'block'


  }
}

let franceClickCount = 1;
function selectFrance() {
  if (isSelectionFinalized) return;
  franceClickCount = Number(franceClickCount) + 1;
  if (franceClickCount % 2 === 0) {
    france.style.cssText = `background-color:rgb(137, 137, 137);`;
    uzbekistan.style.cssText = `background-color:rgb(255, 255, 255);`;
    usa.style.cssText = `background-color:rgb(255, 255, 255);`;
    button13.style.display = 'block'


  }
}

function validateCountrySelection() {
  if (isSelectionFinalized) return;

  const uzbekistanStyle = getComputedStyle(uzbekistan);
  const usaStyle = getComputedStyle(usa);
  const franceStyle = getComputedStyle(france);

  if (uzbekistanStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box13.style.backgroundColor = 'rgb(0,225,0)'

  } else if (franceStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box13.style.backgroundColor = 'red'

  } else if (usaStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box13.style.backgroundColor = 'red'

  } else if (uzbekistanStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    usaStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    franceStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isSelectionFinalized = true;
  uzbekistan.setAttribute('disabled', 'true');
  usa.setAttribute('disabled', 'true');
  france.setAttribute('disabled', 'true');
  japanButton.setAttribute('disabled', 'true');
}







































// 14-savol


let nike = document.getElementById('nikeChoice');
let adidas = document.getElementById('adidasChoice');
let puma = document.getElementById('pumaChoice');
let gucciButton = document.getElementById('gucciChoice');

let isGucciFinalized = false;

let nikeClickCount = 1;
function selectNike() {
  if (isGucciFinalized) return;
  nikeClickCount = Number(nikeClickCount) + 1;
  if (nikeClickCount % 2 === 0) {
    nike.style.cssText = `background-color:rgb(137, 137, 137);`;
    adidas.style.cssText = `background-color:rgb(255, 255, 255);`;
    puma.style.cssText = `background-color:rgb(255, 255, 255);`;
    button14.style.display = 'block'

  }
}

let adidasClickCount = 1;
function selectAdidas() {
  if (isGucciFinalized) return;
  adidasClickCount = Number(adidasClickCount) + 1;
  if (adidasClickCount % 2 === 0) {
    adidas.style.cssText = `background-color:rgb(137, 137, 137);`;
    nike.style.cssText = `background-color:rgb(255, 255, 255);`;
    puma.style.cssText = `background-color:rgb(255, 255, 255);`;
    button14.style.display = 'block'

  }
}

let pumaClickCount = 1;
function selectPuma() {
  if (isGucciFinalized) return;
  pumaClickCount = Number(pumaClickCount) + 1;
  if (pumaClickCount % 2 === 0) {
    puma.style.cssText = `background-color:rgb(137, 137, 137);`;
    nike.style.cssText = `background-color:rgb(255, 255, 255);`;
    adidas.style.cssText = `background-color:rgb(255, 255, 255);`;
    button14.style.display = 'block'

  }
}

function validateBrandSelection() {
  if (isGucciFinalized) return;

  const nikeStyle = getComputedStyle(nike);
  const adidasStyle = getComputedStyle(adidas);
  const pumaStyle = getComputedStyle(puma);

  if (pumaStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box14.style.backgroundColor = 'rgb(0,225,0)'

  } else if (adidasStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box14.style.backgroundColor = 'red'

  } else if (nikeStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box14.style.backgroundColor = 'red'

  } else if (nikeStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    adidasStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    pumaStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isGucciFinalized = true;
  nike.setAttribute('disabled', 'true');
  adidas.setAttribute('disabled', 'true');
  puma.setAttribute('disabled', 'true');
  gucciButton.setAttribute('disabled', 'true');
}







































// 15-savol

let zegna = document.getElementById('zegnaChoice');
let prada = document.getElementById('pradaChoice');
let armani = document.getElementById('armaniChoice');
let finalizeButt = document.getElementById('finalizeChoice');

let isSelectionFinaliz = false;

let zegnaClickCount = 1;
function selectZegna() {
  if (isSelectionFinaliz) return;
  zegnaClickCount = Number(zegnaClickCount) + 1;
  if (zegnaClickCount % 2 === 0) {
    zegna.style.cssText = `background-color:rgb(137, 137, 137);`;
    prada.style.cssText = `background-color:rgb(255, 255, 255);`;
    armani.style.cssText = `background-color:rgb(255, 255, 255);`;
    button15.style.display = 'block'

  }
}

let pradaClickCount = 1;
function selectPrada() {
  if (isSelectionFinaliz) return;
  pradaClickCount = Number(pradaClickCount) + 1;
  if (pradaClickCount % 2 === 0) {
    prada.style.cssText = `background-color:rgb(137, 137, 137);`;
    zegna.style.cssText = `background-color:rgb(255, 255, 255);`;
    armani.style.cssText = `background-color:rgb(255, 255, 255);`;
    button15.style.display = 'block'

  }
}

let armaniClickCount = 1;
function selectArmani() {
  if (isSelectionFinaliz) return;
  armaniClickCount = Number(armaniClickCount) + 1;
  if (armaniClickCount % 2 === 0) {
    armani.style.cssText = `background-color:rgb(137, 137, 137);`;
    zegna.style.cssText = `background-color:rgb(255, 255, 255);`;
    prada.style.cssText = `background-color:rgb(255, 255, 255);`;
    button15.style.display = 'block'

  }
}

function finalizeBrandSelection() {
  if (isSelectionFinaliz) return;

  const zegnaStyle = getComputedStyle(zegna);
  const pradaStyle = getComputedStyle(prada);
  const armaniStyle = getComputedStyle(armani);

  if (pradaStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box15.style.backgroundColor = 'rgb(0,225,0)'

  } else if (armaniStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box15.style.backgroundColor = 'red'

  } else if (zegnaStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box15.style.backgroundColor = 'red'

  } else if (zegnaStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    pradaStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    armaniStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir kiyim brendini tanlang');
  }

  isSelectionFinaliz = true;
  zegna.setAttribute('disabled', 'true');
  prada.setAttribute('disabled', 'true');
  armani.setAttribute('disabled', 'true');
  finalizeButt.setAttribute('disabled', 'true');
}





































let mathematics = document.getElementById('mathematicsChoice');
let physics = document.getElementById('physicsChoice');
let chemistry = document.getElementById('chemistryChoice');
let finalizeButtone = document.getElementById('finalizeSelectione');

let isSubjectFinalized = false;

let mathematicsClickCount = 1;
function selectMathematics() {
  if (isSubjectFinalized) return;
  mathematicsClickCount = Number(mathematicsClickCount) + 1;
  if (mathematicsClickCount % 2 === 0) {
    mathematics.style.cssText = `background-color:rgb(137, 137, 137);`;
    physics.style.cssText = `background-color:rgb(255, 255, 255);`;
    chemistry.style.cssText = `background-color:rgb(255, 255, 255);`;
    button16.style.display = 'block'

  }
}

let physicsClickCount = 1;
function selectPhysics() {
  if (isSubjectFinalized) return;
  physicsClickCount = Number(physicsClickCount) + 1;
  if (physicsClickCount % 2 === 0) {
    physics.style.cssText = `background-color:rgb(137, 137, 137);`;
    mathematics.style.cssText = `background-color:rgb(255, 255, 255);`;
    chemistry.style.cssText = `background-color:rgb(255, 255, 255);`;
    button16.style.display = 'block'

  }
}

let chemistryClickCount = 1;
function selectChemistry() {
  if (isSubjectFinalized) return;
  chemistryClickCount = Number(chemistryClickCount) + 1;
  if (chemistryClickCount % 2 === 0) {
    chemistry.style.cssText = `background-color:rgb(137, 137, 137);`;
    mathematics.style.cssText = `background-color:rgb(255, 255, 255);`;
    physics.style.cssText = `background-color:rgb(255, 255, 255);`;
    button16.style.display = 'block'

  }
}

function finalizeSubjectSelection() {
  if (isSubjectFinalized) return;

  const mathematicsStyle = getComputedStyle(mathematics);
  const physicsStyle = getComputedStyle(physics);
  const chemistryStyle = getComputedStyle(chemistry);

  if (mathematicsStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box16.style.backgroundColor = 'rgb(0,225,0)'

  } else if (chemistryStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box16.style.backgroundColor = 'red'

  } else if (physicsStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box16.style.backgroundColor = 'red'

  } else if (mathematicsStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    physicsStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    chemistryStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir javobni tanlang');
  }

  isSubjectFinalized = true;
  mathematics.setAttribute('disabled', 'true');
  physics.setAttribute('disabled', 'true');
  chemistry.setAttribute('disabled', 'true');
  finalizeButtone.setAttribute('disabled', 'true');
}



















// 12-savol

let toyota = document.getElementById('toyotaChoice');
let bmw = document.getElementById('bmwChoice');
let mercedes = document.getElementById('mercedesChoice');
let finalizeButtoneer = document.getElementById('finalizeSelection');

let isSelectionFinalizedo = false;

let toyotaClickCount = 1;
function selectToyota() {
  if (isSelectionFinalizedo) return;
  toyotaClickCount = Number(toyotaClickCount) + 1;
  if (toyotaClickCount % 2 === 0) {
    toyota.style.cssText = `background-color:rgb(137, 137, 137);`;
    bmw.style.cssText = `background-color:rgb(255, 255, 255);`;
    mercedes.style.cssText = `background-color:rgb(255, 255, 255);`;
    button12.style.display = 'block'
  }
}

let bmwClickCount = 1;
function selectBMW() {
  if (isSelectionFinalizedo) return;
  bmwClickCount = Number(bmwClickCount) + 1;
  if (bmwClickCount % 2 === 0) {
    bmw.style.cssText = `background-color:rgb(137, 137, 137);`;
    toyota.style.cssText = `background-color:rgb(255, 255, 255);`;
    mercedes.style.cssText = `background-color:rgb(255, 255, 255);`;
    button12.style.display = 'block'

  }
}

let mercedesClickCount = 1;
function selectMercedes() {
  if (isSelectionFinalizedo) return;
  mercedesClickCount = Number(mercedesClickCount) + 1;
  if (mercedesClickCount % 2 === 0) {
    mercedes.style.cssText = `background-color:rgb(137, 137, 137);`;
    toyota.style.cssText = `background-color:rgb(255, 255, 255);`;
    bmw.style.cssText = `background-color:rgb(255, 255, 255);`;
    button12.style.display = 'block'

  }
}

function validateCarSelection() {
  if (isSelectionFinalizedo) return;

  const toyotaStyle = getComputedStyle(toyota);
  const bmwStyle = getComputedStyle(bmw);
  const mercedesStyle = getComputedStyle(mercedes);

  if (toyotaStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('To\'g\'ri javob');
    box12.style.backgroundColor = 'rgb(0,225,0)'

  } else if (mercedesStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box12.style.backgroundColor = 'red'

  } else if (bmwStyle.backgroundColor === 'rgb(137, 137, 137)') {
    alert('Noto\'g\'ri javob');
    box12.style.backgroundColor = 'red'

  } else if (toyotaStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    bmwStyle.backgroundColor === 'rgb(255, 255, 255)' &&
    mercedesStyle.backgroundColor === 'rgb(255, 255, 255)') {
    alert('Biror bir mashina markasini tanlang');
  }

  isSelectionFinalizedo = true;
  toyota.setAttribute('disabled', 'true');
  bmw.setAttribute('disabled', 'true');
  mercedes.setAttribute('disabled', 'true');
  finalizeButtoneer.setAttribute('disabled', 'true');
}


let div1 = document.getElementsByClassName('question1')[0];
div1.style.display = 'none';

let div2 = document.getElementsByClassName('question2')[0];
div2.style.display = 'none';

let div3 = document.getElementsByClassName('question3')[0];
div3.style.display = 'none';

let div4 = document.getElementsByClassName('question4')[0];
div4.style.display = 'none';

let div5 = document.getElementsByClassName('question5')[0];
div5.style.display = 'none';

let div6 = document.getElementsByClassName('question6')[0];
div6.style.display = 'none';

let div7 = document.getElementsByClassName('question7')[0];
div7.style.display = 'none';

let div8 = document.getElementsByClassName('question8')[0]
div8.style.display = 'none';

let div9 = document.getElementsByClassName('question9')[0];
div9.style.display = 'none';

let div10 = document.getElementsByClassName('question10')[0];
div10.style.display = 'none';

let div11 = document.getElementsByClassName('question11')[0];
div11.style.display = 'none';

let div12 = document.getElementsByClassName('question12')[0];
div12.style.display = 'none';

let div13 = document.getElementsByClassName('question13')[0];
div13.style.display = 'none';

let div14 = document.getElementsByClassName('question14')[0];
div14.style.display = 'none';

let div15 = document.getElementsByClassName('question15')[0];
div15.style.display = 'none';

let div16 = document.getElementsByClassName('question16')[0];
div16.style.display = 'none';

let hr = document.getElementById('hr')
hr.style.display = 'none'
function savol1() {

  div1.style.display = 'flex'
  div2.style.display = 'none'
  div3.style.display = 'none'
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
  hr.style.display = 'flex'

}

function savol2() {
  div2.style.display = 'flex';
  div1.style.display = 'none';
  div3.style.display = 'none'
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  hr.style.display = 'flex'

  div16.style.display = 'none'
}

function savol3() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'flex';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  hr.style.display = 'flex'

  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol4() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'flex'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  hr.style.display = 'flex'

  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol5() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'flex'
  div6.style.display = 'none'
  div7.style.display = 'none'
  hr.style.display = 'flex'

  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol6() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'flex'
  div7.style.display = 'none'
  div8.style.display = 'none'
  hr.style.display = 'flex'

  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol7() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'flex'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  hr.style.display = 'flex'


  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol8() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'flex'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  hr.style.display = 'flex'

  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'

}

function savol9() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  hr.style.display = 'flex'

  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'flex'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol10() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  hr.style.display = 'flex'

  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'flex'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol11() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  hr.style.display = 'flex'

  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'flex'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol12() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  hr.style.display = 'flex'

  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'flex'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol13() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  hr.style.display = 'flex'

  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'flex'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol14() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  div6.style.display = 'none'
  hr.style.display = 'flex'

  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'flex'
  div15.style.display = 'none'
  div16.style.display = 'none'
}

function savol15() {
  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  div5.style.display = 'none'
  hr.style.display = 'flex'

  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'flex'
  div16.style.display = 'none'
}

function savol16() {

  div1.style.display = 'none';
  div2.style.display = 'none'
  div3.style.display = 'none';
  div4.style.display = 'none'
  hr.style.display = 'flex'

  div5.style.display = 'none'
  div6.style.display = 'none'
  div7.style.display = 'none'
  div8.style.display = 'none'
  div9.style.display = 'none'
  div10.style.display = 'none'
  div11.style.display = 'none'
  div12.style.display = 'none'
  div13.style.display = 'none'
  div14.style.display = 'none'
  div15.style.display = 'none'
  div16.style.display = 'flex'
}
let raqam = document.getElementById('div16')



// let numbers = Array.from({ length: 16 }, (_, i) => i + 1); 
// let div = document.getElementById('number');
// let interval; 
// let isRunning = false;
// let usedNumbers = [];

// function startRandom() {
//     if (isRunning) {
//         clearInterval(interval); 
//         isRunning = false;
//         return;
//     }

//     isRunning = true;
//     interval = setInterval(() => {
//         let availableNumbers = numbers.filter(num => !usedNumbers.includes(num));

//         if (availableNumbers.length === 0) {
//             clearInterval(interval);
//             div.textContent = 'Barcha sonlar ishlatilgan';
//             return;
//         }

//         let randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];

//         div.textContent = randomNumber;

//     }, 20); 
// }

// function stopRandom() {
//     let currentNumber = parseInt(div.textContent);
//     usedNumbers.push(currentNumber);

//     numbers = numbers.filter(num => num !== currentNumber);
// }

// document.querySelector('button').addEventListener('click', () => {
//     startRandom();
//     setTimeout(stopRandom, 100); 
// });


let card = document.getElementById('card');
let bar = document.getElementById('bar');
let btn = document.createElement('button')
btn.innerText = 'djdj'
card.style.transition = 'height 0.5s ease-in-out, opacity 0.5s ease-in-out';

bar.addEventListener('click', () => {
  if (card.style.transform === 'translateY(-110%)') {
    card.style.cssText = `
    transform: translateY(0%) ;
    transition: 1s;
    `;
  } else {
    card.style.transform = 'translateY(-110%)';
  }
});




let input1 = document.getElementById('birinchiinput')
let input2 = document.getElementById('ikkinchiinput')
let etap2 = document.getElementById('ikkinchibosqich')
let etap1 = document.getElementById('birinchibosqich')
