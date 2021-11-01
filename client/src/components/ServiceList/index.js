import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_Service } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';


funcdtion ServiceList(){
    const [state, dispatch] = useStoreContext();

    const { loading, data } = useQuery(QUERY_SERVICE);

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_SERVICE
            })
        }
    })

}