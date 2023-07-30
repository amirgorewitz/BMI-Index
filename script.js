function calculate() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const waist = parseFloat(document.getElementById('waist').value);
    const neck = parseFloat(document.getElementById('neck').value);

    // Calculate BMI based on gender
    let bmi;
    if (gender === 'male') {
        bmi = 10.1 - 0.239 * height + 0.8 * waist - 0.5 * neck;
    } else {
        bmi = 19.2 - 0.239 * height + 0.8 * waist - 0.5 * neck;
    }

    // Determine the color based on age and BMI
    let color;
    if (age <= 64 && bmi <= 25) {
        color = 'lightgreen';
    } else if (age <= 64 && bmi > 25 && bmi <= 30) {
        color = 'orange';
    } else if (age <= 64 && bmi > 30) {
        color = 'red';
    } else if (age >= 65 && bmi <= 30) {
        color = 'lightgreen';
    } else if (age >= 65 && bmi > 30 && bmi <= 35) {
        color = 'orange';
    } else {
        color = 'red';
    }

    // Display the results with the appropriate color
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p style="color: ${color};">BMI: ${bmi.toFixed(2)}</p>
    `;
}
