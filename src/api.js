import axios from 'axios';

/**
 * Class containing functions for interacting with the api.
 */
export class Api {
    // for calculating a loan
    #calculateLoanUrl = 'http://10.16.32.26:443/calculateLoan';

    /**
     * Function used to calculate the loan details
     * @param data - info from the fields used to calculate the loan
     * @returns Array of different loan options
     */
    calculateLoan = async ({data}) => {
        // get the response from hitting the url
        const response = await axios.post(this.#calculateLoanUrl, data, {headers: {"Content-Type": "application/json"}});
        // return the data if successful
        return response.data;
    }

}