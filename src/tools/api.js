import axios from 'axios';
import {db, addToArray} from "./firebase";

/**
 * Class containing functions for interacting with the api.
 */
export class Api {

    // url of node server
    #nodeUrl = "http://localhost:5000";
    // for calculating a loan
    #calculateLoanUrl = `${this.#nodeUrl}/calculateLoan`;
    // for sending an SMS
    #sendSMSUrl = `${this.#nodeUrl}/sendSMS`;
    // clients collection reference
    #clientsRef = db.collection('clients');

    /**
     * Function used to calculate the loan details
     * @param formData - info from the fields used to calculate the loan
     * @returns Array of different loan options
     */
    calculateLoan = async (formData) => {
        // get response from node server endpoint
        const response = await axios.post(this.#calculateLoanUrl, {"formData": formData});
        // return the data if successful
        return response.data;
    }

    /**
     * Function used to send an SMS to a phone number
     * @param params object of the form {recipient: '26771234567', message: 'Hello World'}
     * @return message Index or error with description
     */
    sendSMS = async (params) => {
        // get response from node server endpoint
        const response = await axios.post(this.#sendSMSUrl, {"params": params});
        // return data is successful
        return response.data;
    }

    /**
     * Get array of clients from db
     * @param filter Array of objects of form {field: 'name', value: 'John'}
     * @return array of clients or [] if query has no match
     */
    getClients = (filter) => {

    }

}