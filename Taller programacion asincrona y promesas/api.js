const apiKey = '7e57366420f6b8bba69a07be6845ca09'; // Reemplaza con tu propia API key

    async function getWeather() {
        const city = document.getElementById('city').value;
        if (!city) {
            alert('Por favor, ingresa una ciudad.');
            return;
        }

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            //Unidades: En la URL de la API, units=metric se usa para obtener la temperatura en grados Celsius. Puedes cambiarlo a imperial si prefieres Fahrenheit.
            const data = await response.json();
            if (data.cod === '404') {
                document.getElementById('result').innerText = 'Ciudad no encontrada.';
            } else {
                const temperature = data.main.temp;
                document.getElementById('result').innerText = `La temperatura en ${city} es ${temperature}°C.`;
            }
        } catch (error) {
                console.error('Error:', error);
                document.getElementById('result').innerText = 'Hubo un problema al obtener la información.';
            }
    }