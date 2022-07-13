const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient()

exports.handler = async (event) => {
    try {
        const params = {
            TableName: 'employeeDB',
            Key: {
                id: event.pathParameters.id
            }
        }

        const data = await docClinet.delete(params).promise()
        response = {
            'statusCode': 200,
            'body': 'Employee Deleted'
        }
        return response

    } catch (error) {
        console.log(error)
        return error
    }
}