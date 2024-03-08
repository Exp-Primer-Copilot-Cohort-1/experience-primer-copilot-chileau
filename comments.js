// Create web server for comment
//==================================================================================================

// Import module
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Handle request
router.get ('/', commentController.comment_list);
router.get ('/:id', commentController.comment_detail);
router.post ('/', commentController.comment_create);
router.put ('/:id', commentController.comment_update);
router.delete ('/:id', commentController.comment_delete);

// Export module
module.exports = router;

//==================================================================================================
// End of comments.js
//==================================================================================================