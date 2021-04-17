const mysql = require('mysql');

const db = mysql({
    config: {
        host: '192.185.4.152',
        database: 'teslaman_leads',
        user: 'teslaman_cyrano',
        password: '@Donnygash00O',
    }
})

exports.query = async query => {
    try {
        const results = await db.query(query);
        await db.end();
        return results
    } catch (error) {
        return { 
            error
        }
    }
}