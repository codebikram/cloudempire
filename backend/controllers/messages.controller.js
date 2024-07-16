import db from '../db.js';

export const addMessages = async (req, res, next) => {
  try {
    if (!req.body.time) throw new Error('Please enter a valid time');
    const query = 'INSERT INTO wp_consultation_messages SET ?';
    const [data] = await db.query(query, req.body);
    if (data.affectedRows === 1) {
      res.status(201).json({
        success: true,
        message: 'Message added successfully',
        data: req.body,
      });
    }
  } catch (error) {
    next(error);
  }
};
