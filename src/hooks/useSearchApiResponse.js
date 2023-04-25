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
                    limit: 1,
                    term: searchTerm,
                    location: 'san jose'

                }
            });
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
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
