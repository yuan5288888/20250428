let capture;
let overlayGraphics;

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#4a4e69'); // 設定背景顏色
  capture = createCapture(VIDEO); // 擷取攝影機影像
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 設定影像大小為視窗的 80%
  capture.hide(); // 隱藏原始的 HTML 視訊元素

  // 建立與視訊畫面一樣大小的 Graphics
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text('Overlay Text', overlayGraphics.width / 2, overlayGraphics.height / 2); // 在中間顯示文字
}

function draw() {
  background('#4a4e69'); // 確保背景顏色一致

  // 顯示視訊畫面
  image(capture, (width - capture.width) / 2, (height - capture.height) / 2);

  // 顯示 overlayGraphics 在視訊畫面上方
  image(overlayGraphics, (width - capture.width) / 2, (height - capture.height) / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布大小
  capture.size(windowWidth * 0.8, windowHeight * 0.8); // 調整影像大小

  // 重新調整 overlayGraphics 的大小
  overlayGraphics = createGraphics(capture.width, capture.height);
  overlayGraphics.fill(255, 0, 0, 150); // 半透明紅色
  overlayGraphics.textSize(32);
  overlayGraphics.textAlign(CENTER, CENTER);
  overlayGraphics.text('嗨 這是我', overlayGraphics.width / 2, overlayGraphics.height / 2); // 在中間顯示文字
}
