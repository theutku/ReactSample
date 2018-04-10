
class ApiBase {

    setResult(data) {
        if (data.cod !== 200) {
            return ({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: data.message
            });
        }

        return ({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: undefined
        });
    }

    setEmptyQuery() {
        return ({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: 'City and Country is required!'
        });
    }


}

export default ApiBase;