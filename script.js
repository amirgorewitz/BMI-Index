function calculate() {
    const gender = document.getElementById('gender').value;
    const ageGroup = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const neck = parseFloat(document.getElementById('neck').value);

    // Calculate Body Fat Percentage and BMI (using the U.S. Navy method)
    let bodyFatPercentage;
    if (gender === 'male') {
        bodyFatPercentage = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
    } else {
        bodyFatPercentage = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);

    // Determine the color based on age and BMI
    let color;
    if (ageGroup === 'below-65' && bmi <= 25) {
        color = 'lightgreen';
    } else if (ageGroup === 'below-65' && bmi > 25 && bmi <= 30) {
        color = 'orange';
    } else if (ageGroup === 'below-65' && bmi > 30) {
        color = 'red';
    } else if (ageGroup === 'above-65' && bmi <= 30) {
        color = 'lightgreen';
    } else if (ageGroup === 'above-65' && bmi > 30 && bmi <= 35) {
        color = 'orange';
    } else {
        color = 'red';
    }

    // Display the results with the appropriate color
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p style="color: ${color};">Body Fat Percentage: ${bodyFatPercentage.toFixed(2)}%</p>
        <p style="color: ${color};">BMI: ${bmi.toFixed(2)}</p>
    `;
}
