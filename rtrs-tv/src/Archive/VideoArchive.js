import React from 'react';
import classes from './VideoArchive.css';
import Auxiliary from '../hoc/Auxiliary';
import Logo1 from '../images/Logo1.png';
import Program1 from '../images/Program1.png';

const videoArchive = () => {
    return (
        <Auxiliary>
        <div className={classes.navBar}>
      <img src={Logo1} className={classes.Logo} />
<div className={classes.navList}>
  <p className={classes.navEl}>Вијести</p>
  <p className={classes.navElTV}>TВ</p>
  <p className={classes.navEl}>Плус</p>
  <p className={classes.navEl}>Радио</p>
  <p className={classes.navEl}>Видео</p>
  <p className={classes.navEl}>Аудио</p>
  <p className={classes.navEl}>Спорт</p>
  <p className={classes.navEl}>МПРTРС</p>
  <p className={classes.navEl}>РTВ Такса</p>
  
  <label className={classes.switch}> <input type="checkbox" />  <div></div>
  </label>
</div>
      </div>
      <div className={classes.borderRed}></div>
      
      <div className={classes.navBar2}>
<div className={classes.navList}>
  <p className={classes.navEl2}>Новости</p>
  <p className={classes.navEl2}>Уживо</p>
  <p className={classes.navEl2}>Програм</p>
  <p className={classes.navElU}>Емисије</p>
  <p className={classes.navEl2}>Најаве</p>
  <p className={classes.navEl2}>Телетекст</p>
</div>
      </div>
      <div className={classes.borderBlue}></div>

      <div className={classes.Letters}>
          <div className={classes.navList}>
              <div className={classes.ButtonLetterA}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>А</p>
            </div>
            
            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Б</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>В</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Г</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Д</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ђ</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Е</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ж</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>З</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>И</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ј</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>К</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Л</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Љ</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>М</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Н</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Њ</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>О</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>П</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Р</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>С</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Т</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ћ</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>У</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ф</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Х</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ц</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ч</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Џ</p>
            </div>

            <div className={classes.ButtonLetter}>
          <div className={classes.circle}></div>
            <p className={classes.letter}>Ш</p>
            </div>
          </div>
      </div>

<div className={classes.Left}>
<p className={classes.titleA}>А</p>
<div className={classes.allA}>
    <div className={classes.current1}>
        <img src={Program1} className={classes.programImage}/>
        <p className={classes.programTitle}>Aктуелни разговор</p>
        <div className={classes.buttonDays}>
<button className={classes.DaySelect}>Пон</button>
<button className={classes.Day}>Уто</button>
<button className={classes.Day}>Сре</button>
<button className={classes.Day}>Чет</button>
<button className={classes.Day}>Пет</button>
<button className={classes.Day}>Суб</button>
<button className={classes.Day}>Нед</button>
</div>
    </div>

    <div className={classes.current2}>
        <img src={Program1} className={classes.programImage}/>
        <p className={classes.programTitle}>Aктуелнo</p>
        <div className={classes.buttonDays2}>
<button className={classes.DaySelect}>Пон</button>
<button className={classes.DaySelect}>Уто</button>
<button className={classes.DaySelect}>Сре</button>
<button className={classes.DaySelect}>Чет</button>
<button className={classes.DaySelect}>Пет</button>
<button className={classes.Day}>Суб</button>
<button className={classes.Day}>Нед</button>
</div>
    </div>
</div>
<br/>
<div className={classes.all2}>
<p className={classes.titleA}>Б</p>
<div className={classes.allБ}>
    <div className={classes.current12}>
        <img src={Program1} className={classes.programImage}/>
        <p className={classes.programTitle2}>Aктуелни разговор</p>
    </div>

    <div className={classes.current22}>
        <img src={Program1} className={classes.programImage}/>
        <p className={classes.programTitle2}>Aктуелнo</p>
    </div>
</div>
</div>
</div>


<div className={classes.RightTitle}>
<p>Актуелни разговор</p>
</div><br/>
<div className={classes.Right}>
<div className={classes.smallImageDiv}>
  <img src={Program1} className={classes.smallImage}/>
  <p className={classes.Guest}>Зоран Тегелтија, министар</p>
  <p className={classes.guestDesc}>финансија  Републике Српске</p>
  </div>

  <div className={classes.smallImageDiv}>
  <img src={Program1} className={classes.smallImage}/>
  <p className={classes.Guest2}>Ненад Стевандић,</p>
  <p className={classes.guestDesc2}>потпредсједник Народне скупштине</p>
  </div>

  <div className={classes.smallImageDiv}>
  <img src={Program1} className={classes.smallImage}/>
  <p className={classes.Guest}>Зоран Тегелтија, министар</p>
  <p className={classes.guestDesc}>финансија  Републике Српске</p>
  </div>
</div>

<div className={classes.titleRightBottom}>
    <h4 className={classes.titleRB}>ВИДЕО АРХИВА</h4>
  </div>
</Auxiliary>
    );
};

export default videoArchive;
