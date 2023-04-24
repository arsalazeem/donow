import axios from "axios";


export default axios.create({
baseURL:"https://api.yelp.com/v3/businesses",
headers:{
    Authorization : 'Bearer sqrse_2hP5jlOV87hAJE0ZAZpPOVhRZBeohWXpK8ZzmW0wG4Mpr_qvJ_8FTv_zfCNTx3Vc_U0mc8C4_Xyo6MFl1-Ob4jmKVonC2EYPT58W94Nwtl67tpq13AjwQPX3Yx'
},

});