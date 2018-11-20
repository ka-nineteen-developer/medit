export const getMeditList = () => {
    return new Promise((resolve, reject) => {
        fetch('https://github.com/ka-nineteen-developer/wallpapper-data/raw/master/more_apps.json', {})
        .then((response) => response.json())
        .then((responseJson) => {
            if(responseJson !== null){
                resolve(responseJson);
            } else {
                data = {
                    Status: 'Error'
                }
                resolve(data)
            }
        }).catch(err => {
            data = {
                Status: 'Error'
            }
            resolve(data);
        })
    })
}