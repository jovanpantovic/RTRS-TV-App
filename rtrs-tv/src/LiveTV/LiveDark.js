import React from "react";
import classes from "./LiveDark.css";
import Auxiliary from "../hoc/Auxiliary";
import BigImage from "../images/BigImage.jpg";
import Small1 from "../images/Small1.jpg";
import Small2 from "../images/Small2.jpg";
import InsideSmall1 from "../images/InsideSmall1.jpg";
import InsideSmall2 from "../images/InsideSmall2.jpg";
import Logo2 from "../images/Logo2.png";
import Clock from "../images/Clock.png";
import {Helmet} from "react-helmet";

const liveDark = (props) => {
  return (
    <Auxiliary>
      <Helmet bodyAttributes={{style: 'background-image : url("https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80")'}}/>
      <div className={classes.Page}>
        <div className={classes.navBar}>
          <img src={Logo2} className={classes.Logo} />
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

            <label
              className={classes.switch}
              onClick={() => props.history.push("/")}
            >
              <input type="checkbox" /> <div></div>
            </label>
          </div>
        </div>
        <div className={classes.borderRed}></div>

        <div className={classes.navBar2}>
          <div className={classes.navList}>
            <p className={classes.navEl2}>Новости</p>
            <p className={classes.navElU}>Уживо</p>
            <p className={classes.navEl2}>Програм</p>
            <p className={classes.navEl2}>Емисије</p>
            <p className={classes.navEl2}>Најаве</p>
            <p className={classes.navEl2}>Телетекст</p>
          </div>
        </div>
        <div className={classes.borderBlue}></div>
<br/>
        <div>
          <div className={classes.bigAndInsideImages}>
            <img src={BigImage} className={classes.bigImage} />

            <div className={classes.insideSmallDiv}>
              <div className={classes.insideSmall}>
                <img src={InsideSmall1} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitleRed}>Дневник 1</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall2} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Камионџије</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall1} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Дневник 1</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall2} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Камионџије</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall1} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Дневник 1</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall2} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Камионџије</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall1} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Дневник 1</h2>
              </div>

              <div className={classes.insideSmall}>
                <img src={InsideSmall2} className={classes.insideSmallImage} />
                <h3 className={classes.Left}>
                  <img className={classes.Clock} src={Clock} />
                  Време:
                </h3>
                <h3 className={classes.Right}>13:00</h3>
                <h2 className={classes.InsideTitle}>Камионџије</h2>
              </div>
            </div>
          </div>

          <p className={classes.Title}>Повезане емисије</p>
          <div className={classes.scroll}>
            <div className={classes.smallDiv}>
              <img src={Small1} className={classes.Small} />
              <p className={classes.smallText}>Српска данас</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small2} className={classes.Small} />
              <p className={classes.smallText}>Дневник 2</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small1} className={classes.Small} />
              <p className={classes.smallText}>Српска данас</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small2} className={classes.Small} />
              <p className={classes.smallText}>Дневник 2</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small1} className={classes.Small} />
              <p className={classes.smallText}>Српска данас</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small2} className={classes.Small} />
              <p className={classes.smallText}>Дневник 2</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small1} className={classes.Small} />
              <p className={classes.smallText}>Српска данас</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small2} className={classes.Small} />
              <p className={classes.smallText}>Дневник 2</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small1} className={classes.Small} />
              <p className={classes.smallText}>Српска данас</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small2} className={classes.Small} />
              <p className={classes.smallText}>Дневник 2</p>
            </div>
            <br />
            <div className={classes.smallDiv}>
              <img src={Small1} className={classes.Small} />
              <p className={classes.smallText}>Српска данас</p>
            </div>
          </div>
        </div>
      </div>
    </Auxiliary>
  );
};

export default liveDark;
