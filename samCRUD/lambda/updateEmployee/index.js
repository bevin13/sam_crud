const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

exports.handler = async (event) => {

    try {
        const item = JSON.parse(event.body)

        const params = {
            TableName: 'employeeDB',
            Key: {
                id: event.pathParameters.id

            },
            UpdateExpression: 'set employeeName = :u, password = :p',
            ExpressionAttributeValues: {
                ":u": item.employeeName,
                ":p": item.password
            },
            ReturnValues: 'UPDATED_NEW'
        };

        const data = await docClient.update(params).promise();

        response = {
            'statusCode': 200,
            'body': "Employee is updated"
        }
        return response

    } catch (error) {
        console.log(error);
        return error
    }
}