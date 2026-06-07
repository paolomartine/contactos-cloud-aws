 
exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Lista de contactos",
            contactos: []
        })
    };
};