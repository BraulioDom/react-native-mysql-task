import { connect } from '../database';

export const getTasks = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query('select * from tasks');
    res.json(rows);
}

export const getTask = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query(
        'select * from tasks where id = ?', 
        [req.params.id]
    );
    res.json(rows[0]);
}

export const getTaskCount = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query(
        'select count(*) from tasks'
    );
    res.json(rows[0]['count(*)']);
}

export const saveTask = async (req, res) => {
    const db = await connect();
    const [results] = await db.query(
        'insert into tasks(title, description) values(?,?)', [
            req.body.title,
            req.body.description
        ], 
    );
    res.json({
        id: results.insertId,
        ...req.body
    })
}

export const deleteTask = async (req, res) => {
    const db = await connect();
    await db.query(
        'delete from tasks where id = ?', 
        [req.params.id]
    );
    res.sendStatus(204);
}

export const updateTask = async (req, res) => {
    const db = await connect();
    await db.query(
        'update tasks set ? where id = ?', [
            req.body, req.params.id
        ]
    );
    res.sendStatus(204);
}