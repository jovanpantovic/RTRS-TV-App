import React from "react";
import classes from "./DarkProgram.css";
import Auxiliary from "../hoc/Auxiliary";
import Logo2 from "../images/Logo2.png";
import BlackMenu from "../images/BlackMenu.png";
import Serbia from "../images/Serbia.png";
import Program1 from "../images/Program1.png";
import Program2 from "../images/Program2.png";
import Program3 from "../images/Program3.png";
import Program4 from "../images/Program4.png";
import BlackClock1 from "../images/BlackClock1.png";
import {Helmet} from "react-helmet";

const darkProgram = (props) => {
  return (
    <Auxiliary>
        <Helmet bodyAttributes={{style: 'background-image : url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")'}}/>
      <div className={classes.navBar}>
        <img src={Logo2} className={classes.Logo} />
        <div className={classes.SwitchMenu}>
          <label
            className={classes.switch}
            onClick={() => props.history.push("/programwhite")}
          >
            {" "}
            <input type="checkbox" /> <div></div>
          </label>
          <img src={BlackMenu} className={classes.Menu} />
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
      <img src={BlackClock1} className={classes.Clock}/>
      <p className={classes.Time}>06:00</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program2} className={classes.Small} />
      <p className={classes.smallText}>Вијести</p><br/><br/><br/><br/>
      <img src={BlackClock1} className={classes.Clock}/>
      <p className={classes.Time}>07:00</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program3} className={classes.Small} />
      <p className={classes.smallText}>Стани да ти кажем</p><br/><br/><br/><br/>
      <img src={BlackClock1} className={classes.Clock}/>
      <p className={classes.Time}>07:30</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program4} className={classes.Small} />
      <p className={classes.smallText}>Три мушкарца и тетка</p><br/><br/><br/><br/>
      <img src={BlackClock1} className={classes.Clock}/>
      <p className={classes.Time}>09:00</p>
      </div>
      <div className={classes.smallDiv}>    
      <img src={Program1} className={classes.Small} />
      <p className={classes.smallText}>Јутарњи програм</p><br/><br/><br/><br/>
      <img src={BlackClock1} className={classes.Clock}/>
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

export default darkProgram;
