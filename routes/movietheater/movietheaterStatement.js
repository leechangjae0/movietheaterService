exports.createMovietheaterStatement = () => {
    return `
    INSERT INTO TB_MOVIETHEATGITER (
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
    UPDATE TB_MOVIETHEATER SET
    THEATER_NAME = ?,
    THEATER_LOCATION = ?
    
    WHERE IDX = ?
    `
}

exports.deleteMovietheaterStatement = () => {
    return `
    DELETE FROM TB_MOVIETHEATER WHERE IDX = ?
    `
}

exports.readOpenmovietheaterStatement = () => {
    return `
    SELECT TB_OPEN_MOVIETHEATER.IDX, TB_OPEN_MOVIETHEATER.THEATER_IDX, 
    TB_OPEN_MOVIETHEATER.SEAT_INFORMATION, TB_MOVIETHEATER.THEATER_NAME, 
    TB_MOVIETHEATER.THEATER_LOCATION, TB_MOVIETHEATER.IDX MOVIETHEATER_IDX
    FROM TB_OPEN_MOVIETHEATER
    JOIN TB_MOVIETHEATER
    ON TB_OPEN_MOVIETHEATER.THEATER_IDX = TB_MOVIETHEATER.IDX
    WHERE TB_OPEN_MOVIETHEATER.IDX = ?
    `
}