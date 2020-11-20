const express = require("express");
var app = express();

const { admin, db, storage } = require('./util/admin');
const bodyParser = require('body-parser');
const { v4 } = require("uuid");

const fbAuth = require('./util/fbAuth');
const config = require('./util/config');

const cors = require('cors');

app.set('port', (process.env.PORT || 5000));

// Automatically allow cross-origin requests
app.use(cors());

app.use(bodyParser.json());

//User
const firebase = require('firebase');
firebase.initializeApp(config);

app.get('/', (req, res) => {
    res.send('Server is running!')
});

//Get all restaurants
app.get('/restaurants', (req, res) => {
    return db.collection('restaurants').orderBy('dateCreate', 'desc').get()
        .then(docs => {
            let restaurants = [];
            docs.forEach(doc => {
                restaurants.push({
                    ...doc.data(),
                    id: doc.id, 
                })
            })
            return res.status(200).json(restaurants);
        })
        .catch(err => {
            return res.status(500).json({ error: 'Something wrongs!' })
        })
});

//Get with filter
app.get('/restaurantsFilter/:constraint', (req, res) => {
    return db.collection('restaurants').get()
        .then(docs => {
            let restaurants = [];
            docs.forEach(doc => {
                if(doc.data().name.toLowerCase().includes(req.params.constraint)
                   || doc.data().type.toLowerCase().includes(req.params.constraint) 
                    || doc.data().price.toString().toLowerCase().includes(req.params.constraint)
                     || doc.data().reporter.toLowerCase().includes(req.params.constraint)
                      || doc.data().visitDate.toLowerCase().includes(req.params.constraint)
                       || doc.data().visitDate.toLowerCase().includes(req.params.constraint)
                   ) {
                    restaurants.push({
                        ...doc.data(),
                        id: doc.id, 
                    })
                }
            })
            return res.status(200).json(restaurants);
        })
        .catch(err => {
            return res.status(500).json({ error: 'Something wrongs!'})
        })
});

//Get one
app.get('/restaurant/:id', (req, res) => {
    return db.doc(`/restaurants/${req.params.id}`).get()
        .then(doc => {
            let restaurant = {
                    ...doc.data(),
                    id: req.params.id
                }
            return res.status(200).json(restaurant);
        })
});

//Create a restaurant
app.post('/restaurant', fbAuth, (req, res) => {

    if (req.method !== "POST") {
        return res.status(400).json({ error: 'Method not allowed' });
    }

    let newRestaurant = {
        name: req.body.name,
        type: req.body.type,
        visitDate: req.body.visitDate,
        price: req.body.price,
        serviceRating: req.body.serviceRating,
        cleanlinessRating: req.body.cleanlinessRating,
        foodQualityRating: req.body.foodQualityRating,
        totalRating: req.body.totalRating,
        notes: req.body.notes,
        reporter: req.body.reporter,
        address: req.body.address,
        url: '',
        dateCreate: new Date().toISOString()
    }

    return db.collection('restaurants').add(newRestaurant)
        .then((doc) => {
            newRestaurant = {
                ...newRestaurant,
                id: doc.id
            }
        })
        .then(() => {       
            return res.status(201).json({ 
                restaurant: newRestaurant,
                message: 'Create successfully!'
            });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        })
});

//Post restaurant image
app.post('/restaurant/image/:id', fbAuth, (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const busboy = new BusBoy({ headers: req.headers });

    let token = v4();

    let imageFileName;
    let imageToBeUploaded = {};
    
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        if(mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return res.status(400).json({ error: 'Wrong file type submitted' });
        }

        const imageExtension = filename.split('.')[filename.split('.').length - 1];

        imageFileName = `${Math.round(Math.random()*10000000)}.${imageExtension}`;
        const filepath = path.join(os.tmpdir(), imageFileName);
        imageToBeUploaded = { filepath, mimetype };
        file.pipe(fs.createWriteStream(filepath));
    })
    busboy.on('finish', () => {     
        admin.storage().bucket().upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: imageToBeUploaded.mimetype,
                    //Generate token to be appended to imageUrl
                    firebaseStorageDownloadTokens: token,
                }
            }
        })
        .then(() => {
            const url = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${token}`;
            const restaurant = db.collection('restaurants').doc(req.params.id);
            return restaurant.update({url: url, imageName: imageFileName});
        })
        .then(() => {
            return res.json({ message: 'Image uploaded successfully' });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        })
    });
    req.pipe(busboy);
});

//Update a restaurant
app.patch('/restaurant/:id', fbAuth, (req, res) => {
    let updateRestaurant = {
        name: req.body.name,
        type: req.body.type,
        visitDate: req.body.visitDate,
        price: req.body.price,
        serviceRating: req.body.serviceRating,
        cleanlinessRating: req.body.cleanlinessRating,
        foodQualityRating: req.body.foodQualityRating,
        totalRating: req.body.totalRating,
        notes: req.body.notes,
        reporter: req.body.reporter,
        url: req.body.url,
        address: req.body.address,
        dateCreate: new Date().toISOString()
    }

    if(updateRestaurant.type === '' || 
        updateRestaurant.name === '' ||
            updateRestaurant.price === '' ||
                updateRestaurant.visitDate.toString() === '' ||
                    updateRestaurant.reporter === '') {
                        return res.status(500).json({ message: 'You must fill enough fields with *' });
                    }

    return db.collection('restaurants').doc(req.params.id).update({...updateRestaurant})
        .then((doc) => {
            const restaurant = {
                ...updateRestaurant,
                id: doc.id
            }
            return res.status(201).json({restaurant: restaurant});
        })
        .catch(err => {
            return res.status(500).json({ error: 'Update failed!' })
        })
});

//Delete a restaurant
app.get('/restaurant/delete/:id', fbAuth, (req, res) => {
    return db.collection('restaurants').doc(req.params.id).get()
        .then((doc) => {
            // Delete from storage
            return storage.bucket().file(`${doc.data().imageName}`).delete();
        })
        .then(() => {
            // Delete from firestore
            return db.collection('restaurants').doc(req.params.id).delete();
        })
        .then(() => {
            return res.status(200).json({ message: 'Delete successfully!' });
        }) 
        .catch(err => {
            return res.status(500).json({ error: 'Delete failed!' });
        })
});

//User login
app.post('/login', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    let globalToken;

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken();
        })
        .then(token => {
            globalToken = token;
            return db.collection('users').where('email', "==", user.email).get();
        })
        .then(docs => {
            docs.forEach(doc => {
                return res.status(200).json({token: globalToken, id: doc.id});
            })
        })
        .catch(err => {
            // auth/wrong-password
            // auth/user-not-user
            return res.status(403).json({ message : 'Wrong credentials, please try again' });

        })
});
app.post('/registor', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    };
    
    if(newUser.password.length < 6) {
        return res.status(500).json({ message: "The password must be more than 6 letters" });
    }

    if(newUser.password !== newUser.confirmPassword) {
        return res.status(500).json({ message: 'The password is not confirmed' });
    }

    if(newUser.email === '' || newUser.password === '') {
        return res.status(500).json({ message: 'Email or password is not correct' });
    }

    const noImg = 'noImg.png';

    let token, userId;
    db.collection('users').where('email', "==", newUser.email).get()
        .then(doc => {
            if(doc.exists){
                return res.status(400).json({ message: 'This account is already taken' });
            } else {
                return firebase
                            .auth()
                            .createUserWithEmailAndPassword(newUser.email, newUser.password);
            }
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
        .then(idToken => {
            token = idToken;
            const userCredentials = {
                email: newUser.email,
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media$token=${idToken}`,
                userId
            };
            return db.collection('users').add(userCredentials);
        })
        .then((data)=> {
            return res.status(201).json({ token, id: data.id });
        })
        .catch(err => {
            if(err.code === 'auth/email-already-in-use'){
                return res.status(400).json({ email: 'Email is already used' });
            } else {
                return res.status(500).json({ message: 'Something went wrong, please try again' });
            }
        })
});

// Get user detail
app.get('/user/:id', (req, res) => {
    db.doc(`/users/${req.params.id}`).get()
        .then(user => {
            const userData = {
                id: user.id,
                ...user.data()
            }
            return res.status(200).json(userData);
        })
        .catch(err => {
            return res.status(500).json({ message: 'Something went wrong' });
        })
});

//Post user image
app.post('/user/image/:id', fbAuth, (req, res) => {
    const BusBoy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const busboy = new BusBoy({ headers: req.headers });

    let token = v4();

    let imageFileName;
    let imageToBeUploaded = {};
    
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
        if(mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
            return res.status(400).json({ error: 'Wrong file type submitted' });
        }

        const imageExtension = filename.split('.')[filename.split('.').length - 1];

        imageFileName = `${Math.round(Math.random()*10000000)}.${imageExtension}`;
        const filepath = path.join(os.tmpdir(), imageFileName);
        imageToBeUploaded = { filepath, mimetype };
        file.pipe(fs.createWriteStream(filepath));
    })
    busboy.on('finish', () => {     
        admin.storage().bucket().upload(imageToBeUploaded.filepath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: imageToBeUploaded.mimetype,
                    //Generate token to be appended to imageUrl
                    firebaseStorageDownloadTokens: token,
                }
            }
        })
        .then(() => {

            const url = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${token}`;

            const image = db.collection('users').doc(req.params.id);
            return image.update({imageUrl: url});
        })
        .then(() => {
            return res.json({ message: 'Image uploaded successfully' });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code });
        })
    });
    req.pipe(busboy);
});

//Set up server
app.listen(app.get('port'), () => {
    console.log("Server running on port 5000");
});