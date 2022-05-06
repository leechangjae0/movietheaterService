exports.createMovietheaterStatement = () => {
    return `
    INSERT INTO TB_MOVIETHEATER (
        THEATER_NAME, THEATER_LOCATION
    ) VALUES (
        ?, ?
    )   
    `
}
exports.readMovietheaterStatement = () => {
    return `
    SELECT *
    FROM TB_MOVIETHEATER
    `
}
exports.updateMovietheaterStatement = () => {
    return `
    UPDATE TB_MOVIETHEATER
    ? = '?'
    WHERE ID = '?'
    `
}

exports.deleteMovietheaterStatement = () => {
    return `
    DELETE FROM TB_MOVIETHEATER WHERE ? = '?'
    `
}