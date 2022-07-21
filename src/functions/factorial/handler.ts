import { sucessfulResponse } from "@libs/api-gateway";
import { failureResponse } from "@libs/api-gateway";

const factorial = async (event) =>{
    const querystring = event.queryStringParameters;
    if (querystring === null){
        return {
            statusCode: 400,
            body: 'The url should follow the format of an "?input=<any number>"',
        }
    }
    const input = querystring.input ;
    var n = +input;
    var fact = 1;

    if (isNaN(input)){
        return failureResponse({
            errorCode : 2 ,
            errorMessage : 'Invalid Input'
        })
    }

    if (input >= 1 && input <=100){
        while(n>0){
            fact *= n;
            n -= 1;
        }
        return sucessfulResponse ({
            input : input,
            factorial : fact,
        });
    } else {
        return failureResponse({
            errorCode  : 1 ,
            errorMessage : 'Number is out of acceptable range, Acceptable range [1 to 100]'
        })
    }     

};

export const main=factorial;
