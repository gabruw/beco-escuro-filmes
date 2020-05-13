const STATUS = {
    OK: (status) => status === 200,
    BAD_REQUEST: (status) => status === 404,
    INTERNAL_SERVER_ERROR: (status) => status === 500,
};

export default STATUS;
