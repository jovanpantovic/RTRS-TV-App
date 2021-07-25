import React from "react";
import classes from "./Program.css";
import Auxiliary from "../hoc/Auxiliary";
import Logo1 from "../images/Logo1.png";
import Menu from "../images/Menu.png";
import Serbia from "../images/Serbia.png";
import Program1 from "../images/Program1.png";
import Program2 from "../images/Program2.png";
import Program3 from "../images/Program3.png";
import Program4 from "../images/Program4.png";
import GrayClock from "../images/GrayClock.png";

const whiteProgram = (props) => {
  return (
    <Auxiliary>
      <div className={classes.navBar}>
        <img src={Logo1} className={classes.Logo} />
        <div className={classes.SwitchMenu}>
          <label
            className={classes.switch}
            onClick={() => props.history.push("/programdark")}
          >
            {" "}
            <input type="checkbox" /> <div></div>
          </label>
          <img src={Menu} className={classes.Menu} />
        </div>
      </div><br/><br/><br/>
    <div className={classes.NavBorderBottom}></div>

    <div className={classes.navList}>
        <p className={classes.navElRed}>Четвртак</p>
        <div className={classes.Red}></div>
        <p className={classes.navEl}>Петак</p>
        <p className={classes.navEl}>Субота</p>
        <p className={classes.navEl}>Недеља</p>
        <p className={classes.navEl}>Понедељак</p>
        <p className={classes.navEl}>Уторак</p>
        <p className={classes.navEl}>Среда</p>
        <p className={classes.navEl}>Четвртак</p>
    </div>

    <div className={classes.AllSmallDiv}>
        <div className={classes.HeaderSmall}>
        <p className={classes.Title}>15. Јули, четвртак</p>
        <img src={Serbia} className={classes.Serbia}/>
        </div>
<br/><br/><br/>
        <div className={classes.smallDivS}>    
      <img src={Program1} className={classes.Small} />
      <p className={classes.smallText}>Јутарњи програм</p><br/><br/><br/><br/>
      <img src={GrayClock} className={classes.Clock}/>
      <p className={classes.Time}>06:00</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program2} className={classes.Small} />
      <p className={classes.smallText}>Вијести</p><br/><br/><br/><br/>
      <img src={GrayClock} className={classes.Clock}/>
      <p className={classes.Time}>07:00</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program3} className={classes.Small} />
      <p className={classes.smallText}>Стани да ти кажем</p><br/><br/><br/><br/>
      <img src={GrayClock} className={classes.Clock}/>
      <p className={classes.Time}>07:30</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program4} className={classes.Small} />
      <p className={classes.smallText}>Три мушскарца и тетка</p><br/><br/><br/><br/>
      <img src={GrayClock} className={classes.Clock}/>
      <p className={classes.Time}>09:00</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program1} className={classes.Small} />
      <p className={classes.smallText}>Јутарњи програм</p><br/><br/><br/><br/>
      <img src={GrayClock} className={classes.Clock}/>
      <p className={classes.Time}>06:00</p>
      </div>
    </div>

    <div className={classes.Big}>
      <img src={Program1} className={classes.BigImage}/>
      <div className={classes.Desc}><br/>
      <p className={classes.TextDesc}>
        Само провјерене и тачне информације, сваког радног дана од 07.05 дo 10.00! Јутарњи програм je meђу најгледанијим eмисијама у Српској, a уjедно i једна
        од најстаријих у програму Радио-Телевизије Републике Српске! Привредници, пољопривредници, економисти, историчари, љекари, полицајци, политичари...
        наши су саговорници! Репортери иѕ Требиња, Источног Сарајева, Бијељиње, Брчког, Приједора и других градова саопштавају најновије вијести и информишу 
        o најинтересантнијим i најѕначајнији...
      </p>
      </div>
    </div>
    </Auxiliary>
  );
};
//<Helmet bodyAttributes={{style: 'background-image : url("https://www.psdgraphics.com/wp-content/uploads/2020/12/white-background.jpg")'}}/>
export default whiteProgram;
