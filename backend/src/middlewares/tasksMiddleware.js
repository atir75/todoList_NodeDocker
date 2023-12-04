const validateTitle = (request, response, next) =>{
    const {body} = request;

    if(body.titulo == undefined){
        return response.status(400).json({message: 'The field "titulo" is required'});
    }
    if(body.titulo == ''){
        return response.status(400).json({message: 'The title cannot be empty'});
    }

    next();
};

const validateFieldStatus = (request, response, next) =>{
    const {body} = request;

    if(body.status == undefined){
        return response.status(400).json({message: 'The field "status" is required'});
    }
    if(body.status == ''){
        return response.status(400).json({message: 'The status cannot be empty'});
    }

    next();
};

module.exports = {
    validateTitle,
    validateFieldStatus
}