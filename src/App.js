import { useState } from 'react';
import Section from './componets/Section/Section';
import Buttons from './componets/Buttons/Buttons';
import Statistics from './componets/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad , setBad] = useState (0)


  const handleSum = () => {
    return good + neutral + bad;
  };

  const handleOnClick = (evt) => {

    switch(evt.target.value) {
      case "good":
        setGood(state => state + 1);
        break;
      
      case "neutral":
        setNeutral(state => state + 1);
        break;
      
      case "bad":
        setBad(state => state + 1);
        break;
      
      default: return;
}

  };

    //   this.setState(prevState => ({
    //   [name]: prevState[name] + 1,
    // }));

  
 const  handlePositivePercentage = () => {
   const total = handleSum ();
   console.log(total)
    return (good * 100) / total;
  };
   
  
const options = ["good", "neutral", "bad"];

    return (
      <div>
        <Section title="Please leave feedback">
          <Buttons names={options} onClick={handleOnClick} />
        </Section>
        <Section title="Statistics">
          {handleSum() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={handleSum()}
              positivePercentage={handlePositivePercentage()}
            />
          ) : (
            'No feedback given'
          )}
        </Section>
      </div>
    );
  }



