import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
const useSearchApiResponse = (props) => {
    const [errorMsg, setErrorMsg] = useState([]);
    const [apiresponse, setApiResponse] = useState([]);
    // useEffect(()=>{
    //   handleOnSubmit();
    // },[]);
    const handleOnSubmit = async (searchTerm) => {
        try {
            console.log("************************************************************************************************************************************");
            console.log(searchTerm);
            console.log("************************************************************************************************************************************");
       
            let response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    term: searchTerm,
                    location: 'san jose'

                }
            });
            if (response.status >= 200 && response.status < 300) {
                if (apiresponse.length<1){console.log(response);}
                else{
                    console.log(apiresponse.businesses);
                }
                
                setApiResponse(apiresponse => ({ ...apiresponse, ...response.data }));
            }
            else {
                alert("Something Went wrong");
                alert(e);

            }
        }
        catch (e) {
            alert(e);
        }
    }
    return [handleOnSubmit, apiresponse, errorMsg];
};


export default useSearchApiResponse;
