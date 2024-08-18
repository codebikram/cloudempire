import db from '../db.js';
export const getCounterInfo = async (req, res, next) => {
  try {
    const [data] = await db.query('SELECT * FROM wp_information WHERE id = ?', [
      '1',
    ]);
    res.status(200).json(data[0]);
  } catch (error) {
    next(error);
  }
};
