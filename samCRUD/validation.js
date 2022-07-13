const Joi = require('joi');

const employeeSchema = Joi.object({
      
        employeeName: Joi.string()
                  .alphanum()
                  .min(5)
                  .max(30)
                  .required(),
                    
        email: Joi.string()
               .email()
               .lowercase()
               .required(),
               
        password: Joi.string()
                  .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
                  .required()
                 
    })