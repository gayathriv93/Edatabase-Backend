const empModel = require('../Model/model');

const createStuff = (req, res, next) => {

    console
        .log(req.body)

    const empdb = new empModel({
        eId: req.body.eId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        position: req.body.position,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        dateofBirth: req.body.dateofBirth,
        panNumber: req.body.panNumber,
        salary: req.body.salary,
        streetAddress: req.body.streetAddress,
        streetAddress2: req.body.streetAddress2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        department: req.body.department,
        designation: req.body.designation,
        joiningDate: req.body.joiningDate,
        relievingDate: req.body.relievingDate,
        bgStatus: req.body.bgStatus,
        workLocation: req.body.workLocation,

    });

    empdb.save().then(
        () => {
            console.log('SSSS');
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            console.log('Error', error);

            res.status(400).json({
                error: error
            });
        }
    );
};

const deleteStuff = (req, res, next) => {
    empModel.deleteOne({
        _id: req.params.id
    }).then(
        (empdb) => {
            res.status(200).json(empdb);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

const plainGetstuff = (req, res, next) => {
    empModel.find().then(
        (empdbs) => {
            res.status(200).json(empdbs);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

const getStuff = (req, res, next) => {
    empModel.findById(req.params.id).then(
        (empdb) => {
            res.status(200).json(empdb);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

const putStuff = async (req, res, next) => {
    try {

        let doc = await empModel.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });

        res.status(200).json(doc);

    } catch (er) {
        res.status(400).json({
            error: er
        });
    }
};

module.exports = {
    createStuff,
    deleteStuff,
    getStuff,
    putStuff,
    plainGetstuff
}
