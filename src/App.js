import React from "react";
import IdCard from "./components/IdCard";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import BoxColors from "./components/BoxColor";

function App () {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <div>
        <Greetings
          lang="de"
          children="Ludwig"
        />
        <Greetings
          lang="fr"
          children="François"
        />
      </div>
      <div>
        <Random
          min={1}
          max={6}
        />
        <Random
          min={1}
          max={100}
        />
        </div>
        <div>
          <BoxColor
            r={255}
            g={0}
            b={0}
          />
          <BoxColor
            r={128}
            g={255}
            b={0}
          />
        </div>
        <div>
        <CreditCard/>
        </div>
    </div>

  );
};

export default App;
