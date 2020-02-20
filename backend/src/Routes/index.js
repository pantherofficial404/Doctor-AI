const router = require('express').Router();

const { AuthController, HospitalController ,PatientController,OrderController ,CabController} = require('Controllers');
const { authMiddleware } = require('Middleware');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

router.use(authMiddleware);

// Hospital Controllers
router.get('/hospital', HospitalController.getHospitalListing);
router.get('/hospital/nearyby', HospitalController.getNearyByHospitals);
router.get('/hospital/:hospitalId', HospitalController.getHospitalById);

// Patient Controller
router.get('/patient',PatientController.getUserPatient);
router.post('/patient',PatientController.addPatient);
router.post('/patient/cab',PatientController.addPatientCab);

// Order Controller
router.post('/create-order',OrderController.createOrder);
router.post('/complete-order',OrderController.completeOrder);
router.get('/get-order-by-type',OrderController.getOrderByType);
router.get('/current-active-order',OrderController.getCurrentActiveOrder);

// Cab Controller
router.post('/cab',CabController.addCab);

module.exports = router;
