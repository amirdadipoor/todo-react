
const defaultHeaders = {
    'Content-Type': 'application/json'
}

export const getConfig = ({method = 'GET', body, headers = {}, ...rest} = {}) => {
    const config = {
        method,
        headers : {...defaultHeaders , ... headers},
        ...rest
    }

    if (body) {
        config.body = JSON.stringify(body);
    }

    return config;
}