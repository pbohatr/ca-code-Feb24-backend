const user = require('../model/signupschema')
const addvisit = require('../model/addvisitschema');
const cloudinary = require('cloudinary').v2

const addverify = async (req, res) => {
    try {
        const { phone } = req.body;
        console.log("phone", phone);
        // let { photo } = req.body;
        const existingUser = await user.findOne({ phone: phone });
        console.log("existingUser", existingUser);
        if (existingUser) {
            return res.status(400).json({ message: 'User Already Exists' });
        } else {
            res.status(201).json({
                // data:createUser,
                message: "OTP send successfully"
            });
        }
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

const addVisitor = async (req, res) => {
    try {
        const { phone, firstname, lastname, company, address, city, idcardnumber, aadharcard } = req.body
        let { imageUrl } = req.body;
        if (req.file) {
            const cloudData = await cloudinary.uploader.upload(req.file.path);
            imageUrl = cloudData.secure_url;
            photo = imageUrl;
            console.log("<<<<", imageUrl)
        }
        const createUser = await user.create({
            phone: phone,
            firstname: firstname,
            lastname: lastname,
            company: company,
            address: address,
            city: city,
            idcardnumber: idcardnumber,
            aadharcard: aadharcard,
            photo: imageUrl

        });
        res.status(201).json({
            data: createUser,
            message: "Visitor add successfully"
        });

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}

const addVisit = async (req, res) => {
        try {
            const { purposeofvisit, persontomeet, arrivaltime, departure } = req.body;
    
            const createUser = await addvisit.create({
                purposeofvisit: purposeofvisit,
                persontomeet: persontomeet,
                arrivaltime: arrivaltime,
                departure: departure
            });
                res.status(200).json({
                    data: createUser,
                    message: "Visitor added successfully"
                });
        }
        catch (error) {
            console.error(error); // Log the error for debugging purposes
            res.status(500).json({ message: "Something went wrong", error: error.message });
        }
    }

    

const getVisitors = async (req, res) => {

    try {
        const allVisitors = await user.find().sort({ _id: -1 });
        res.status(200).json({ visitors: allVisitors })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to Fetches Visitors data" })
    }
}

const editVisitors = async (req, res) => {

    const { id, phone, firstname, lastname, company, address, city, idcardnumber, aadharcard, purposeofvisit, persontomeet, arrivaltime } = req.body

    let imageUrl = null
    if (req.file) {
        try {
            const cloudData = await cloudinary.uploader.upload(req.file.path);
            imageUrl = cloudData.secure_url;
        } catch (error) {
            console.error("Error uploading image:", error);
            return res.status(500).json({ message: "Failed to upload image" });
        }
    }
    try {
        const visitor = await user.findById(id)
        if (!visitor) {
            return res.status(404).json({ message: "visitor not found" })
        }
        if (imageUrl) {
            try {
                // Delete the previous image from Cloudinary
                if (visitor.photo) {
                    const publicId = blog.photo.split('/').pop().split('.')[0];
                    await cloudinary.uploader.destroy(publicId);
                }
            } catch (error) {
                console.error("Error deleting previous image:", error);
                // Don't return error here, continue with the update
            }
        }
        visitor.firstname = firstname,
            visitor.lastname = lastname,
            visitor.city = city,
            visitor.company = company,
            visitor.address = address,
            visitor.phone = phone,
            visitor.idcardnumber = idcardnumber,
            visitor.aadharcard = aadharcard,
            visitor.purposeofvisit = purposeofvisit,
            visitor.persontomeet = persontomeet,
            visitor.arrivaltime = arrivaltime
        // blog.imageUrl=imageUrl
        if (imageUrl) {
            visitor.photo = imageUrl;
        }
        await visitor.save();
        res.status(200).json({ visitor })

    }
    catch (error) {
        console.error("Error updating visitors:", error);
        res.status(500).json({ message: "Failed to update visitors" })
    }

}

const getVisitor = async (req, res) => {

    try{
        const id = req.params._id;
        const visit = await user.findOne({id});
        res.status(200).json({visit:visit})
    }
    catch(error){
        console.log(error);
        res.status(500).json({ message: "Unable to Fetches Visitors data"})
    }
}
module.exports = {
    addverify,
    addVisitor,
    addVisit,
    getVisitors,
    editVisitors,
    getVisitor

};