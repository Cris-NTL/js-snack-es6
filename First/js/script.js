// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// *************************************************************************************** // 

// Array of objects
const bicycles = [
    {
        name: 'Giant',
        weight: '10.6'
    },
    {
        name: 'Trek',
        weight: '7.4'
    },
    {
        name: 'Mountain',
        weight: '8.1'
    },
    {
        name: 'Ride',
        weight: '7.8'
    },
    {
        name: 'Hills',
        weight: '9.5'
    },
    {
        name: 'Carbox',
        weight: '6.2'
    }

];

// Loop (lightestBike)
const findLightestBike = (bikes) => {
    let lightestBike = bikes[0];

    bikes.forEach((bike) => {
        const currentWeight = parseFloat(bike.weight);
        const lightestWeight = parseFloat(lightestBike.weight);

        if (currentWeight < lightestWeight) {
            lightestBike = bike;
        }
    });

    return lightestBike;
}

// print result
const { name, weight } = findLightestBike(bicycles);
console.log(`The lightest byke is ${name} with a weight of ${weight} kg.`);



