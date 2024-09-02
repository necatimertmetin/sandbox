import React, { useState } from "react";
import "./Toast.css";
import "./paradise-mud-toast-dark.css";
import "./paradise-mud-toast-light.css";
import successIcon from "./tick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
const Toast = () => {
  /*
  todo animasyonlu olabilir üzerine gelindiğinde sayfanın olduğu tarafına (sağ veya sol) fitlensin ve kapatma seçeneği /yazısı çıksın ttıklandığında kapansın
  todo uzerine tiklandiginda kapansin.
  todo arsivi olsun sessionstorage a kaydetsin. bir notifications alani olsun. bu alan acildiginda session boyunca gozuken notificationlara erisilebilsin
  todo birden fazlla toast olduğu durumlarda üst üste geldiğinde en tepede hepsini kapatabilme seçeneği

  */
  return (
    <div className="paradise-mud-toast-container">
      <div className="paradise-mud-toast dark">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-warning dark"
          icon={faCircleExclamation}
        />
        <div className="paradise-mud-toast-content">warning</div>
        <button className="paradise-mud-toast-close dark">&times;</button>
      </div>
      <div className="paradise-mud-toast dark">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-error dark"
          icon={faCircleXmark}
        />
        <div className="paradise-mud-toast-content">error</div>
        <button className="paradise-mud-toast-close dark">&times;</button>
      </div>
      <div className="paradise-mud-toast dark">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-success dark"
          icon={faCircleCheck}
        />
        <div className="paradise-mud-toast-content">success</div>
        <button className="paradise-mud-toast-close dark">&times;</button>
      </div>
      <div className="paradise-mud-toast dark">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-info dark"
          icon={faCircleInfo}
        />
        <div className="paradise-mud-toast-content">info</div>
        <button className="paradise-mud-toast-close dark">&times;</button>
      </div>
      <div className="paradise-mud-toast light">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-warning light"
          icon={faCircleExclamation}
        />
        <div className="paradise-mud-toast-content">warning</div>
        <button className="paradise-mud-toast-close light">&times;</button>
      </div>
      <div className="paradise-mud-toast light">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-error light"
          icon={faCircleXmark}
        />
        <div className="paradise-mud-toast-content">siparis verdigin pizzanin yaninda sufle soylememissin bu gece koltukta yatacaksin</div>
        <button className="paradise-mud-toast-close light">&times;</button>
      </div>
      <div className="paradise-mud-toast light">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-success light"
          icon={faCircleCheck}
        />
        <div className="paradise-mud-toast-content">Elif Basariyla manita yapildi! Tebrikler </div>
        <button className="paradise-mud-toast-close light">&times;</button>
      </div>
      <div className="paradise-mud-toast light">
        <FontAwesomeIcon
          className="paradise-mud-toast-icon paradise-mud-toast-icon-info light"
          icon={faCircleInfo}
        />
        <div className="paradise-mud-toast-content">Elif'in Regli yaklasiyor. Onumuzdeki 2 hafta icinde yapacagin hareketlere dikkat et</div>
        <button className="paradise-mud-toast-close light">&times;</button>
      </div>
    </div>
  );
};

export default Toast;
