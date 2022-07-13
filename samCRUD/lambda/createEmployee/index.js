const { v4 } = require('uuid');
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient();
const validation = require('.../validation.js')    

exports.handler = async (event) => {
    try {
        const validateResult = await validation.employeeSchema.validateAsync(req.body);
        const employee = JSON.parse(event.body);

        const params = {
            TableName: 'employeeDB',
            Item: {
                id: v4(),
                employeeName: employee.employeeName,
                email: employee.email,
                password: employee.password,
            },
        }

        const data = await docClinet.put(params).promise();


        response = {
            'statusCode': 200,
            'body': "Employee is created"
        }
        return response

        

    } catch (error) {
        console.log(error)
        return error
    }
};