import React, { useState } from "react";
import classes from "./LiveWhiteV.css";
import Auxiliary from "../hoc/Auxiliary";
import BigImage from "../images/BigImage.jpg";
import Small1 from "../images/Small1.jpg";
import Small2 from "../images/Small2.jpg";
import InsideSmall1 from "../images/InsideSmall1.jpg";
import InsideSmall2 from "../images/InsideSmall2.jpg";
import Logo1 from "../images/Logo1.png";
import BlueLogo from "../images/BlueLogo.png";
import Clock from "../images/Clock.png";
import Menu from '../images/Menu.png';

//<p className={classes.Title}>Povezane emisije</p> 94. linija koda

const liveWhiteV = (props) => {

const [showNav, setShowNav] = useState(false);
const show = () => setShowNav(true);
const close = () => setShowNav(false);

  return (
      <Auxiliary>
        <div className={classes.navBar}>
      <img src={Logo1} className={classes.Logo} />
      <div className={classes.SwitchMenu}>
  <label className={classes.switch} onClick={() => props.history.push("/livedarkv")}> <input type="checkbox" />  <div></div>
  </label>
  <img src={Menu} className={classes.Menu} onClick={show} onDoubleClick={close}/>
  </div>
</div>
      
      <div>
      <div className={classes.bigAndInsideImages}>
        <img src={BigImage} className={classes.bigImage} />
        
        <div className={classes.insideSmallDiv}>
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall1} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitleRed}>Дневник 1</h2>
        </div>
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall2} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Камионџије</h2>
        </div>
        
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall1} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Дневник 1</h2>
        </div>
        
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall2} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Камионџије</h2>
        </div>
        
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall1} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Дневник 1</h2>
        </div>
        
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall2} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Камионџије</h2>
        </div>
        
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall1} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Дневник 1</h2>
        </div>
        
        <div className={classes.insideSmall}>
        <img src={InsideSmall2} className={classes.insideSmallImage} />
          <h3 className={classes.Left}><img className={classes.Clock} src={Clock}/>Време:</h3><h3 className={classes.Right}>13:00</h3>
          <h2 className={classes.InsideTitle}>Камионџије</h2>
        </div>
        
        </div>
        </div>

      <div className={classes.ScrollAndNav}>
        
      <div className={classes.scroll}>
      <div className={classes.smallDiv}>    
      <img src={Small1} className={classes.Small} />
      <p className={classes.smallText}>Српска данас</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small2} className={classes.Small} />
      <p className={classes.smallText}>Дневник 2</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small1} className={classes.Small} />
      <p className={classes.smallText}>Српска данас</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small2} className={classes.Small} />
      <p className={classes.smallText}>Дневник 2</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small1} className={classes.Small} />
      <p className={classes.smallText}>Српска данас</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small2} className={classes.Small} />
      <p className={classes.smallText}>Дневник 2</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small1} className={classes.Small} />
      <p className={classes.smallText}>Српска данас</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small2} className={classes.Small} />
      <p className={classes.smallText}>Дневник 2</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small1} className={classes.Small} />
      <p className={classes.smallText}>Српска данас</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small2} className={classes.Small} />
      <p className={classes.smallText}>Дневник 2</p>
      </div>
      <br/>
      <div className={classes.smallDiv}>
      <img src={Small1} className={classes.Small} />
      <p className={classes.smallText}>Српска данас</p>
      </div>
      </div>
      <div className={classes.Nav1}>
      {(showNav) ? <NavBar/> : null}
      </div>
      </div>
      </div>
    
      
    </Auxiliary>
  );
};

const NavBar = () => (
  <Auxiliary>
<div className={classes.navListAll}>

  <div className={classes.navList}>
  <p className={classes.navEl}>Вијести</p>
  <p className={classes.navElTV}>ТВ</p>
  <div className={classes.Red}></div>
  <p className={classes.navEl}>Плус</p>
  <p className={classes.navEl}>Радио</p>
  <p className={classes.navEl}>Видео</p>
  <p className={classes.navEl}>Аудио</p>
  <p className={classes.navEl}>Спорт</p>
  <p className={classes.navEl}>МПРТРС</p>
  <p className={classes.navEl1}>РТВ Такса</p>
  <img src={BlueLogo} className={classes.LogoNav} />
  </div>

  <div className={classes.navList2}>
  <p className={classes.navEl2}>Новости</p>
  <p className={classes.navElU}>Уживо</p>
  <div className={classes.Blue}></div>
  <p className={classes.navEl2}>Програм</p>
  <p className={classes.navEl2}>Емисије</p>
  <p className={classes.navEl2}>Најаве</p>
  <p className={classes.navEl2}>Телетекст</p>
</div>

</div>
  
  </Auxiliary>
);

export default liveWhiteV;
