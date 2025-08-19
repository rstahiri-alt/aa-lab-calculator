// Molarity
document.getElementById('molarityForm').addEventListener('submit', function(e){
    e.preventDefault();
    const moles = parseFloat(document.getElementById('moles').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const result = moles / volume;
    document.getElementById('molarityResult').innerText = `Molarity: ${result.toFixed(3)} M`;
});

// Dilution
document.getElementById('dilutionForm').addEventListener('submit', function(e){
    e.preventDefault();
    const c1 = parseFloat(document.getElementById('c1').value);
    const v2 = parseFloat(document.getElementById('v2').value);
    const c2 = parseFloat(document.getElementById('c2').value);
    const v1 = (c2 * v2) / c1;
    document.getElementById('dilutionResult').innerText = `Required volume of stock solution: ${v1.toFixed(3)} L`;
});

// Unit Conversion
document.getElementById('conversionForm').addEventListener('submit', function(e){
    e.preventDefault();
    let val = parseFloat(document.getElementById('convValue').value);
    const from = document.getElementById('convFrom').value;
    const to = document.getElementById('convTo').value;

    const factors = {
        g: 1,
        mg: 0.001,
        kg: 1000,
        L: 1,
        mL: 0.001
    };

    if (factors[from] && factors[to]) {
        val = val * factors[from] / factors[to];
        document.getElementById('conversionResult').innerText = `Converted Value: ${val.toFixed(3)} ${to}`;
    } else {
        document.getElementById('conversionResult').innerText = 'Conversion not supported';
    }
});

// pH
document.getElementById('phForm').addEventListener('submit', function(e){
    e.preventDefault();
    const h = parseFloat(document.getElementById('hConc').value);
    const ph = -Math.log10(h);
    document.getElementById('phResult').innerText = `pH: ${ph.toFixed(2)}`;
});
// Percentage Solution
document.getElementById('percentageForm').addEventListener('submit', function(e){
    e.preventDefault();
    const mass = parseFloat(document.getElementById('soluteMass').value);
    const volume = parseFloat(document.getElementById('solutionVol').value);
    const percent = (mass / volume) * 100;
    document.getElementById('percentageResult').innerText = `Percentage: ${percent.toFixed(2)}% w/v`;
});

// Buffer Solution
document.getElementById('bufferForm').addEventListener('submit', function(e){
    e.preventDefault();
    const pKa = parseFloat(document.getElementById('pKa').value);
    const Aminus = parseFloat(document.getElementById('Aminus').value);
    const HA = parseFloat(document.getElementById('HA').value);
    const ph = pKa + Math.log10(Aminus / HA);
    document.getElementById('bufferResult').innerText = `pH: ${ph.toFixed(2)}`;
});
