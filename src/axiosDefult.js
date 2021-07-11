import axios from 'axios'

const instanc=axios.create({
    baseURL:"https://localhost:44371/api"
    
});

export default instanc;

//npm i axios redux react-redux redux-thunk react-router-dom react-router