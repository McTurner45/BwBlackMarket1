import axios from 'axios';

/**
 * Class containing functions for interacting with the api.
 */
export class Api {
    // base firebase functions url
    #baseFbFuncUrl = 'http://localhost:5001/duriga-loan-calculator/us-central1';
    // for calculating a loan
    #calculateLoanUrl = `${this.#baseFbFuncUrl}/calculateLoan`;

    /**
     * Function used to calculate the loan details
     * @param data - info from the fields used to calculate the loan
     * @returns Array of different loan options
     */
    calculateLoan = async (formData) => {
        console.log(formData)
        // get the response from hitting the url
        const response = await axios.post(this.#calculateLoanUrl, {"data": formData});
        // return the data if successful
        return response.data.result.section;
    }

}