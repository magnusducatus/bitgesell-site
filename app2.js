const bgMainColor = document.querySelector('.bg-main-color');
const colorSq = document.querySelector('#color-sq');
const bannerTopPurpleSq = document.querySelector('#banner-top-purple-sq');
const bannerText = document.querySelectorAll('.banner p');
const backLinear = document.querySelector('.bg-linear-anim');

let squareAttrs = {
  bannerTopPurpleSqAttr: 'opacity: 0.8; fill: rgb(110, 56, 229);',
  colorSqAttr: 'matrix(1,0,0,1,0,0)',
  bannerScale: 12,
  backLinearAttr:
    'linear-gradient(30deg,rgb(0, 0, 94) 12%,rgb(140, 85, 255) 100%)',
};

let squareSvg = anime({
  targets: squareAttrs,
  bannerTopPurpleSqAttr: 'opacity: 0.4; fill: rgb(0, 18, 94);',
  colorSqAttr:
    'matrix(0.30000000000000004,0,0,0.320000000000000004,175.6,174.6)',
  bannerScale: 16,
  backLinearAttr:
    'linear-gradient(20deg, rgb(140, 85, 255) 12%, rgb(0, 0, 94) 100%)',
  elasticity: 200,
  easing: 'linear',
  autoplay: false,
  update: () => {
    bannerTopPurpleSq.setAttribute('style', squareAttrs.bannerTopPurpleSqAttr);
    colorSq.setAttribute('transform', squareAttrs.colorSqAttr);
    backLinear.style.backgroundImage = squareAttrs.backLinearAttr;
    bannerText.forEach((p) => {
      p.style.fontSize = squareAttrs.bannerScale + 'px';
    });
  },
});

const trisPurp = document.querySelector('#tris-purp');
const trisCircle = document.querySelector('#tris-circle');
const trisBlue = document.querySelector('#tris-blue');
const trisGreen = document.querySelector('#tris-green');
const triImgWrap = document.querySelector('#tri-img-wrap');
const gesellImg3 = document.querySelector('#gesell-img3');
const gesellImg2 = document.querySelector('#gesell-img2');

let triangleAttrs = {
  trisPurpAttr: 'matrix(-1,0,0,-1,1393.8050537109375,1931.44409)',
  trisCircleAttr: 'matrix(-1,0,0,-1,1491.925048828125,1882.3360595703125)',
  trisBlueAttr: 'matrix(1,0,0,1,1249.20492,1335.44797)',
  trisGreenAttr: 'matrix(1,0,0,1,998.16899,1466.40404)',
  triImgWrapAttr: 'matrix(1,0,0,1,0,0)',
  triGesellImgMatrix: 'matrix(1,0,0,1,0,0)',
  imgOpacity2: 1,
  imgOpacity3: 1,
};

let triangleSvg = anime({
  targets: triangleAttrs,
  trisPurpAttr: 'matrix(-0.8, 0, 0, -0.8, 1359.04395, 1962.14129)',
  trisCircleAttr: 'matrix(-0.95,0,0,-0.95,1478.3288,1868.73981)',
  trisBlueAttr: 'matrix(0.7,0,0,0.7,1337.10702,1180.19728)',
  trisGreenAttr: 'matrix(0.8,0,0,0.8,974.72899,1362.90404)',
  triImgWrapAttr: 'matrix(1.2,0,0,1.2,-241.40294,-300.50715)',
  triGesellImgMatrix: 'matrix(1.05,0,0,1.05,-60.35074,-73.46381)',
  imgOpacity2: [{ value: 1 }, { value: 0 }],
  imgOpacity3: [{ value: 0 }, { value: 0 }],
  elasticity: 200,
  easing: 'easeInOutSine',
  autoplay: false,
  update: () => {
    trisPurp.setAttribute('transform', triangleAttrs.trisPurpAttr);
    trisCircle.setAttribute('transform', triangleAttrs.trisCircleAttr);
    trisBlue.setAttribute('transform', triangleAttrs.trisBlueAttr);
    trisGreen.setAttribute('transform', triangleAttrs.trisGreenAttr);
    triImgWrap.setAttribute('transform', triangleAttrs.triImgWrapAttr);
    gesellImg3.setAttribute('transform', triangleAttrs.triGesellImgMatrix);
    gesellImg3.style.opacity = triangleAttrs.imgOpacity3;
    gesellImg2.style.opacity = triangleAttrs.imgOpacity2;
  },
});

const goldCircle1 = document.querySelector('#gold-circ1');
const goldCircle2 = document.querySelector('#gold-circ2');
const goldCircle3 = document.querySelector('#gold-circ3');

let goldAttrs = {
  goldCircleAttr1: 'matrix(1,0,0,1,0,0)',
  goldCircleAttr2: 'matrix(1,0,0,1,0,0)',
  goldCircleAttr3: 'matrix(1,0,0,1,0,0)',
};

let goldSvg = anime({
  targets: goldAttrs,
  goldCircleAttr1: 'matrix(1,0,0,1,-242.5,-220.5)',
  goldCircleAttr2: 'matrix(1,0,0,1,425,-47)',
  goldCircleAttr3: 'matrix(1,0,0,1,-184,268)',
  elasticity: 200,
  easing: 'linear',
  autoplay: false,
  update: () => {
    goldCircle1.setAttribute('transform', goldAttrs.goldCircleAttr1);
    goldCircle2.setAttribute('transform', goldAttrs.goldCircleAttr2);
    goldCircle3.setAttribute('transform', goldAttrs.goldCircleAttr3);
  },
});

const ovalFill = document.querySelector('#oval-fill-big');
const bgLine = document.querySelector('#bg-line');
const radarText = document.querySelector('#radar-bg-text');
const radarBtcText = document.querySelector('#radar-btc-text');
const btcLine = document.querySelector('#btc_line');
const innerCircStroke = document.querySelectorAll('.inner-circ-stroke');

let radarAttrs = {
  ovalFillAttr: 'matrix(1,0,0,1,0,0)',
  bgLineAttr: 'matrix(1,0,0,0,0,3685.5)',
  innerCircStrokeAttr: 'matrix(0.9,0,0,0.9,27.1,26.96)',
  radarTextMatrix: 'matrix(0,0,0,0,1229.20007,4037)',
  radarTextOpacity: 0,
  radarBtcTextMatrix: 'matrix(0,0,0,0,1229.15002,3355.3999)',
  radarBtcTextOpacity: 0,
  btcLineAttr: 'matrix(1,0,0,0,0,3418.5)',
};

let radarSvg = anime({
  targets: [radarAttrs, innerCircStroke],
  keyframes: [
    { ovalFillAttr: 'matrix(0.03,0,0,0.03,262.87,261.51201)' },
    {
      bgLineAttr: 'matrix(1,0,0,1,0,0)',
    },
    {
      opacity: 1,
      delay: anime.stagger(100),
    },
    { innerCircStrokeAttr: 'matrix(1,0,0,1,0,0)' },
    {
      radarTextMatrix: 'matrix(1,0,0,1,0,0)',
      radarTextOpacity: 1,
    },
    {
      btcLineAttr: 'matrix(1,0,0,1,0,0)',
      radarBtcTextMatrix: 'matrix(1,0,0,1,0,0)',
      radarBtcTextOpacity: 1,
    },
  ],
  elasticity: 200,
  easing: 'linear',
  autoplay: false,
  update: () => {
    ovalFill.setAttribute('transform', radarAttrs.ovalFillAttr);
    bgLine.setAttribute('transform', radarAttrs.bgLineAttr);
    radarText.setAttribute('transform', radarAttrs.radarTextMatrix);
    radarText.style.opacity = radarAttrs.radarTextOpacity;
    radarBtcText.setAttribute('transform', radarAttrs.radarBtcTextMatrix);
    radarBtcText.style.opacity = radarAttrs.radarBtcTextOpacity;
    btcLine.setAttribute('transform', radarAttrs.btcLineAttr);
    innerCircStroke.forEach((circ) => {
      circ.setAttribute('transform', radarAttrs.innerCircStrokeAttr);
    });
  },
});

const triRotate = document.querySelector('#ticktock-tri-rotate');
const fourX = document.querySelector('.four-x');

let tikTokAttrs = {
  triRotateAttr: 'matrix(1,0,0,1,0,0)',
  fourXTranslate: 'scale(1)',
};

let tikTokSvg = anime({
  targets: tikTokAttrs,
  keyframes: [
    {
      triRotateAttr:
        'matrix(0.80598,0.59194,-0.59194,0.80598,257.20612,-122.22156)',
    },
    {
      triRotateAttr: 'matrix(0.238,0.97127,-0.97127,0.238,561.80128,-53.5861)',
    },
    {
      triRotateAttr:
        'matrix(-0.39938,0.91678,-0.91678,-0.39938,744.55803,174.7131)',
    },
    {
      triRotateAttr:
        'matrix(-0.99968,0.02514,-0.02514,-0.99968,638.32678,654.47364)',
    },
    {
      triRotateAttr:
        'matrix(-0.8206,-0.5715,0.5715,-0.8206,384.27063,783.12482)',
    },
    {
      triRotateAttr:
        'matrix(-0.2355,-0.97187,0.97187,-0.2355,67.31232,715.44701)',
    },
    {
      triRotateAttr:
        'matrix(0.35134,-0.93625,0.93625,0.35134,-105.77249,509.83418)',
    },
    {
      triRotateAttr:
        'matrix(0.79598,-0.60532,0.60532,0.79598,-136.23575,258.28768)',
    },
    { triRotateAttr: 'matrix(1,0,0,1,0,0)', fourXTranslate: 'scale(1.3)' },
    { fourXTranslate: 'scale(1)' },
  ],
  elasticity: 200,
  easing: 'linear',
  autoplay: false,
  update: () => {
    triRotate.setAttribute('transform', tikTokAttrs.triRotateAttr);
    fourX.style.transform = tikTokAttrs.fourXTranslate;
  },
});

window.addEventListener('scroll', () => {
  const mediaQuery = window.matchMedia('(max-width: 720px)');
  if (mediaQuery.matches) {
    triangleSvg.seek(
      (((scrollPercent() - 9.8) * 25) / 100) * triangleSvg.duration,
    );
    goldSvg.seek((((scrollPercent() - 23) * 20) / 100) * triangleSvg.duration);
    radarSvg.seek((((scrollPercent() - 38) * 15) / 100) * radarSvg.duration);
    tikTokSvg.seek((((scrollPercent() - 55) * 16) / 100) * tikTokSvg.duration);
    squareSvg.seek(((scrollPercent() * 50) / 100) * squareSvg.duration);
    return;
  }

  triangleSvg.seek(
    (((scrollPercent() - 8) * 6.6) / 100) * triangleSvg.duration,
  );
  goldSvg.seek((((scrollPercent() - 30) * 6.6) / 100) * triangleSvg.duration);
  radarSvg.seek((((scrollPercent() - 52) * 9) / 100) * radarSvg.duration);
  tikTokSvg.seek((((scrollPercent() - 72) * 25) / 100) * tikTokSvg.duration);
  squareSvg.seek(((scrollPercent() * 35) / 100) * squareSvg.duration);
});

const scrollPercent = () => {
  const bodyST = document.body.scrollTop;
  const docST = document.documentElement.scrollTop;
  const docSH = document.documentElement.scrollHeight;
  const docCH = document.documentElement.clientHeight;

  return ((docST + bodyST) / (docSH - docCH)) * 100;
};
