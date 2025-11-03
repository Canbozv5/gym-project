// src/components/BMICalculator.jsx

import React, { useState, useEffect } from "react";

function BMICalculator() {
  // State yönetimi: input değerlerini ve işaretçi konumunu tutar
  const [height, setHeight] = useState(""); // cm
  const [weight, setWeight] = useState(""); // kg
  const [pointerLeft, setPointerLeft] = useState("50%"); // BMI işaretçisinin konumu, varsayılan ortada

  // 1. ALT COMPONENT: BMIHeader (Başlık ve Açıklama)
  const BMIHeader = () => (
    <>
      <h4 className="bmi-h4 my-5">BMI Calculator</h4>
      <p className="bmi-p font-weight-bold text-justify">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45BC, making it
        over 2000 years old.
      </p>
      <br />
      <p className="bmi-p font-weight-bold text-justify">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45BC, making it
        over 2000 years old.
      </p>
    </>
  );

  // 2. ALT COMPONENT: BMIInputForm (Giriş Alanları)
  // Input değerlerini güncelleyen event'leri (onChange) içerir.
  const BMIInputForm = () => (
    <>
      <input
        id="height"
        type="number"
        placeholder="Your Height"
        value={height}
        // Kullanıcı girişi olduğunda state'i güncelleyen event
        onChange={(e) => setHeight(e.target.value)}
      />
      <span className="px-2 font-weight-bolder">cm</span>

      <input
        id="weight"
        type="number"
        placeholder="Your Weight"
        value={weight}
        // Kullanıcı girişi olduğunda state'i güncelleyen event
        onChange={(e) => setWeight(e.target.value)}
      />
      <span className="px-2 font-weight-bolder">kg</span>
    </>
  );

  // 3. ALT COMPONENT: BMIGauge (Gösterge ve İşaretçi)
  // pointerLeft prop'u ile işaretçinin konumunu dinamik olarak stil ile ayarlar.
  const BMIGauge = ({ leftPosition }) => (
    <div id="bmi-id" className="col-lg-6 col-sm-12 mt-5">
      <h4 className="text-center">Your BMI</h4>
      <img
        src="Resimler/bmi-index.jpg"
        alt="BMI Index"
        className="img-fluid mx-auto d-block"
      />
      <div
        id="bmi-pointer"
        className="bmi-pointer"
        // BMI.js'deki style.left ataması, burada React style prop'u ile yapılıyor.
        style={{ left: leftPosition }}
      ></div>
    </div>
  );

  // BMI Hesaplama Mantığı (bmi.js'den uyarlandı)
  // height veya weight değiştiğinde bu fonksiyon tekrar çalışır.
  useEffect(() => {
    // Input değerlerini sayıya çevirme
    const h = parseFloat(height);
    const w = parseFloat(weight);

    // Geçersiz veya sıfır/negatif değer kontrolü
    if (!h || !w || h <= 0 || w <= 0) {
      setPointerLeft("50%"); // Geçersiz ise ortada göster
      return;
    }

    const bmi = w / (h / 100) ** 2; // BMI hesaplaması (m'ye çevirme dahil)
    let leftPercent = 0;

    // bmi.js'deki koşulların aynısı
    if (bmi < 18.5) {
      leftPercent = 19;
    } else if (bmi < 24.9) {
      leftPercent = 34;
    } else if (bmi < 29.9) {
      leftPercent = 50;
    } else if (bmi < 34.9) {
      leftPercent = 64;
    } else {
      leftPercent = 79;
    }

    setPointerLeft(`${leftPercent}%`); // Yeni konumu state'e ayarla
  }, [height, weight]); // Bağımlılık dizisi: Bu değerler değişince çalışır

  return (
    <section id="bmi-sec">
      <div className="bmi-container p-3">
        <div className="row">
          <div className="bmi-div col-lg-6 col-sm-12">
            {/* Alt Componentleri Kullanma */}
            <BMIHeader />
            <BMIInputForm />
          </div>
          <BMIGauge leftPosition={pointerLeft} />
        </div>
      </div>
    </section>
  );
}

export default BMICalculator;
