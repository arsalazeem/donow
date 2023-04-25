import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
const useSearchApiResponse = (props) => {
    const [errorMsg, setErrorMsg] = useState([]);
    const [apiresponse, setApiResponse] = useState([]);
    useEffect(()=>{
    alert("Use Effect is called");
      handleOnSubmit("bread");
    },[]);
    const handleOnSubmit = async (searchTerm = "pasta") => {
        try {
            alert(`I am called with ${searchTerm}`);
            console.log("************************************************************************************************************************************");
            console.log(searchTerm);
            let response = await yelp.get('/search', {
                params: {
                    limit: 20,
                    term: searchTerm,
                    location: 'san jose'

                }
            });
            if (response.status >= 200 && response.status < 300) {
                console.log(apiresponse);
                console.log(JSON.stringify(apiresponse));
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
