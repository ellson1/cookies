import styled from "styled-components";


const Styledcookielist = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
padding: 16px;
`;

export const Cookielist = () => {
  return (
    <Styledcookielist>
        <div class="cursor">
          Cursor
        </div>
        <img class="cursor" src="	https://game-icons.net/icons/ffffff/000000/1x1/delapouite/arrow-cursor.svg"/>
        <div  class="cursor"> Cost 1 </div>
        <div  class="cursor"> 0.1 Cookie / S </div>
        <div class="farm">
          Farm
        </div>
          <img class="farm" src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/farm-tractor.svg"/>
          <div  class="farm"> cost 10 </div>
          <div  class="farm"> 1 Cookies / S  </div>
        <div class="factory">
          Factory
        </div>
        <img class="factory" src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/factory.svg"/>
        <div  class="factory">Cost 100 </div>
        <div  class="factory">10 Cookies / S </div>
        <div class="bank">
          Bank
        </div>
        <img class="bank" src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/piggy-bank.svg"/>
        <div  class="bank">Cost 1 000 </div>
        <div  class="bank">100 Cookies / S </div>
        <div class="temple">
          Temple
        </div>
        <img class="temple" src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/greek-temple.svg"/>
        <div  class="temple">Cost 10 000 </div>
        <div  class="temple">1000 Cookies / S </div>
        <div class="wizard">
          Wizard
        </div>
        <img class="wizard" src="	https://game-icons.net/icons/ffffff/000000/1x1/delapouite/spell-book.svg"/>
        <div  class="wizard">Cost 100 000 </div>
        <div  class="wizard">10 000 Cookies / S </div>
        <div class="portal">
          Portal
        </div>
        <img class="portal" src="https://game-icons.net/icons/ffffff/000000/1x1/lorc/magic-portal.svg"/>
        <div  class="portal">Cost 1 000 000 </div>
        <div  class="wizard">100 000 Cookies / S </div>>
        <div class="time-mashine">
          Time Mashine
        </div>
        <img class="time-mashine" src="https://game-icons.net/icons/ffffff/000000/1x1/lorc/time-bomb.svg"/>
        <div  class="time-mashine">Cost 10 000 000 </div>
        <div  class="time-mashine">1 000 000 Cookies / S </div>
        <div class="antimatter">
          Antimatter
        </div>
        <img class="antimatter" src="	https://game-icons.net/icons/ffffff/000000/1x1/lorc/ink-swirl.svg"/>
        <div  class="time-mashine">Cost 100 000 000 </div>
        <div  class="time-mashine">10 000 000 Cookies / S </div>
    </Styledcookielist>
  );

}
