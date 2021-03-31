const db = require('../models');
const cloudinary = require('cloudinary');
const multer = require('multer');
const uploads = multer({ dest: './uploads'});

const index = (req, res) => {
    // Purpose: Fetch all examples from DB and return
    console.log('=====> Inside GET /instagram');

    db.InstagramPost.find({}, (err, foundIgPosts) => {
        if (err) console.log('Error in instagram#index:', err);
        res.json(foundIgPosts);
    });
}

const create = async (req, res) => {
    // Purpose: Create one instagram post by adding body to DB, and return
    console.log('=====> Inside POST /instagram');
    console.log('=====> req.body');
    console.log(req.body); // object used for creating new instagram post

    // grab the uploaded file
    // let image = req.file.path;
    // console.log('===> image ->', image);
    // console.log('+++++++++>>>>> YOO REQ --->', req);
    // upload image to cloudinary
    // cloudinary.uploader.upload(image, (result) => {
    //     // the result that comes back from cloudinary
    //     console.log('====> RESULT FROM CLOUDINARY', result);
    //     const { url } = result;
    //     const newPost = { 
    //         imageUrl: url, 
    //         ...req.body
    //     };
    //     db.InstagramPost.create(newPost, (err, savedIgPost) => {
    //         if (err) console.log('Error in instagram#create:', err);
    //         res.json(savedIgPost);
    //     });
    // });
};

// const update = (req, res) => {
//     // Purpose: Update one example in the DB, and return
//     console.log('=====> Inside PUT /examples/:id');
//     console.log('=====> req.params');
//     console.log(req.params); // object used for finding example by id
//     console.log('=====> req.body');
//     console.log(req.body); // object used for updating example

//     db.Example.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExample) => {
//         if (err) console.log('Error in example#update:', err);
//         res.json(updatedExample);
//     });
// };

// const destroy = (req, res) => {
//     // Purpose: Update one example in the DB, and return
//     console.log('=====> Inside DELETE /examples/:id');
//     console.log('=====> req.params');
//     console.log(req.params); // object used for finding example by id
    
//     db.Example.findByIdAndDelete(req.params.id, (err, deletedExample) => {
//         if (err) console.log('Error in example#destroy:', err);
//           res.sendStatus(200);
//           console.log(deletedExample);
//     });
// };

module.exports = {
    index,
    create,
};

///////////////////////////////////////////////////////////////////////////////////////////
// DON'T USE YET - Not tested
// const query = (req, res) => {
//     // Purpose: Fetch one example via query from DB and return
//     console.log('=====> Inside "query" POST /examples/query');
//     console.log('=====> req.query');
//     console.log(req.query); // object using for doing a query search on an example

//     db.Example.find(req.query, (err, foundExample) => {
//         if (err) console.log('Error in example#query:', err);
//         res.json(foundExample);
//     });
// }