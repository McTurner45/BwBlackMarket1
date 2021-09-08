import axios from 'axios';

/**
 * Class containing functions for interacting with the api.
 */
export class Api {

    // for calculating a loan
    #calculateLoanUrl = 'http://localhost:5000/calculateLoan';

    /**
     * Function used to calculate the loan details
     * @param data - info from the fields used to calculate the loan
     * @returns Array of different loan options
     */
    calculateLoan = async (formData) => {
        console.log(formData)
        // get the response from hitting the url
        const response = await axios.post(this.#calculateLoanUrl, {"formData": formData});
        // return the data if successful
        return response.data;
    }

}