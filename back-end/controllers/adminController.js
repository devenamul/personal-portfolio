// import module
import adminData from '../modals/adminData.js'


export const formDataCreate = async (req, res) => {
    try {
        
        const { firstName, lastName, email, phone, subject, message } = req.body;

       
        const newAdmin = await adminData.create({ firstName, lastName, email, phone, subject, message });

       
        res.status(201).json({
            message: 'Data created successfully',
            data: newAdmin
        });

    } catch (error) {
        
        console.log(error.message);
        res.status(500).json({
            message: 'Server Error',
            error: error.message
        });
    }
};