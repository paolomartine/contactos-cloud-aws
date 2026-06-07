 exports.handler = async (event) => {
    const id = event.pathParameters.id;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Contacto eliminado",
            id
        })
    };
};
