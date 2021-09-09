import axios from 'axios';
import {db} from "./firebase";

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
    // debug log reference in
    debugLogRef = db.collection('debugLog');
    // for loan applications
    #loanApplicationsRef = db.collection('loanApplications');



    // NODE SERVER FUNCTIONS

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


    // FIRESTORE DATABASE FUNCTIONS

    /**
     * Get array of clients from db
     * @param filters Array of objects of form {field: 'name', value: 'John'}
     * @return array of clients or [] if query has no match
     */
    getClients = async (filters) => {
        // stores docs from db query
        let docs;
        // doc reference for getting -- db.collection('clients')
        let docsRef = this.#clientsRef;
        // stores array of clients from the db
        let clients = [];

        // check if filters was supplied first
        filters.forEach(filter => {
            // loop through and chain
            docsRef = this.#chain(docsRef, filter);
        })

        try {
            // finish up query ref and get
            docs = await docsRef.get();

            // loop through docs from db and fill array
            docs.forEach(doc => {
                const data = doc.data();
                // parse each client and add to array
                clients.push({
                    fname: data.fname,
                    sname: data.sname,
                    omang: data.omang,
                    dob: data.dob,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                    maritalStatus: data.maritalStatus,
                    monthlyNetIncome: data.monthlyNetIncome,
                    employer: data.employer,
                    docId: data.docId,
                })
            });

        } catch (err) {
            // log into debug log
            await this.logError(err);
            // TODO edit and use error display like alert
            console.log(err);
        }

        // return the result
        return clients;
    }

    /**
     * Add a new client to database
     * @param client Client object with all fields
     */
    addClient = async (client) => {
        // get a unique doc started
        let newClientRef = await this.#clientsRef.doc();
        // set that doc's details
        await newClientRef.set({...client, docId: newClientRef.id});
    }

    /**
     * Add an application for a loan. Used as leads in dashboard
     * @param application Object of structure {client: 'client object', chosenLoanOption: 'loan option object', allLoanOptions: 'array of all loan option objects'}
     */
    addLoanApplication = async (application) => {
        // get a unique doc started
        let docRef = await this.#loanApplicationsRef.doc();
        // set that doc's details
        await docRef.set({
            // spill client info for easier querying later
            ...application.client,

            chosenLoanOption: application.chosenLoanOption,
            allLoanOptions: application.allLoanOptions,

            appliedOn: new Date(),

            // add the document reference
            docId: docRef.id});
    }

    /**
     * @param filters Array of filters to use
     */
    getLoanApplications =  async (filters) => {
        let docs;
        // doc reference for getting -- db.collection('loanApplications')
        let docsRef = this.#loanApplicationsRef;
        // stores array of clients from the db
        let loanApplications = [];

        // check if filters was supplied first
        filters.forEach(filter => {
            // loop through and chain
            if (filter.field !== 'appliedOn') docsRef = this.#chain(docsRef, filter);
            // TODO else handle appliedOn filter field ... special because its a date
        })

        try {
            // finish up query ref and get
            docs = await docsRef.orderBy('appliedOn', 'asc').get();

            // loop through docs from db and fill array
            docs.forEach(doc => {
                const data = doc.data();
                // parse each client and add to array
                loanApplications.push({
                    // spill everything
                    ...data,
                    // special handling for date
                    appliedOn: data.appliedOn.toDate()
                })
            });

        } catch (err) {
            // log into debug log
            await this.logError(err);
            // TODO edit and use error display like alert
            console.log(err);
        }

        // return the result
        return loanApplications;
    }

    /**
     * Function to chain a query
     * @param docsRef Document reference for building query
     * @param filter The filter to apply with ==
     * @return docsRef chained with where clause
     */
    #chain = (docsRef, filter ) => {
        return docsRef.where(filter.field, '==', filter.value);
    }


    /**
     * Function to log any errors to the database
     * @param error Error object
     */
    logError = async (error) => {
        try {
            await this.debugLogRef.add({
                date: new Date(),
                message: error.message,
                details: error.stack
            });
        } catch (err) {
            // irony of issues with the logger itself -- refresh the app
            // TODO implement UI for displaying errors
            console.log(err);
        }
    }


}