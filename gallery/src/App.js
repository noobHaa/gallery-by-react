import React, { Component } from "react";
import "./App.scss";

//导入图片信息文件
import imageDatas from "./data/imageData.json";

//自执行函数
function getImageUrl(imagesArry) {
  for (var i = 0; i < imagesArry.length; i++) {
    var singleImage = imagesArry[i];
    singleImage.imageUrl = './images' + singleImage.fileName;

    imagesArry[i] = singleImage;
  }
  return imagesArry;
}
var urls = getImageUrl(imageDatas);
class App extends Component {
  render() {
    return (
      //三部分  背景舞台  图片区  控制区
      <section className="stage">
        <section className="img-sec" />
        <nav className="controller-nav" />
      </section>
    );
  }
}

export default App;
