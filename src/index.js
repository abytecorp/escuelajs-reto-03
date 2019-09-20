var API = 'https://rickandmortyapi.com/api/character/';
const axios = require('axios');

const fetchData = async (url) => {
  return new Promise ( function (resolve, reject) {
    axios.get(url).then(response =>{
        resolve(response.data)
    }).catch(error => {
        reject(error.response.data)
    });
})
};

const initCall = async () => {
  try {
    console.clear()
    console.log('Primer Llamado...')
    let data1 = await fetchData(API)
    console.clear()
    console.log('Segundo Llamado...')
    let data2 = await fetchData(`${API}${data1.results[0].id}`)
    console.clear()
    console.log('Tercer Llamado...')
    let data3 = await fetchData(data2.origin.url)
    console.clear()
    console.log(`Personajes: ${data1.info.count}`)
    console.log(`Primer Personaje: ${data1.results[0].name}`)
    console.log(`Dimensión: ${data3.dimension}`)
  } catch (error) {
    console.error(`Sorry we have an error;`, error)
  }
}

initCall();
