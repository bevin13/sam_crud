const dynamodb = require('aws-sdk/clients/dynamodb');
const docClinet = new dynamodb.DocumentClient()

exports.handler = async (event, context) => {
    try {
        if (event.httpMethod === "GET") {
            const data = await docClinet.scan({
                TableName: 'employeeDB',
            }).promise()

            const response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: data
                })
            }
            return response
        }
    } catch (error) {
        console.log(error)
        return error
    }
}