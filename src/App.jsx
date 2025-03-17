import { useState } fro
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  function calculateBMI() {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || weightValue <= 0 || heightValue <= 0) {
      setBmi(null);
      setCategory('');
      return;
    }

    const heightM = heightValue / 100;
    const calculatedBmi = (weightValue / (heightM * heightM)).toFixed(2);
    setBmi(calculatedBmi);

    let bmiCategory = '';
    if (calculatedBmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }

    setCategory(bmiCategory);
  }

  return (
    <>
      <h1>BMI Calculator</h1>
      <p>Calculate your Body Mass Index quickly and easily</p>
      <div className="bmi-container">
        <label htmlFor="weight">Enter Weight (kg):</label>
        <input
          type="number"
          id="weight"
          placeholder="Weight in kg"
          min="1"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <label htmlFor="height">Enter Height (cm):</label>
        <input
          type="number"
          id="height"
          placeholder="Height in cm"
          min="1"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <button onClick={calculateBMI}>Calculate BMI</button>

        {bmi && (
          <div className="result">
            Your BMI is: <span>{bmi}</span>
          </div>
        )}
        {category && (
          <div className="bmi-category">
            Category: <span>{category}</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
