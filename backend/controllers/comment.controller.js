import db from '../db.js';

export const addComment = async (req, res, next) => {
  try {
    const forwardedFor = req.headers['x-forwarded-for'];
    const ip = forwardedFor
      ? forwardedFor.split(',')[0].trim()
      : req.headers['x-real-ip'] ||
        req.headers['cf-connecting-ip'] ||
        req.socket.remoteAddress ||
        '';
    const details = {
      comment_post_ID: req.body.comment_post_ID,
      comment_author: req.body.name,
      comment_author_email: req.body.email,
      comment_author_url: req.body.website,
      comment_author_IP: ip,
      comment_date: new Date(),
      comment_date_gmt: new Date(),
      comment_content: req.body.comment,
      comment_agent: req.body.comment_agent,
      comment_approved: 0,
      comment_type: 'comment',
      user_id: 0,
      comment_parent: 0,
    };
    console.log(details);
    const query = 'INSERT INTO wp_comments SET ?';
    const [data] = await db.query(query, details);
    if (data.affectedRows === 1) {
      res.status(201).json({
        success: true,
        message: 'Thank you for your comment!',
        data: details,
      });
    }
  } catch (error) {
    next(error);
  }
};
